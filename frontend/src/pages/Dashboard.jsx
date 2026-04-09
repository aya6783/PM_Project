import { useEffect, useState } from 'react';
import api from '../api';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState('');

  const loadAppointments = async () => {
    const res = await api.get('/appointments');
    setAppointments(res.data);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const cancelAppointment = async (id) => {
    await api.patch(`/appointments/${id}/cancel`);
    setMessage('Appointment cancelled.');
    loadAppointments();
  };

  return (
    <section className="section container">
      <div className="section-heading">
        <h2>My Appointments</h2>
        <p>Track your bookings and cancel upcoming visits when needed.</p>
      </div>
      {message && <div className="alert">{message}</div>}
      <div className="appointments-list">
        {appointments.length === 0 ? (
          <div className="card"><p>No appointments yet. Book one from the doctors page.</p></div>
        ) : (
          appointments.map((appointment) => (
            <div className="card appointment-card" key={appointment.id}>
              <img src={appointment.image} alt={appointment.doctor_name} className="appointment-thumb" />
              <div>
                <h3>{appointment.doctor_name}</h3>
                <p>{appointment.specialty}</p>
                <p><strong>Date:</strong> {appointment.appointment_date}</p>
                <p><strong>Time:</strong> {appointment.appointment_time}</p>
                <p><strong>Status:</strong> <span className={`status ${appointment.status}`}>{appointment.status}</span></p>
                {appointment.notes && <p><strong>Notes:</strong> {appointment.notes}</p>}
              </div>
              {appointment.status !== 'cancelled' && (
                <button className="btn btn-secondary" onClick={() => cancelAppointment(appointment.id)}>
                  Cancel
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
