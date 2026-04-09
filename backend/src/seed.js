import bcrypt from 'bcryptjs';
import { db, initDB } from './db.js';

await initDB();

if (!db.data.doctors.length) {
  db.data.doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', experience: 12, fee: 80,
      about: 'Expert in preventive cardiology and heart rhythm management.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Dr. Michael Lee', specialty: 'Dermatologist', experience: 9, fee: 65,
      about: 'Focused on acne treatment, skin allergies, and cosmetic dermatology.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
      created_at: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Dr. Emily Carter', specialty: 'Pediatrician', experience: 10, fee: 70,
      about: 'Compassionate pediatric specialist for newborn to adolescent care.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
      created_at: new Date().toISOString()
    },
    {
      id: 4,
      name: 'Dr. David Brown', specialty: 'Neurologist', experience: 14, fee: 95,
      about: 'Specializes in migraine management, seizures, and nerve disorders.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
      created_at: new Date().toISOString()
    },
    {
      id: 5,
      name: 'Dr. Olivia Martinez', specialty: 'Orthopedic Surgeon', experience: 11, fee: 90,
      about: 'Treats sports injuries, fractures, and joint mobility issues.',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80',
      created_at: new Date().toISOString()
    },
    {
      id: 6,
      name: 'Dr. James Wilson', specialty: 'General Physician', experience: 8, fee: 50,
      about: 'Offers routine checkups, chronic disease follow-up, and primary care.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
      created_at: new Date().toISOString()
    }
  ];
}

if (!db.data.users.some((user) => user.email === 'admin@hospital.com')) {
  db.data.users.push({
    id: 1,
    name: 'System Admin',
    email: 'admin@hospital.com',
    password: await bcrypt.hash('Admin123!', 10),
    role: 'admin',
    created_at: new Date().toISOString()
  });
}

await db.write();
console.log('Database seeded successfully.');
