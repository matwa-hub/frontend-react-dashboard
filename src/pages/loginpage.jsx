function LoginPage({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); // langsung sukses (hardcode)
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Bagian kiri: form */}
        <div className="login-form-wrapper">
          <h1 className="login-title">Selamat datang 👋</h1>
          <p className="login-subtitle">
            Masuk untuk mengelola dashboard, event, dan transaksi pendaftar.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label className="login-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="login-input"
                placeholder="you@example.com"
              />
            </div>

            <div className="login-field">
              <label className="login-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="login-input"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <p className="login-footer-text">
            Demo only – gunakan email dan password apa saja untuk masuk.
          </p>
        </div>

        {/* Bagian kanan: gambar / hero */}
        <div className="login-hero">
          <div className="login-hero-bubbles">
            <div className="login-hero-bubble login-hero-bubble--blue" />
            <div className="login-hero-bubble login-hero-bubble--cyan" />
          </div>

          <div className="login-hero-inner">
            <div className="login-hero-badge">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "999px",
                  background: "#22c55e",
                }}
              />
              Event Monitoring
            </div>
            <h2 className="login-hero-title">
              Kelola event dan peserta dalam satu dashboard.
            </h2>
            <p className="login-hero-text">
              Pantau statistik event, daftar peserta, dan transaksi pendaftaran.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
