import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Verify from "./pages/Verify";
import History from "./pages/History";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import InstituteDashboard from "./pages/InstituteDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  const userRole = localStorage.getItem("certiUser");

  return (
    <Router>
      <div className="navbar">
        <h1>CertiChain</h1>

        {userRole && (
          <div className="nav-user">
            <span>Logged in as: {userRole}</span>
            <button
  className="dark-toggle"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀ Light" : "🌙 Dark"}
</button>
          </div>
        )}

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/verify">Verify</Link>
          <Link to="/history">History</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" 
          element={<ProtectedRoute allowedRole="student">
          <StudentDashboard /> </ProtectedRoute>} />
          <Route path="/recruiter" 
          element={<ProtectedRoute allowedRole="recruiter">
          <RecruiterDashboard /> </ProtectedRoute>} />
          <Route path="/institute" 
          element={ <ProtectedRoute allowedRole="institute">
      <InstituteDashboard /> </ProtectedRoute>} />
          <Route path="/admin" 
          element={<ProtectedRoute allowedRole="admin">
      <AdminDashboard /> </ProtectedRoute>} />
        </Routes>
      </div>
       <Footer />
    </Router>
   
  );

}

export default App;