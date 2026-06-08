import { useCallback, useEffect, useState } from 'react';

/**
 * 封裝 window.speechSynthesis 的德語朗讀（「聽 AI」）。
 * 處理 voices 非同步載入，優先挑選 de-DE voice。
 */
export function useSpeech() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [speaking, setSpeaking] = useState(false);
  const supported =
    typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    if (!supported) return;
    const load = () => {
      const all = window.speechSynthesis.getVoices();
      if (all.length) setVoices(all);
    };
    load();
    window.speechSynthesis.addEventListener('voiceschanged', load);
    return () =>
      window.speechSynthesis.removeEventListener('voiceschanged', load);
  }, [supported]);

  /** 取得德語可用的 voice 清單 */
  const germanVoices = voices.filter((v) => v.lang.toLowerCase().startsWith('de'));

  const speak = useCallback(
    (text: string, opts?: { rate?: number; voiceName?: string }) => {
      if (!supported) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'de-DE';
      utter.rate = opts?.rate ?? 0.9;

      const preferred =
        (opts?.voiceName &&
          voices.find((v) => v.name === opts.voiceName)) ||
        voices.find((v) => v.lang === 'de-DE') ||
        voices.find((v) => v.lang.toLowerCase().startsWith('de'));
      if (preferred) utter.voice = preferred;

      utter.onstart = () => setSpeaking(true);
      utter.onend = () => setSpeaking(false);
      utter.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(utter);
    },
    [supported, voices]
  );

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, [supported]);

  const hasGermanVoice = germanVoices.length > 0;

  return { speak, stop, speaking, supported, germanVoices, hasGermanVoice };
}
