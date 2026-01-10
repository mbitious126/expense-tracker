import './BottomNav.css';

const BottomNav = ({ activeView, onViewChange }) => {
  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`}
        onClick={() => onViewChange('dashboard')}
        aria-label="Dashboard"
      >
        <svg
          className="nav-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="nav-label">Dashboard</span>
      </button>

      <button
        className={`nav-item ${activeView === 'history' ? 'active' : ''}`}
        onClick={() => onViewChange('history')}
        aria-label="History"
      >
        <svg
          className="nav-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="nav-label">History</span>
      </button>
    </nav>
  );
};

export default BottomNav;

