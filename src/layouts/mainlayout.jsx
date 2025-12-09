import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function MainLayout({ onLogout }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Tutup menu ketika pindah halaman
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      {/* SIDEBAR / TOPBAR */}
      <aside className="app-sidebar">
        {/* Brand kiri */}
        <div className="app-sidebar-left">
          <div className="app-brand">
            Frontend<span>Testing</span>
          </div>
        </div>

        {/* Tombol hamburger (hanya tampil di layar kecil lewat CSS) */}
        <button
          type="button"
          className="app-hamburger"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span className="app-hamburger-line" />
          <span className="app-hamburger-line" />
          <span className="app-hamburger-line" />
        </button>

        {/* Wrapper menu: di desktop selalu kelihatan sebagai sidebar,
            di mobile jadi dropdown yang dikontrol oleh isMobileMenuOpen */}
        <div
          className={`app-nav-wrapper ${
            isMobileMenuOpen ? "app-nav-wrapper--open" : ""
          }`}
        >
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

          <button
            type="button"
            className="app-logout-btn"
            onClick={onLogout}
          >
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
