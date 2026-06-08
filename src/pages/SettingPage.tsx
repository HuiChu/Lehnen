import { useAppStore } from '../store/useAppStore';
import { useSpeech } from '../hooks/useSpeech';

export default function SettingPage() {
  const { settings, updateSettings } = useAppStore();
  const speech = useSpeech();

  return (
    <div className="no-scrollbar h-full overflow-y-auto px-5 pb-6 pt-5">
      <h1 className="mb-5 text-2xl font-extrabold text-ink">設定</h1>

      <div className="space-y-4">
        {/* 語速 */}
        <div className="rounded-2xl bg-white p-4 shadow-card">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-semibold text-ink">朗讀語速</span>
            <span className="text-sm font-bold text-orange-deep">
              {settings.rate.toFixed(1)}×
            </span>
          </div>
          <input
            type="range"
            min={0.5}
            max={1.5}
            step={0.1}
            value={settings.rate}
            onChange={(e) => updateSettings({ rate: Number(e.target.value) })}
            className="w-full accent-orange"
          />
          <button
            onClick={() =>
              speech.speak('Ich hätte gern einen Kaffee.', {
                rate: settings.rate,
                voiceName: settings.voiceName,
              })
            }
            className="mt-3 rounded-full bg-orange px-4 py-1.5 text-sm font-semibold text-white"
          >
            試聽
          </button>
        </div>

        {/* 中文對照 */}
        <label className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-card">
          <span className="font-semibold text-ink">預設顯示中文對照</span>
          <input
            type="checkbox"
            checked={settings.showTranslation}
            onChange={(e) =>
              updateSettings({ showTranslation: e.target.checked })
            }
            className="h-5 w-5 accent-orange"
          />
        </label>

        {/* voice 選擇 */}
        <div className="rounded-2xl bg-white p-4 shadow-card">
          <label className="mb-2 block font-semibold text-ink">德語語音</label>
          {speech.germanVoices.length === 0 ? (
            <p className="text-sm text-ink/45">
              系統未安裝德語語音，將使用瀏覽器預設語音。
            </p>
          ) : (
            <select
              value={settings.voiceName}
              onChange={(e) => updateSettings({ voiceName: e.target.value })}
              className="w-full rounded-xl border border-ink/15 bg-cream px-3 py-2 text-sm"
            >
              <option value="">自動挑選（de-DE）</option>
              {speech.germanVoices.map((v) => (
                <option key={v.name} value={v.name}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-ink/35">
        語塊學德文 · Lehnen — 用 Web Speech API 朗讀，錄音僅留存在本機。
      </p>
    </div>
  );
}
