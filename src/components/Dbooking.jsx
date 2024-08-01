import React, { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css'; // Import flatpickr styles
import '../css/DoctorsBooking.css';

import icon from '../assets/data/doctor.jpeg';
import imag from '../assets/data/doctor.jpg';

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
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. John Doe',
      specialty: 'General Consultation',
      description: 'Our experienced general physicians provide comprehensive health care for all age groups.',
      bookingLink: './appointment?doctor=JohnDoe'
    },
    'SarahWilliams': {
      id: 2,
      name: 'Dr. Sarah Williams',
      specialization: 'Pediatrician',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. Sarah Williams',
      specialty: 'Pediatric Care',
      description: 'Specialized care for infants, children, and adolescents by our expert pediatricians.',
      bookingLink: './appointment?doctor=SarahWilliams'
    },
    'AlanBrown': {
      id: 3,
      name: 'Dr. Alan Brown',
      specialization: 'Dermatologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Alan Brown',
      specialty: 'Dermatology',
      description: 'Advanced skin care treatments and procedures by our skilled dermatologists.',
      bookingLink: './appointment?doctor=AlanBrown'
    },
    'JaneSmith': {
      id: 4,
      name: 'Dr. Jane Smith',
      specialization: 'Cardiologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Jane Smith',
      specialty: 'Cardiology',
      description: 'Expert cardiac care including diagnosis, treatment, and prevention of heart conditions.',
      bookingLink: './appointment?doctor=JaneSmith'
    },
    'MichaelJohnson': {
      id: 5,
      name: 'Dr. Michael Johnson',
      specialization: 'Orthopedist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Michael Johnson',
      specialty: 'Orthopedics',
      description: 'Comprehensive care for bone, joint, and muscle conditions by our orthopedic specialists.',
      bookingLink: './appointment?doctor=MichaelJohnson'
    },
    'EmilyDavis': {
      id: 6,
      name: 'Dr. Emily Davis',
      specialization: 'Ophthalmologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Emily Davis',
      specialty: 'Ophthalmology',
      description: 'Advanced eye care services including surgeries and treatments for various eye conditions.',
      bookingLink: './appointment?doctor=EmilyDavis'
    },
    'MarkWilson': {
      id: 7,
      name: 'Dr. Mark Wilson',
      specialization: 'Dentist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Mark Wilson',
      specialty: 'Dental Care',
      description: 'Full range of dental services including cleanings, fillings, and cosmetic procedures.',
      bookingLink: './appointment?doctor=MarkWilson'
    },
    'LindaTaylor': {
      id: 8,
      name: 'Dr. Linda Taylor',
      specialization: 'Gynecologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Linda Taylor',
      specialty: 'Gynecology',
      description: 'Comprehensive women’s health services including prenatal care and gynecological surgeries.',
      bookingLink: './appointment?doctor=LindaTaylor'
    },
    'RobertBrown': {
      id: 9,
      name: 'Dr. Robert Brown',
      specialization: 'Neurologist',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. Robert Brown',
      specialty: 'Neurology',
      description: 'Expert diagnosis and treatment of neurological disorders, including headaches and epilepsy.',
      bookingLink: './appointment?doctor=RobertBrown'
    },
    'LauraGreen': {
      id: 10,
      name: 'Dr. Laura Green',
      specialization: 'Endocrinologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Laura Green',
      specialty: 'Endocrinology',
      description: 'Specialized care for hormone-related conditions and disorders such as diabetes and thyroid issues.',
      bookingLink: './appointment?doctor=LauraGreen'
    },
    'MichaelAdams': {
      id: 11,
      name: 'Dr. Michael Adams',
      specialization: 'Hematologist',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. Michael Adams',
      specialty: 'Hematology',
      description: 'Expert care for blood disorders, including anemia, leukemia, and clotting issues.',
      bookingLink: './appointment?doctor=MichaelAdams'
    },
    'AliceCooper': {
      id: 12,
      name: 'Dr. Alice Cooper',
      specialization: 'Rheumatologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Alice Cooper',
      specialty: 'Rheumatology',
      description: 'Diagnosis and treatment of autoimmune diseases and inflammatory conditions affecting the joints and muscles.',
      bookingLink: './appointment?doctor=AliceCooper'
    },
    'DavidLee': {
      id: 13,
      name: 'Dr. David Lee',
      specialization: 'Gastroenterologist',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. David Lee',
      specialty: 'Gastroenterology',
      description: 'Comprehensive care for digestive system disorders, including IBS, liver diseases, and more.',
      bookingLink: './appointment?doctor=DavidLee'
    },
    'NancyWilson': {
      id: 14,
      name: 'Dr. Nancy Wilson',
      specialization: 'Infectious Disease Specialist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Nancy Wilson',
      specialty: 'Infectious Diseases',
      description: 'Specialized treatment for infections caused by bacteria, viruses, fungi, and parasites.',
      bookingLink: './appointment?doctor=NancyWilson'
    },
    'CharlesKing': {
      id: 15,
      name: 'Dr. Charles King',
      specialization: 'Pulmonologist',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. Charles King',
      specialty: 'Pulmonology',
      description: 'Care for respiratory conditions, including asthma, COPD, and lung infections.',
      bookingLink: './appointment?doctor=CharlesKing'
    },
    'OliviaMartinez': {
      id: 16,
      name: 'Dr. Olivia Martinez',
      specialization: 'Urologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Olivia Martinez',
      specialty: 'Urology',
      description: 'Expert treatment for urinary tract and male reproductive system disorders.',
      bookingLink: './appointment?doctor=OliviaMartinez'
    },
    'JamesWilson': {
      id: 17,
      name: 'Dr. James Wilson',
      specialization: 'Plastic Surgeon',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. James Wilson',
      specialty: 'Plastic Surgery',
      description: 'Cosmetic and reconstructive surgical procedures to enhance appearance and restore function.',
      bookingLink: './appointment?doctor=JamesWilson'
    },
    'SophiaLee': {
      id: 18,
      name: 'Dr. Sophia Lee',
      specialization: 'Oncologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Sophia Lee',
      specialty: 'Oncology',
      description: 'Comprehensive care for cancer patients, including diagnosis, treatment, and follow-up care.',
      bookingLink: './appointment?doctor=SophiaLee'
    },
    'WilliamScott': {
      id: 19,
      name: 'Dr. William Scott',
      specialization: 'Nephrologist',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. William Scott',
      specialty: 'Nephrology',
      description: 'Specialized care for kidney diseases and conditions, including dialysis treatment.',
      bookingLink: './appointment?doctor=WilliamScott'
    },
    'EmmaBrown': {
      id: 20,
      name: 'Dr. Emma Brown',
      specialization: 'Allergist and Immunologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Emma Brown',
      specialty: 'Allergy and Immunology',
      description: 'Diagnosis and treatment of allergies and immune system disorders.',
      bookingLink: './appointment?doctor=EmmaBrown'
    },
    'DanielClark': {
      id: 21,
      name: 'Dr. Daniel Clark',
      specialization: 'Sports Medicine Specialist',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. Daniel Clark',
      specialty: 'Sports Medicine',
      description: 'Treatment and rehabilitation of sports-related injuries and conditions.',
      bookingLink: './appointment?doctor=DanielClark'
    },
    'AvaLewis': {
      id: 22,
      name: 'Dr. Ava Lewis',
      specialization: 'Vascular Surgeon',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Ava Lewis',
      specialty: 'Vascular Surgery',
      description: 'Surgical treatment for vascular conditions, including arteries and veins.',
      bookingLink: './appointment?doctor=AvaLewis'
    },
    'EthanTaylor': {
      id: 23,
      name: 'Dr. Ethan Taylor',
      specialization: 'ENT Specialist',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. Ethan Taylor',
      specialty: 'Otorhinolaryngology',
      description: 'Comprehensive care for ear, nose, and throat disorders.',
      bookingLink: './appointment?doctor=EthanTaylor'
    },
    'IsabellaAnderson': {
      id: 24,
      name: 'Dr. Isabella Anderson',
      specialization: 'Psychiatrist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Isabella Anderson',
      specialty: 'Psychiatry',
      description: 'Mental health services including therapy, medication management, and counseling.',
      bookingLink: './appointment?doctor=IsabellaAnderson'
    },
    'MasonThomas': {
      id: 25,
      name: 'Dr. Mason Thomas',
      specialization: 'Neurosurgeon',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. Mason Thomas',
      specialty: 'Neurosurgery',
      description: 'Surgical treatment for brain and spinal cord conditions and injuries.',
      bookingLink: './appointment?doctor=MasonThomas'
    },
    'MiaHarris': {
      id: 26,
      name: 'Dr. Mia Harris',
      specialization: 'Anesthesiologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Mia Harris',
      specialty: 'Anesthesiology',
      description: 'Expert anesthesia care for surgical procedures and pain management.',
      bookingLink: './appointment?doctor=MiaHarris'
    },
    'AlexanderMartinez': {
      id: 27,
      name: 'Dr. Alexander Martinez',
      specialization: 'Radiologist',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. Alexander Martinez',
      specialty: 'Radiology',
      description: 'Advanced imaging services including MRI, CT scans, and X-rays.',
      bookingLink: './appointment?doctor=AlexanderMartinez'
    },
    'CharlotteGarcia': {
      id: 28,
      name: 'Dr. Charlotte Garcia',
      specialization: 'Pathologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Charlotte Garcia',
      specialty: 'Pathology',
      description: 'Laboratory analysis of bodily fluids and tissues for diagnosis.',
      bookingLink: './appointment?doctor=CharlotteGarcia'
    },
    'JacobLopez': {
      id: 29,
      name: 'Dr. Jacob Lopez',
      specialization: 'Geriatrician',
      image: '../assets/data/doctor4.jpeg',
      alt: 'Dr. Jacob Lopez',
      specialty: 'Geriatrics',
      description: 'Specialized care for elderly patients, focusing on health and wellness in aging.',
      bookingLink: './appointment?doctor=JacobLopez'
    },
    'AmeliaGonzalez': {
      id: 30,
      name: 'Dr. Amelia Gonzalez',
      specialization: 'Reproductive Endocrinologist',
      image: '../assets/data/doctor2.jpeg',
      alt: 'Dr. Amelia Gonzalez',
      specialty: 'Reproductive Endocrinology',
      description: 'Fertility treatments and reproductive health services.',
      bookingLink: './appointment?doctor=AmeliaGonzalez'
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
              <img src={imag} alt="not found" />
            </div>
          </div>
          <hr className="hr" />
          {/* <div className="appointment-details">
            <h2>Appointments</h2>
            <ul>
              {appointments.map((appointment, index) => (
                <li key={index}>
                  <div className="doc-name">
                    {appointment.doctor}
                  </div>
                  <div className="app-info">
                    <span className="app-date">{appointment.date}</span>
                    <span className="app-time">{appointment.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}

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
