import { Link, Outlet, useLocation } from "react-router-dom";

function MainLayout({ onLogout }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="app-shell">
      {/* SIDEBAR */}
      <aside className="app-sidebar">
        <div>
          <div className="app-brand">
            Frontend<span>Testing</span>
          </div>
        </div>

        <div>
          <div className="app-nav-section-title">Main</div>
          <nav className="app-nav">
            <Link
              to="/dashboard"
              className={`app-nav-link ${
                isActive("/dashboard") ? "app-nav-link--active" : ""
              }`}
            >
              <span className="app-nav-link-dot" />
              <span>Dashboard</span>
            </Link>
          </nav>
        </div>

        <div>
          <div className="app-nav-section-title">Event</div>
          <nav className="app-nav">
            <Link
              to="/events"
              className={`app-nav-link ${
                isActive("/events") ? "app-nav-link--active" : ""
              }`}
            >
              <span className="app-nav-link-dot" />
              <span>List Event</span>
            </Link>
            <Link
              to="/event-transactions"
              className={`app-nav-link ${
                isActive("/event-transactions") ? "app-nav-link--active" : ""
              }`}
            >
              <span className="app-nav-link-dot" />
              <span>Event Transaction</span>
            </Link>
          </nav>
        </div>

        <button type="button" className="app-logout-btn" onClick={onLogout}>
          <span>Logout</span>
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
