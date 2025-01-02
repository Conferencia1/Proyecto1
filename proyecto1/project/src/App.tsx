import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import PrayerBook from './pages/PrayerBook';
import Octavario from './pages/Octavario';

export default function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prayer-book" element={<PrayerBook />} />
            <Route path="/octavario" element={<Octavario />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}