import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "./pages/loginpage.jsx";
import MainLayout from "./layouts/mainlayout.jsx";
import DashboardPage from "./pages/dashboardpage.jsx";
import EventListPage from "./pages/eventlistpage.jsx";
import EventTransactionPage from "./pages/eventtransactionpage.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("isAuthenticated");
    if (stored === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage onLogin={handleLogin} />}
      />
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <MainLayout onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      >
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="events" element={<EventListPage />} />
        <Route path="event-transactions" element={<EventTransactionPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
