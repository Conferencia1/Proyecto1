import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaPray } from 'react-icons/fa';

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bg-blue-600 text-white">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className={`flex flex-col items-center ${location.pathname === '/' ? 'text-white' : 'text-blue-200'}`}>
          <FaHome size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/prayer-book" className={`flex flex-col items-center ${location.pathname === '/prayer-book' ? 'text-white' : 'text-blue-200'}`}>
          <FaBook size={24} />
          <span className="text-xs mt-1">Prayer Book</span>
        </Link>
        <Link to="/octavario" className={`flex flex-col items-center ${location.pathname === '/octavario' ? 'text-white' : 'text-blue-200'}`}>
          <FaPray size={24} />
          <span className="text-xs mt-1">Octavario</span>
        </Link>
      </div>
    </nav>
  );
}