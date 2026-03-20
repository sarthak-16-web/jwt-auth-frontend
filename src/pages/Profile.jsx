import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { accessToken, logout } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const profileData = res.data?.data?.user || res.data?.data;
        setUser(profileData);
      } catch (error) {
        setMessage(error.response?.data?.message || "Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchProfile();
    } else {
      setLoading(false);
      setMessage("No access token found. Please login first.");
    }
  }, [accessToken]);

  const handleFrontendLogout = () => {
    logout();
    navigate("/login");
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
      maxWidth: "700px",
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
    message: {
      marginBottom: "18px",
      padding: "12px 14px",
      borderRadius: "12px",
      background: "rgba(239, 68, 68, 0.12)",
      border: "1px solid rgba(239, 68, 68, 0.35)",
      color: "#fecaca",
      fontSize: "14px",
    },
    loadingText: {
      color: "#cbd5e1",
      fontSize: "16px",
      marginBottom: "18px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "18px",
      marginTop: "10px",
      marginBottom: "28px",
    },
    infoCard: {
      padding: "20px",
      borderRadius: "18px",
      background: "rgba(15, 23, 42, 0.7)",
      border: "1px solid #334155",
    },
    label: {
      fontSize: "13px",
      color: "#94a3b8",
      marginBottom: "8px",
    },
    value: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#ffffff",
      wordBreak: "break-word",
    },
    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
    },
    logoutBtn: {
      padding: "14px 24px",
      border: "none",
      borderRadius: "14px",
      background: "#ef4444",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "0.3s ease",
      boxShadow: "0 10px 30px rgba(239, 68, 68, 0.25)",
    },
    homeBtn: {
      padding: "14px 24px",
      border: "1px solid #475569",
      borderRadius: "14px",
      background: "transparent",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "0.3s ease",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <span style={styles.badge}>Protected Profile</span>

        <h2 style={styles.title}>Profile</h2>
        <p style={styles.subtitle}>
          This page is accessible only after successful login using JWT authentication.
        </p>

        {message && <p style={styles.message}>{message}</p>}

        {loading ? (
          <p style={styles.loadingText}>Loading profile...</p>
        ) : user ? (
          <div style={styles.grid}>
            <div style={styles.infoCard}>
              <div style={styles.label}>Full Name</div>
              <div style={styles.value}>{user.fullname || "Not available"}</div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.label}>Username</div>
              <div style={styles.value}>{user.username || "Not available"}</div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.label}>Email</div>
              <div style={styles.value}>{user.email || "Not available"}</div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.label}>Status</div>
              <div style={styles.value}>Authenticated User</div>
            </div>
          </div>
        ) : (
          !message && <p style={styles.loadingText}>No profile data found.</p>
        )}

        <div style={styles.buttonRow}>
          <button
            onClick={handleFrontendLogout}
            style={styles.logoutBtn}
            onMouseOver={(e) => (e.target.style.background = "#dc2626")}
            onMouseOut={(e) => (e.target.style.background = "#ef4444")}
          >
            Logout
          </button>

          <button
            onClick={() => navigate("/")}
            style={styles.homeBtn}
            onMouseOver={(e) => (e.target.style.background = "#1e293b")}
            onMouseOut={(e) => (e.target.style.background = "transparent")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;