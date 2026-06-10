interface Props {
  /** 瀏覽器是否支援 Web Speech API（speechSynthesis）。 */
  supported: boolean;
  /** 是否偵測到德語語音。 */
  hasGermanVoice: boolean;
}

/**
 * 語音可用性提示橫幅：
 * 不支援 → 紅字；支援但無德語語音 → 琥珀字；其餘不顯示。
 * 取代 LearnPage / StoryPage 各自手刻的版本。
 */
export default function VoiceWarning({ supported, hasGermanVoice }: Props) {
  if (!supported) {
    return (
      <p className="pb-2 text-center text-xs text-red-500/70">
        此瀏覽器不支援語音朗讀（Web Speech API）
      </p>
    );
  }
  if (!hasGermanVoice) {
    return (
      <p className="pb-2 text-center text-xs text-amber-600/80">
        未偵測到德語語音，朗讀可能使用預設語音。可在系統安裝德語語音包。
      </p>
    );
  }
  return null;
}
