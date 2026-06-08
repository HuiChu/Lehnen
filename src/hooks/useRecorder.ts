import { useCallback, useRef, useState } from 'react';

type RecorderStatus = 'idle' | 'recording' | 'recorded' | 'denied';

/** 依瀏覽器支援度挑一個能錄的容器格式（iOS 只支援 mp4，Chrome 用 webm，Firefox 用 ogg）。 */
function pickMimeType(): string {
  if (typeof MediaRecorder === 'undefined' || !MediaRecorder.isTypeSupported) {
    return '';
  }
  const candidates = [
    'audio/mp4',
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/ogg',
  ];
  return candidates.find((t) => MediaRecorder.isTypeSupported(t)) ?? '';
}

/**
 * 封裝 MediaRecorder 錄音與回放（「錄音」「聽我」）。
 */
export function useRecorder() {
  const [status, setStatus] = useState<RecorderStatus>('idle');
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const urlRef = useRef<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const supported =
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices &&
    typeof window !== 'undefined' &&
    'MediaRecorder' in window;

  const start = useCallback(async () => {
    if (!supported) return;
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];

      const mimeType = pickMimeType();
      const recorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        // 用實際錄到的格式組 Blob，不再硬編 webm（否則 iOS 的 mp4 會解碼失敗）。
        const type = recorder.mimeType || chunksRef.current[0]?.type || '';
        const blob = new Blob(chunksRef.current, type ? { type } : undefined);
        if (urlRef.current) URL.revokeObjectURL(urlRef.current);
        urlRef.current = URL.createObjectURL(blob);
        setProgress(0);
        setStatus(blob.size > 0 ? 'recorded' : 'idle');
        if (blob.size === 0) setError('沒有錄到聲音，請再試一次。');
        streamRef.current?.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setStatus('recording');
    } catch {
      setStatus('denied');
      setError('無法取得麥克風權限，請在瀏覽器允許麥克風後再試。');
    }
  }, [supported]);

  const stop = useCallback(() => {
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  }, []);

  const play = useCallback(() => {
    if (!urlRef.current) return;

    // 停掉前一次播放，重用單一 audio 元素。
    audioRef.current?.pause();
    const audio = audioRef.current ?? new Audio();
    audioRef.current = audio;
    audio.src = urlRef.current;
    audio.currentTime = 0;

    audio.onplaying = () => setPlaying(true);
    audio.ontimeupdate = () => {
      if (audio.duration > 0 && isFinite(audio.duration)) {
        setProgress(audio.currentTime / audio.duration);
      }
    };
    const reset = () => {
      setPlaying(false);
      setProgress(0);
    };
    audio.onended = reset;
    audio.onpause = reset;
    audio.onerror = () => {
      reset();
      setError('無法播放這段錄音，可能是此瀏覽器不支援該錄音格式。');
    };

    audio.play().catch(() => {
      reset();
      setError('無法播放這段錄音，可能是此瀏覽器不支援該錄音格式。');
    });
  }, []);

  const hasRecording = status === 'recorded';

  return {
    status,
    playing,
    progress,
    error,
    hasRecording,
    supported,
    start,
    stop,
    play,
  };
}
