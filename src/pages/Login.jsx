import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) {
      alert("Please select a role");
      return;
    }

    // Save selected role
    localStorage.setItem("certiUser", role);

    // Navigate based on role
    navigate(`/${role}`);
  };

  return (
    <div className="login-box">
      <h2>Login</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="recruiter">Recruiter</option>
        <option value="institute">Institute</option>
        <option value="admin">Admin</option>
      </select>

      <button className="btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;