import { Link } from 'react-router-dom';

export default function DoctorCard({ doctor }) {
  return (
    <div className="card doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <div className="card-body">
        <span className="badge">{doctor.specialty}</span>
        <h3>{doctor.name}</h3>
        <p>{doctor.experience}+ years experience</p>
        <p className="muted">${doctor.fee} consultation fee</p>
        <Link to={`/doctors/${doctor.id}`} className="btn w-full">Book Appointment</Link>
      </div>
    </div>
  );
}
