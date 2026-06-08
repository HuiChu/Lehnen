import { Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import SavedPage from './pages/SavedPage';
import MyPage from './pages/MyPage';
import SettingPage from './pages/SettingPage';

export default function App() {
  return (
    <div className="mx-auto flex h-[100dvh] max-w-phone flex-col overflow-hidden bg-cream shadow-2xl">
      <main className="min-h-0 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/settings" element={<SettingPage />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}
