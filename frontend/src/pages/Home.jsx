import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Complete Full Stack Project</p>
            <h1>Book trusted doctors in minutes.</h1>
            <p className="hero-text">
              A modern doctor appointment booking platform with authentication, doctor discovery,
              real-time slot availability, and appointment management.
            </p>
            <div className="hero-actions">
              <Link to="/doctors" className="btn">Explore Doctors</Link>
              <Link to="/auth" className="btn btn-secondary">Get Started</Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="metric"><strong>6+</strong><span>Specialists</span></div>
            <div className="metric"><strong>8</strong><span>Daily Slots</span></div>
            <div className="metric"><strong>24/7</strong><span>Access</span></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Why this project stands out</h2>
        </div>
        <div className="grid-3">
          <div className="card feature"><h3>Secure Authentication</h3><p>Patient accounts with JWT-based login and protected routes.</p></div>
          <div className="card feature"><h3>Slot Booking Engine</h3><p>Dynamic availability to prevent duplicate bookings.</p></div>
          <div className="card feature"><h3>Responsive Interface</h3><p>Clean React UI that works well on desktop, tablet, and mobile.</p></div>
        </div>
      </section>
    </div>
  );
}
