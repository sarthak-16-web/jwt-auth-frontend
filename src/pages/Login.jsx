import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await api.post("/login", formData);

      const user = res.data?.data?.user;
      const accessToken = res.data?.data?.accessToken;

      if (!user || !accessToken) {
        throw new Error("Invalid login response");
      }

      login(user, accessToken);
      navigate("/profile");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      width: "100%",
      maxWidth: "430px",
      background: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      borderRadius: "24px",
      padding: "32px",
      backdropFilter: "blur(12px)",
      boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
      color: "#fff",
    },
    badge: {
      display: "inline-block",
      padding: "7px 14px",
      marginBottom: "18px",
      fontSize: "13px",
      fontWeight: "600",
      borderRadius: "999px",
      background: "rgba(59, 130, 246, 0.15)",
      border: "1px solid rgba(59, 130, 246, 0.3)",
      color: "#93c5fd",
    },
    title: {
      fontSize: "34px",
      fontWeight: "700",
      marginBottom: "10px",
    },
    subtitle: {
      color: "#cbd5e1",
      fontSize: "15px",
      lineHeight: "1.7",
      marginBottom: "24px",
    },
    formGroup: {
      marginBottom: "18px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "14px",
      color: "#e2e8f0",
      fontWeight: "600",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "14px",
      border: "1px solid #334155",
      background: "rgba(15, 23, 42, 0.75)",
      color: "#fff",
      fontSize: "15px",
      outline: "none",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "14px",
      border: "none",
      borderRadius: "14px",
      background: "#3b82f6",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "700",
      cursor: "pointer",
      marginTop: "8px",
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.25)",
      transition: "0.3s ease",
    },
    message: {
      marginTop: "16px",
      padding: "12px 14px",
      borderRadius: "12px",
      background: "rgba(239, 68, 68, 0.12)",
      border: "1px solid rgba(239, 68, 68, 0.35)",
      color: "#fecaca",
      fontSize: "14px",
    },
    footerText: {
      marginTop: "20px",
      textAlign: "center",
      color: "#cbd5e1",
      fontSize: "14px",
    },
    link: {
      color: "#60a5fa",
      textDecoration: "none",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <span style={styles.badge}>Welcome Back</span>

        <h2 style={styles.title}>Login</h2>
        <p style={styles.subtitle}>
          Sign in to access your protected profile and continue using the JWT auth system.
        </p>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
          onMouseOver={(e) => {
            if (!loading) e.target.style.background = "#2563eb";
          }}
          onMouseOut={(e) => {
            if (!loading) e.target.style.background = "#3b82f6";
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && <p style={styles.message}>{message}</p>}

        <p style={styles.footerText}>
          Don’t have an account?{" "}
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;