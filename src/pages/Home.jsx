import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Secure Certificate Verification System</h1>
          <p>
            CertiChain ensures tamper-proof certificate verification
            for Students, Institutes, Recruiters, and Admins.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="btn">
              Get Started
            </Link>

            <Link to="/verify" className="btn secondary-btn">
              Verify Certificate
            </Link>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="home-features">
        <div className="feature-card">
          <h3>🔐 Tamper Proof</h3>
          <p>Certificates stored securely and cannot be altered.</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Instant Verification</h3>
          <p>Recruiters can verify authenticity in seconds.</p>
        </div>

        <div className="feature-card">
          <h3>👨‍🎓 Multi Role Access</h3>
          <p>Separate dashboards for Student, Admin, Institute & Recruiter.</p>
        </div>
      </section>
    </>
  );
}

export default Home;