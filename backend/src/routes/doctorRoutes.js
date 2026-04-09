import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.get('/', (req, res) => {
  const doctors = [...db.data.doctors].sort((a, b) => a.name.localeCompare(b.name));
  res.json(doctors);
});

router.get('/:id', (req, res) => {
  const doctor = db.data.doctors.find((item) => item.id === Number(req.params.id));
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  res.json(doctor);
});

router.get('/:id/slots', (req, res) => {
  const { date } = req.query;
  if (!date) return res.status(400).json({ message: 'Date is required' });

  const baseSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
  const bookedSlots = new Set(
    db.data.appointments
      .filter((item) => item.doctor_id === Number(req.params.id) && item.appointment_date === date && item.status !== 'cancelled')
      .map((item) => item.appointment_time)
  );

  res.json(baseSlots.map((time) => ({ time, available: !bookedSlots.has(time) })));
});

export default router;
