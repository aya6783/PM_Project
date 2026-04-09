import express from 'express';
import bcrypt from 'bcryptjs';
import { db, getNextId } from '../db.js';
import { generateToken } from '../utils/generateToken.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existing = db.data.users.find((user) => user.email === email);
  if (existing) return res.status(400).json({ message: 'Email already registered' });

  const user = {
    id: getNextId('users'),
    name,
    email,
    password: await bcrypt.hash(password, 10),
    role: 'patient',
    created_at: new Date().toISOString()
  };

  db.data.users.push(user);
  await db.write();

  const safeUser = { id: user.id, name: user.name, email: user.email, role: user.role };
  const token = generateToken(safeUser);
  res.status(201).json({ user: safeUser, token });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = db.data.users.find((item) => item.email === email);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const safeUser = { id: user.id, name: user.name, email: user.email, role: user.role };
  const token = generateToken(safeUser);
  res.json({ user: safeUser, token });
});

router.get('/me', protect, (req, res) => {
  const user = db.data.users.find((item) => item.id === req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ id: user.id, name: user.name, email: user.email, role: user.role, created_at: user.created_at });
});

export default router;
