import React, { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css'; // Import flatpickr styles
import '../css/DoctorsBooking.css';

import icon from '../assets/data/doctor.jpeg';
import doctor4 from '../assets/data/doctor4.jpg';
import doctor21 from '../assets/data/doctor21.jpg';


const Dbooking = () => {
  const [doctor, setDoctor] = useState('');
  const [doctorInfo, setDoctorInfo] = useState({
    name: 'Select a Doctor',
    specialization: 'Specialization will appear here.',
    image: icon
  });

  const doctors = {
    'JohnDoe': {
      name: 'Dr. John Doe',
      specialization: 'General Physician',
      image: doctor4
    },
    'JaneSmith': {
      name: 'Dr. Jane Smith',
      specialization: 'Cardiologist',
      image: doctor4
    },
    'AlanBrown': {
      name: 'Dr. Alan Brown',
      specialization: 'Dermatologist',
      image: doctor4
    },
    'SarahWilliams': {
      name: 'Dr. Sarah Williams',
      specialization: 'Pediatrician',
      image: doctor21
    },
    'MichaelJohnson': {
      name: 'Dr. Michael Johnson',
      specialization: 'Orthopedist',
      image: doctor4
    },
    'EmilyDavis': {
      name: 'Dr. Emily Davis',
      specialization: 'Ophthalmologist',
      image: doctor21
    },
    'MarkWilson': {
      name: 'Dr. Mark Wilson',
      specialization: 'Dentist',
      image: doctor4
    },
    'LindaTaylor': {
      name: 'Dr. Linda Taylor',
      specialization: 'Gynecologist',
      image: doctor21
    }
};


  useEffect(() => {
    const initializeFlatpickr = () => {
      flatpickr(".datepicker", {
        dateFormat: "Y-m-d",
        minDate: "today"
      });

      flatpickr(".timepicker", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true
      });
    };

    initializeFlatpickr();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const doctorParam = urlParams.get('doctor');

    if (doctorParam && doctors[doctorParam]) {
      setDoctorInfo(doctors[doctorParam]);
    }
  }, []);

  const handleDoctorChange = (event) => {
    const selectedDoctor = event.target.value;
    setDoctor(selectedDoctor);

    if (selectedDoctor && doctors[selectedDoctor]) {
      setDoctorInfo(doctors[selectedDoctor]);
    } else {
      setDoctorInfo({
        name: 'Select a Doctor',
        specialization: 'Specialization will appear here.',
        image: 'default-doctor.jpg'
      });
    }
  };

  return (
    <div>
      <main className='appointment'>
        <section className="booking">
          <h1>Book an Appointment</h1>
          <div className="doctor-info">
            <img id="doctor-image" src={doctorInfo.image} alt="Doctor" />
            <h2 id="doctor-name">{doctorInfo.name}</h2>
            <p id="doctor-specialization">{doctorInfo.specialization}</p>
          </div>
          <form id="appointment-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="doctor">Change Doctor:</label>
            <select id="doctor" name="doctor" value={doctor} onChange={handleDoctorChange} required>
              <option value="">Select a Doctor</option>
              {Object.keys(doctors).map(key => (
                <option key={key} value={key}>
                  {doctors[key].name} - {doctors[key].specialization}
                </option>
              ))}
            </select>
            
            <label htmlFor="date">Date:</label>
            <input type="text" id="date" name="date" className="datepicker" required />
            
            <label htmlFor="time">Time:</label>
            <input type="text" id="time" name="time" className="timepicker" required />
            
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      {/* <footer>
        <p>&copy; 2024 Our Clinic. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Dbooking;
