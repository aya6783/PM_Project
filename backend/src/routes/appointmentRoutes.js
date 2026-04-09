import express from 'express';
import { db, getNextId } from '../db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();
router.use(protect);

router.get('/', (req, res) => {
  const appointments = db.data.appointments
    .filter((item) => item.user_id === req.user.id)
    .map((appointment) => {
      const doctor = db.data.doctors.find((item) => item.id === appointment.doctor_id);
      const user = db.data.users.find((item) => item.id === appointment.user_id);
      return {
        ...appointment,
        doctor_name: doctor?.name,
        specialty: doctor?.specialty,
        image: doctor?.image,
        patient_name: user?.name
      };
    })
    .sort((a, b) => `${a.appointment_date} ${a.appointment_time}`.localeCompare(`${b.appointment_date} ${b.appointment_time}`));

  res.json(appointments);
});

router.post('/', async (req, res) => {
  const { doctorId, appointmentDate, appointmentTime, notes } = req.body;
  if (!doctorId || !appointmentDate || !appointmentTime) {
    return res.status(400).json({ message: 'Doctor, date and time are required' });
  }

  const doctor = db.data.doctors.find((item) => item.id === Number(doctorId));
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

  const exists = db.data.appointments.find((item) => (
    item.doctor_id === Number(doctorId) &&
    item.appointment_date === appointmentDate &&
    item.appointment_time === appointmentTime &&
    item.status !== 'cancelled'
  ));

  if (exists) return res.status(409).json({ message: 'This slot has already been booked' });

  const appointment = {
    id: getNextId('appointments'),
    user_id: req.user.id,
    doctor_id: Number(doctorId),
    appointment_date: appointmentDate,
    appointment_time: appointmentTime,
    status: 'booked',
    notes: notes || '',
    created_at: new Date().toISOString()
  };

  db.data.appointments.push(appointment);
  await db.write();

  res.status(201).json({ ...appointment, doctor_name: doctor.name, specialty: doctor.specialty, image: doctor.image });
});

router.patch('/:id/cancel', async (req, res) => {
  const appointment = db.data.appointments.find(
    (item) => item.id === Number(req.params.id) && item.user_id === req.user.id
  );

  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

  appointment.status = 'cancelled';
  await db.write();
  res.json({ message: 'Appointment cancelled successfully' });
});

export default router;
