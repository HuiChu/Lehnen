import { useCallback, useRef, useState } from 'react';

type RecorderStatus = 'idle' | 'recording' | 'recorded' | 'denied';

/**
 * 封裝 MediaRecorder 錄音與回放（「錄音」「聽我」）。
 */
export function useRecorder() {
  const [status, setStatus] = useState<RecorderStatus>('idle');
  const [playing, setPlaying] = useState(false);
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
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        if (urlRef.current) URL.revokeObjectURL(urlRef.current);
        urlRef.current = URL.createObjectURL(blob);
        setStatus('recorded');
        streamRef.current?.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      setStatus('recording');
    } catch {
      setStatus('denied');
    }
  }, [supported]);

  const stop = useCallback(() => {
    mediaRecorderRef.current?.state === 'recording' &&
      mediaRecorderRef.current.stop();
  }, []);

  const play = useCallback(() => {
    if (!urlRef.current) return;
    const audio = new Audio(urlRef.current);
    audioRef.current = audio;
    audio.onended = () => setPlaying(false);
    audio.play();
    setPlaying(true);
  }, []);

  const hasRecording = status === 'recorded';

  return { status, playing, hasRecording, supported, start, stop, play };
}
