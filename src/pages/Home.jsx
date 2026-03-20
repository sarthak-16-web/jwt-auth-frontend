import { Link } from "react-router-dom";

const Home = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      padding: "60px 20px",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    hero: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "50px",
      alignItems: "center",
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
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.hero}>
          <div>
            <span style={styles.badge}>Secure Authentication System</span>

            <h1 style={styles.title}>
              JWT Auth <span style={styles.titleAccent}>Frontend</span>
            </h1>

            <p style={styles.description}>
              A modern authentication frontend with registration, login, bcrypt
              password hashing, JWT-based authentication, and protected profile
              access. The project works correctly in the local environment with
              MongoDB.
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
                  This project demonstrates a complete authentication flow
                  including user registration, secure password hashing with
                  bcrypt, login using JWT tokens, and protected routes for
                  authenticated users.
                </p>
              </div>

              <div style={styles.miniGrid}>
                <div style={styles.miniCard}>
                  <div style={styles.miniLabel}>Authentication</div>
                  <div style={styles.miniValue}>JWT Based</div>
                </div>

                <div style={styles.miniCard}>
                  <div style={styles.miniLabel}>Security</div>
                  <div style={styles.miniValue}>bcrypt Hashing</div>
                </div>

                <div style={styles.miniCard}>
                  <div style={styles.miniLabel}>Access</div>
                  <div style={styles.miniValue}>Protected Routes</div>
                </div>

                <div style={styles.miniCard}>
                  <div style={styles.miniLabel}>Database</div>
                  <div style={styles.miniValue}>MongoDB</div>
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
              Register and login securely using JWT-based authentication and
              encrypted password storage with bcrypt.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🛡️</div>
            <h3 style={styles.featureTitle}>Protected Routes</h3>
            <p style={styles.featureText}>
              Restrict sensitive pages so only authenticated users can access them.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>👤</div>
            <h3 style={styles.featureTitle}>Profile Access</h3>
            <p style={styles.featureText}>
              Logged-in users can securely access their protected profile data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
