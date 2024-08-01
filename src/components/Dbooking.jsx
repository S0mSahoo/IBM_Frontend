import React, { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css'; 
import '../css/DoctorsBooking.css';

import icon from '../assets/data/doctor.jpeg';


const Dbooking = () => {

  
  const [doctor, setDoctor] = useState('');
  const [doctorInfo, setDoctorInfo] = useState({
    name: 'Select a Doctor',
    specialization: 'Specialization will appear here.',
    image: icon
  });
  const [appointments, setAppointments] = useState([]);

  const doctors = {
    'JohnDoe': {
      id: 1,
      name: 'Dr. John Doe',
      specialization: 'General Physician',
      image: 'https://media.istockphoto.com/id/690210372/photo/smiling-male-doctor-with-arms-crossed-in-hospital.jpg?s=612x612&w=0&k=20&c=xIxP4kNxRDRzE6KfMp2a56O3l6Z-JvF1k3wuKKGJsmQ=',
      alt: 'Dr. John Doe',
      specialty: 'General Consultation',
      description: 'Our experienced general physicians provide comprehensive health care for all age groups.',
      bookingLink: './appointment?doctor=JohnDoe'
    },
    'SarahWilliams': {
      id: 2,
      name: 'Dr. Sarah Williams',
      specialization: 'Pediatrician',
      image: 'https://img.freepik.com/premium-photo/attractive-female-doctor-white-coat-glasses_88135-6126.jpg?w=900',
      alt: 'Dr. Sarah Williams',
      specialty: 'Pediatric Care',
      description: 'Specialized care for infants, children, and adolescents by our expert pediatricians.',
      bookingLink: './appointment?doctor=SarahWilliams'
    },
    'AlanBrown': {
      id: 3,
      name: 'Dr. Alan Brown',
      specialization: 'Dermatologist',
      image: 'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg?t=st=1722536928~exp=1722540528~hmac=8de652f42231c4d0a20c2c32480f6c6ccc5df6bc8fb290e9a4a92e5ceee753b1&w=900',
      alt: 'Dr. Alan Brown',
      specialty: 'Dermatology',
      description: 'Advanced skin care treatments and procedures by our skilled dermatologists.',
      bookingLink: './appointment?doctor=AlanBrown'
    },
    'JaneSmith': {
      id: 4,
      name: 'Dr. Jane Smith',
      specialization: 'Cardiologist',
      image: 'https://media.istockphoto.com/id/1207212127/photo/experience-you-can-trust.jpg?s=612x612&w=0&k=20&c=V0sNP_j9l3QQKwQ3dU4d4cJGgvdqceuXCj3__6m2So4=',
      alt: 'Dr. Jane Smith',
      specialty: 'Cardiology',
      description: 'Expert cardiac care including diagnosis, treatment, and prevention of heart conditions.',
      bookingLink: './appointment?doctor=JaneSmith'
    },
    'MichaelJohnson': {
      id: 5,
      name: 'Dr. Michael Johnson',
      specialization: 'Orthopedist',
      image: 'https://img.freepik.com/free-photo/attractive-medical-professional-uniform-standing-with-arms-crossed-against-isolated-background_662251-416.jpg?w=740&t=st=1722536442~exp=1722537042~hmac=de1514445b16db931ed8ff6f2203c353a08ab4395e43bdb86ec1d374d42dfdce',
      alt: 'Dr. Michael Johnson',
      specialty: 'Orthopedics',
      description: 'Comprehensive care for bone, joint, and muscle conditions by our orthopedic specialists.',
      bookingLink: './appointment?doctor=MichaelJohnson'
    },
    'EmilyDavis': {
      id: 6,
      name: 'Dr. Emily Davis',
      specialization: 'Ophthalmologist',
      image: 'https://img.freepik.com/premium-photo/studio-shot-young-muscular-man-doctor-against-white-backgroun_251136-51166.jpg?w=996',
      alt: 'Dr. Emily Davis',
      specialty: 'Ophthalmology',
      description: 'Advanced eye care services including surgeries and treatments for various eye conditions.',
      bookingLink: './appointment?doctor=EmilyDavis'
    },
    'MarkWilson': {
      id: 7,
      name: 'Dr. Mark Wilson',
      specialization: 'Dentist',
      image: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Dr. Mark Wilson',
      specialty: 'Dental Care',
      description: 'Full range of dental services including cleanings, fillings, and cosmetic procedures.',
      bookingLink: './appointment?doctor=MarkWilson'
    },
    'LindaTaylor': {
      id: 8,
      name: 'Dr. Linda Taylor',
      specialization: 'Gynecologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Dr. Linda Taylor',
      specialty: 'Gynecology',
      description: 'Comprehensive women’s health services including prenatal care and gynecological surgeries.',
      bookingLink: './appointment?doctor=LindaTaylor'
    },
    'RobertBrown': {
      id: 9,
      name: 'Dr. Robert Brown',
      specialization: 'Neurologist',
      image: 'https://as1.ftcdn.net/v2/jpg/03/13/77/82/1000_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv.jpg',
      alt: 'Dr. Robert Brown',
      specialty: 'Neurology',
      description: 'Expert diagnosis and treatment of neurological disorders, including headaches and epilepsy.',
      bookingLink: './appointment?doctor=RobertBrown'
    },
    'LauraGreen': {
      id: 10,
      name: 'Dr. Laura Green',
      specialization: 'Endocrinologist',
      image: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Dr. Laura Green',
      specialty: 'Endocrinology',
      description: 'Specialized care for hormone-related conditions and disorders such as diabetes and thyroid issues.',
      bookingLink: './appointment?doctor=LauraGreen'
    },
    'MichaelAdams': {
      id: 11,
      name: 'Dr. Michael Adams',
      specialization: 'Hematologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Dr. Michael Adams',
      specialty: 'Hematology',
      description: 'Expert care for blood disorders, including anemia, leukemia, and clotting issues.',
      bookingLink: './appointment?doctor=MichaelAdams'
    },
    'AliceCooper': {
      id: 12,
      name: 'Dr. Alice Cooper',
      specialization: 'Rheumatologist',
      image: 'https://media.istockphoto.com/id/675005034/photo/young-smiling-confident-female-doctor-healthcare-professional-with-stethoscope-standing.jpg?s=612x612&w=0&k=20&c=9oou8xYRKw4TkiET_ztzQpZD-Io0ErIVsnjdddRNMOQ=',
      alt: 'Dr. Alice Cooper',
      specialty: 'Rheumatology',
      description: 'Diagnosis and treatment of autoimmune diseases and inflammatory conditions affecting the joints and muscles.',
      bookingLink: './appointment?doctor=AliceCooper'
    },
    'DavidLee': {
      id: 13,
      name: 'Dr. David Lee',
      specialization: 'Gastroenterologist',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Dr. David Lee',
      specialty: 'Gastroenterology',
      description: 'Comprehensive care for digestive system disorders, including IBS, liver diseases, and more.',
      bookingLink: './appointment?doctor=DavidLee'
    },
    'NancyWilson': {
      id: 14,
      name: 'Dr. Nancy Wilson',
      specialization: 'Infectious Disease Specialist',
      image: 'https://as1.ftcdn.net/v2/jpg/03/13/77/82/1000_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv.jpg',
      alt: 'Dr. Nancy Wilson',
      specialty: 'Infectious Diseases',
      description: 'Specialized treatment for infections caused by bacteria, viruses, fungi, and parasites.',
      bookingLink: './appointment?doctor=NancyWilson'
    },
    'CharlesKing': {
      id: 15,
      name: 'Dr. Charles King',
      specialization: 'Pulmonologist',
      image: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Dr. Charles King',
      specialty: 'Pulmonology',
      description: 'Care for respiratory conditions, including asthma, COPD, and lung infections.',
      bookingLink: './appointment?doctor=CharlesKing'
    },
    'OliviaMartinez': {
      id: 16,
      name: 'Dr. Olivia Martinez',
      specialization: 'Urologist',
      image: 'https://media.istockphoto.com/id/675005034/photo/young-smiling-confident-female-doctor-healthcare-professional-with-stethoscope-standing.jpg?s=612x612&w=0&k=20&c=9oou8xYRKw4TkiET_ztzQpZD-Io0ErIVsnjdddRNMOQ=',
      alt: 'Dr. Olivia Martinez',
      specialty: 'Urology',
      description: 'Expert treatment for urinary tract and male reproductive system disorders.',
      bookingLink: './appointment?doctor=OliviaMartinez'
    },
    'JamesWilson': {
      id: 17,
      name: 'Dr. James Wilson',
      specialization: 'Plastic Surgeon',
      image: 'https://media.istockphoto.com/id/1494324933/photo/portrait-of-asian-chinese-mixed-race-senior-mature-man-doctor-in-collared-business-shirt.webp?s=2048x2048&w=is&k=20&c=kipGtD1Tfd4y49mdCoCoE6Hpo3FSlP9anUIjkqvp_Ys=',
      alt: 'Dr. James Wilson',
      specialty: 'Plastic Surgery',
      description: 'Cosmetic and reconstructive surgical procedures to enhance appearance and restore function.',
      bookingLink: './appointment?doctor=JamesWilson'
    },
    'SophiaLee': {
      id: 18,
      name: 'Dr. Sophia Lee',
      specialization: 'Oncologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Dr. Sophia Lee',
      specialty: 'Oncology',
      description: 'Comprehensive care for cancer patients, including diagnosis, treatment, and follow-up care.',
      bookingLink: './appointment?doctor=SophiaLee'
    },
    
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
        image: icon
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const time = form.time.value;

    if (doctor && name && email && date && time) {
      const newAppointment = {
        name,
        email,
        doctor: doctorInfo.name,
        date,
        time
      };

      setAppointments([...appointments, newAppointment]);

      // Reset form
      form.reset();
      setDoctor('');
      setDoctorInfo({
        name: 'Select a Doctor',
        specialization: 'Specialization will appear here.',
        image: icon
      });
    }
  };

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
      "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[parseInt(month, 10) - 1];
    return `${day} ${monthName} ${year}`;
  }

  return (
    <div>
      <div className='appointment'>
        <div className="booking">
          <h1>Book an Appointment</h1>
          <div className="doctor-info">
            <img id="doctor-image" src={doctorInfo.image} alt="img" />
            <h2 id="doctor-name">{doctorInfo.name}</h2>
            <p id="doctor-specialization">{doctorInfo.specialization}</p>
          </div>
          <div className='patient-details'>
            <form id="appointment-form" onSubmit={handleSubmit}>
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
            <div className="img">
              <img src="https://img.freepik.com/free-vector/man-doctor-woman-nurse-stand-with-patient-card-medical-staff-uniform-study-discuss-examination-result-make-note-therapist-giving-treatment-recommendation-prescription-putting-signature_575670-1316.jpg?t=st=1722523104~exp=1722526704~hmac=40ec6432e18d102b74c511e67003b1aced7247d3667046846ea18460d9aadd1f&w=740" alt="not found" />
            </div>
          </div>
          <hr className="hr" />

          <div className="appointment-details">
            <h2>Appointments</h2>
            <ul>
              {appointments.map((appointment, index) => (
                <li key={index}>
                  <div className="doc-name">
                    {appointment.doctor}
                  </div>
                  <div className="app-info">
                    <span className="app-date">{formatDate(appointment.date)}</span>
                    <span className="app-time">{appointment.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dbooking;

