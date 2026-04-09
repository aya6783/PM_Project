import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../context/AuthContext';

function today() {
  return new Date().toISOString().split('T')[0];
}

export default function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState(today());
  const [slots, setSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/doctors/${id}`).then((res) => setDoctor(res.data));
  }, [id]);

  useEffect(() => {
    api.get(`/doctors/${id}/slots?date=${date}`).then((res) => setSlots(res.data));
  }, [id, date]);

  const handleBooking = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    if (!selectedTime) return setMessage('Please select a time slot.');

    try {
      await api.post('/appointments', {
        doctorId: Number(id),
        appointmentDate: date,
        appointmentTime: selectedTime,
        notes
      });
      setMessage('Appointment booked successfully.');
      setSelectedTime('');
      const refreshed = await api.get(`/doctors/${id}/slots?date=${date}`);
      setSlots(refreshed.data);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Booking failed.');
    }
  };

  if (!doctor) return <section className="section container">Loading...</section>;

  return (
    <section className="section container details-grid">
      <div className="card details-card">
        <img src={doctor.image} alt={doctor.name} className="details-image" />
        <div>
          <span className="badge">{doctor.specialty}</span>
          <h2>{doctor.name}</h2>
          <p>{doctor.experience}+ years experience</p>
          <p>{doctor.about}</p>
          <p><strong>Consultation Fee:</strong> ${doctor.fee}</p>
        </div>
      </div>

      <div className="card booking-card">
        <h3>Book Appointment</h3>
        <label>Select date</label>
        <input type="date" value={date} min={today()} onChange={(e) => setDate(e.target.value)} />
        <label>Available slots</label>
        <div className="slots">
          {slots.map((slot) => (
            <button
              key={slot.time}
              className={`slot ${selectedTime === slot.time ? 'active' : ''}`}
              disabled={!slot.available}
              onClick={() => setSelectedTime(slot.time)}
            >
              {slot.time}
            </button>
          ))}
        </div>
        <label>Notes (optional)</label>
        <textarea
          rows="4"
          placeholder="Describe your concern briefly"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        {message && <div className="alert">{message}</div>}
        <button className="btn w-full" onClick={handleBooking}>Confirm Booking</button>
      </div>
    </section>
  );
}
