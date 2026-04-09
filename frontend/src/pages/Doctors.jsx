import { useEffect, useMemo, useState } from 'react';
import api from '../api';
import DoctorCard from '../components/DoctorCard';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All');

  useEffect(() => {
    api.get('/doctors').then((res) => setDoctors(res.data));
  }, []);

  const specialties = ['All', ...new Set(doctors.map((doctor) => doctor.specialty))];

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch = doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase());
      const matchesSpecialty = specialty === 'All' || doctor.specialty === specialty;
      return matchesSearch && matchesSpecialty;
    });
  }, [doctors, search, specialty]);

  return (
    <section className="section container">
      <div className="section-heading">
        <h2>Available Doctors</h2>
        <p>Search by doctor name or specialty, then book a convenient slot.</p>
      </div>

      <div className="filters">
        <input
          placeholder="Search doctors or specialties"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
          {specialties.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>

      <div className="grid-3">
        {filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
      </div>
    </section>
  );
}
