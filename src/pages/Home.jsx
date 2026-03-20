import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      padding: "60px 20px",
      position: "relative",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },

    /* POPUP STYLES */
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.72)",
      backdropFilter: "blur(8px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      padding: "20px",
    },
    popup: {
      width: "100%",
      maxWidth: "760px",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "24px",
      padding: "30px",
      boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
      position: "relative",
      animation: "popupFade 0.3s ease",
    },
    popupTitle: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#facc15",
      marginBottom: "18px",
    },
    popupText: {
      fontSize: "16px",
      lineHeight: "1.9",
      color: "#e2e8f0",
      marginBottom: "24px",
    },
    closeBtn: {
      position: "absolute",
      top: "14px",
      right: "18px",
      background: "transparent",
      border: "none",
      color: "#ffffff",
      fontSize: "28px",
      cursor: "pointer",
    },
    okBtn: {
      border: "none",
      background: "#3b82f6",
      color: "#fff",
      padding: "12px 22px",
      borderRadius: "12px",
      fontWeight: "600",
      cursor: "pointer",
      fontSize: "15px",
    },

    badge: {
      display: "inline-block",
      padding: "8px 16px",
      marginBottom: "20px",
      fontSize: "14px",
      fontWeight: "600",
      borderRadius: "999px",
      background: "rgba(59, 130, 246, 0.15)",
      border: "1px solid rgba(59, 130, 246, 0.3)",
      color: "#93c5fd",
    },
    hero: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "50px",
      alignItems: "center",
    },
    title: {
      fontSize: "56px",
      fontWeight: "700",
      lineHeight: "1.1",
      marginBottom: "20px",
    },
    titleAccent: {
      color: "#60a5fa",
    },
    description: {
      color: "#cbd5e1",
      fontSize: "18px",
      lineHeight: "1.8",
      marginBottom: "30px",
      maxWidth: "560px",
    },
    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
    },
    primaryBtn: {
      textDecoration: "none",
      padding: "14px 26px",
      borderRadius: "14px",
      background: "#3b82f6",
      color: "#fff",
      fontWeight: "600",
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.25)",
      transition: "0.3s ease",
    },
    secondaryBtn: {
      textDecoration: "none",
      padding: "14px 26px",
      borderRadius: "14px",
      border: "1px solid #475569",
      color: "#fff",
      fontWeight: "600",
      background: "transparent",
      transition: "0.3s ease",
    },
    cardWrap: {
      position: "relative",
    },
    glassCard: {
      background: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "28px",
      padding: "30px",
      backdropFilter: "blur(12px)",
      boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
    },
    infoBox: {
      padding: "18px",
      borderRadius: "18px",
      background: "rgba(15, 23, 42, 0.75)",
      border: "1px solid #334155",
      marginBottom: "20px",
    },
    infoTitle: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    infoText: {
      color: "#cbd5e1",
      lineHeight: "1.7",
      margin: 0,
    },
    miniGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "15px",
    },
    miniCard: {
      padding: "18px",
      borderRadius: "18px",
      background: "rgba(15, 23, 42, 0.6)",
      border: "1px solid #334155",
    },
    miniLabel: {
      fontSize: "13px",
      color: "#94a3b8",
      marginBottom: "8px",
    },
    miniValue: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#ffffff",
    },
    features: {
      marginTop: "70px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    featureCard: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "22px",
      padding: "24px",
      transition: "0.3s ease",
    },
    featureIcon: {
      fontSize: "32px",
      marginBottom: "14px",
    },
    featureTitle: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    featureText: {
      color: "#cbd5e1",
      lineHeight: "1.7",
      margin: 0,
    },
  };

  return (
    <>
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <button style={styles.closeBtn} onClick={() => setShowPopup(false)}>
              ×
            </button>

            <h2 style={styles.popupTitle}>Project Execution Note</h2>

            <p style={styles.popupText}>
              The project works correctly in the local environment using local
              MongoDB Compass. User registration, login, bcrypt password hashing,
              and JWT authentication are functioning properly on localhost.
              Attached screenshots in the documentation show the successful user
              flow with timestamps. If the project is considered during the
              interview process, it can be run in the same way on localhost
              without any changes. The deployment issue is due to cloud database
              availability or usage limits on MongoDB Atlas, not because of the
              frontend or authentication logic.
            </p>

            <button style={styles.okBtn} onClick={() => setShowPopup(false)}>
              Okay, Continue
            </button>
          </div>
        </div>
      )}

      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.hero}>
            <div>
              <span style={styles.badge}>Secure Authentication System</span>

              <h1 style={styles.title}>
                JWT Auth <span style={styles.titleAccent}>Frontend</span>
              </h1>

              <p style={styles.description}>
                A modern authentication frontend built with registration, login,
                and protected profile access using JWT authentication.
              </p>

              <div style={styles.buttonRow}>
                <Link
                  to="/register"
                  style={styles.primaryBtn}
                  onMouseOver={(e) => (e.target.style.background = "#2563eb")}
                  onMouseOut={(e) => (e.target.style.background = "#3b82f6")}
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  style={styles.secondaryBtn}
                  onMouseOver={(e) => (e.target.style.background = "#1e293b")}
                  onMouseOut={(e) => (e.target.style.background = "transparent")}
                >
                  Login
                </Link>
              </div>
            </div>

            <div style={styles.cardWrap}>
              <div style={styles.glassCard}>
                <div style={styles.infoBox}>
                  <h3 style={styles.infoTitle}>Why this project?</h3>
                  <p style={styles.infoText}>
                    This project demonstrates a complete authentication flow with
                    secure login, user registration, and protected routes.
                  </p>
                </div>

                <div style={styles.miniGrid}>
                  <div style={styles.miniCard}>
                    <div style={styles.miniLabel}>Feature</div>
                    <div style={styles.miniValue}>JWT Login</div>
                  </div>

                  <div style={styles.miniCard}>
                    <div style={styles.miniLabel}>Access</div>
                    <div style={styles.miniValue}>Protected Routes</div>
                  </div>

                  <div style={styles.miniCard}>
                    <div style={styles.miniLabel}>Page</div>
                    <div style={styles.miniValue}>User Profile</div>
                  </div>

                  <div style={styles.miniCard}>
                    <div style={styles.miniLabel}>Stack</div>
                    <div style={styles.miniValue}>React Router</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.features}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔐</div>
              <h3 style={styles.featureTitle}>Secure Authentication</h3>
              <p style={styles.featureText}>
                Register and login securely using token-based authentication.
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🛡️</div>
              <h3 style={styles.featureTitle}>Protected Routes</h3>
              <p style={styles.featureText}>
                Restrict sensitive pages so only authenticated users can access
                them.
              </p>
            </div>

            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>👤</div>
              <h3 style={styles.featureTitle}>Profile Access</h3>
              <p style={styles.featureText}>
                Authenticated users can view their protected profile information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
