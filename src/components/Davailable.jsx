import React from 'react';
import '../css/DoctorsAvailable.css';


const doctors = [
  {
    id: 1,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. John Doe',
    specialty: 'General Consultation',
    description: 'Our experienced general physicians provide comprehensive health care for all age groups.',
    name: 'Dr. John Doe',
    bookingLink: './appointment?doctor=JohnDoe'
  },
  {
    id: 2,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. Sarah Williams',
    specialty: 'Pediatric Care',
    description: 'Specialized care for infants, children, and adolescents by our expert pediatricians.',
    name: 'Dr. Sarah Williams',
    bookingLink: './appointment?doctor=SarahWilliams'
  },
  {
    id: 3,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Alan Brown',
    specialty: 'Dermatology',
    description: 'Advanced skin care treatments and procedures by our skilled dermatologists.',
    name: 'Dr. Alan Brown',
    bookingLink: './appointment?doctor=AlanBrown'
  },
  {
    id: 4,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Jane Smith',
    specialty: 'Cardiology',
    description: 'Expert cardiac care including diagnosis, treatment, and prevention of heart conditions.',
    name: 'Dr. Jane Smith',
    bookingLink: './appointment?doctor=JaneSmith'
  },
  {
    id: 5,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Michael Johnson',
    specialty: 'Orthopedics',
    description: 'Comprehensive care for bone, joint, and muscle conditions by our orthopedic specialists.',
    name: 'Dr. Michael Johnson',
    bookingLink: './appointment?doctor=MichaelJohnson'
  },
  {
    id: 6,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Emily Davis',
    specialty: 'Ophthalmology',
    description: 'Advanced eye care services including surgeries and treatments for various eye conditions.',
    name: 'Dr. Emily Davis',
    bookingLink: './appointment?doctor=EmilyDavis'
  },
  {
    id: 7,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Mark Wilson',
    specialty: 'Dental Care',
    description: 'Full range of dental services including cleanings, fillings, and cosmetic procedures.',
    name: 'Dr. Mark Wilson',
    bookingLink: './appointment?doctor=MarkWilson'
  },
  {
    id: 8,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Linda Taylor',
    specialty: 'Gynecology',
    description: 'Comprehensive women’s health services including prenatal care and gynecological surgeries.',
    name: 'Dr. Linda Taylor',
    bookingLink: './appointment?doctor=LindaTaylor'
  },
  {
    id: 9,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. Robert Brown',
    specialty: 'Neurology',
    description: 'Expert diagnosis and treatment of neurological disorders, including headaches and epilepsy.',
    name: 'Dr. Robert Brown',
    bookingLink: './appointment?doctor=RobertBrown'
  },
  {
    id: 10,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Laura Green',
    specialty: 'Endocrinology',
    description: 'Specialized care for hormone-related conditions and disorders such as diabetes and thyroid issues.',
    name: 'Dr. Laura Green',
    bookingLink: './appointment?doctor=LauraGreen'
  },
  {
    id: 11,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. Michael Adams',
    specialty: 'Hematology',
    description: 'Expert care for blood disorders, including anemia, leukemia, and clotting issues.',
    name: 'Dr. Michael Adams',
    bookingLink: './appointment?doctor=MichaelAdams'
  },
  {
    id: 12,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Alice Cooper',
    specialty: 'Rheumatology',
    description: 'Diagnosis and treatment of autoimmune diseases and inflammatory conditions affecting the joints and muscles.',
    name: 'Dr. Alice Cooper',
    bookingLink: './appointment?doctor=AliceCooper'
  },
  {
    id: 13,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. David Lee',
    specialty: 'Gastroenterology',
    description: 'Comprehensive care for digestive system disorders, including IBS, liver diseases, and more.',
    name: 'Dr. David Lee',
    bookingLink: './appointment?doctor=DavidLee'
  },
  {
    id: 14,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Nancy Wilson',
    specialty: 'Infectious Diseases',
    description: 'Specialized treatment for infections caused by bacteria, viruses, fungi, and parasites.',
    name: 'Dr. Nancy Wilson',
    bookingLink: './appointment?doctor=NancyWilson'
  },
  {
    id: 15,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. Charles King',
    specialty: 'Pulmonology',
    description: 'Care for respiratory conditions, including asthma, COPD, and lung infections.',
    name: 'Dr. Charles King',
    bookingLink: './appointment?doctor=CharlesKing'
  },
  {
    id: 16,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Olivia Martinez',
    specialty: 'Urology',
    description: 'Expert treatment for urinary tract and male reproductive system disorders.',
    name: 'Dr. Olivia Martinez',
    bookingLink: './appointment?doctor=OliviaMartinez'
  },
  {
    id: 17,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. James Wilson',
    specialty: 'Plastic Surgery',
    description: 'Cosmetic and reconstructive surgical procedures to enhance appearance and restore function.',
    name: 'Dr. James Wilson',
    bookingLink: './appointment?doctor=JamesWilson'
  },
  {
    id: 18,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Sophia Lee',
    specialty: 'Oncology',
    description: 'Comprehensive care for cancer patients, including diagnosis, treatment, and follow-up care.',
    name: 'Dr. Sophia Lee',
    bookingLink: './appointment?doctor=SophiaLee'
  },
  {
    id: 19,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. William Scott',
    specialty: 'Nephrology',
    description: 'Specialized care for kidney diseases and conditions, including dialysis treatment.',
    name: 'Dr. William Scott',
    bookingLink: './appointment?doctor=WilliamScott'
  },
  {
    id: 20,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Emma Brown',
    specialty: 'Allergy and Immunology',
    description: 'Diagnosis and treatment of allergies and immune system disorders.',
    name: 'Dr. Emma Brown',
    bookingLink: './appointment?doctor=EmmaBrown'
  },
  {
    id: 21,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. Daniel Clark',
    specialty: 'Sports Medicine',
    description: 'Treatment and rehabilitation of sports-related injuries and conditions.',
    name: 'Dr. Daniel Clark',
    bookingLink: './appointment?doctor=DanielClark'
  },
  {
    id: 22,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Ava Lewis',
    specialty: 'Vascular Surgery',
    description: 'Surgical treatment for vascular conditions, including arteries and veins.',
    name: 'Dr. Ava Lewis',
    bookingLink: './appointment?doctor=AvaLewis'
  },
  {
    id: 23,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. Ethan Taylor',
    specialty: 'Ear, Nose, and Throat',
    description: 'Comprehensive care for ENT conditions, including sinus issues and hearing loss.',
    name: 'Dr. Ethan Taylor',
    bookingLink: './appointment?doctor=EthanTaylor'
  },
  {
    id: 24,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Mia Johnson',
    specialty: 'Palliative Care',
    description: 'Supportive care for patients with serious illnesses to improve quality of life.',
    name: 'Dr. Mia Johnson',
    bookingLink: './appointment?doctor=MiaJohnson'
  },
  {
    id: 25,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. Jacob White',
    specialty: 'Rheumatology',
    description: 'Diagnosis and treatment of autoimmune diseases and inflammatory conditions.',
    name: 'Dr. Jacob White',
    bookingLink: './appointment?doctor=JacobWhite'
  },
  {
    id: 26,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Isabella Harris',
    specialty: 'Geriatrics',
    description: 'Comprehensive care for elderly patients, focusing on aging-related health conditions.',
    name: 'Dr. Isabella Harris',
    bookingLink: './appointment?doctor=IsabellaHarris'
  },
  {
    id: 27,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. Alexander Clark',
    specialty: 'Pulmonology',
    description: 'Care for respiratory conditions, including asthma, COPD, and lung infections.',
    name: 'Dr. Alexander Clark',
    bookingLink: './appointment?doctor=AlexanderClark'
  },
  {
    id: 28,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Charlotte King',
    specialty: 'Endocrinology',
    description: 'Specialized care for hormone-related conditions and disorders.',
    name: 'Dr. Charlotte King',
    bookingLink: './appointment?doctor=CharlotteKing'
  },
  {
    id: 29,
    image: '../assets/data/doctor4.jpeg',
    alt: 'Dr. Henry Scott',
    specialty: 'Nephrology',
    description: 'Specialized care for kidney diseases and conditions, including dialysis treatment.',
    name: 'Dr. Henry Scott',
    bookingLink: './appointment?doctor=HenryScott'
  },
  {
    id: 30,
    image: '../assets/data/doctor2.jpeg',
    alt: 'Dr. Grace Lewis',
    specialty: 'Neurology',
    description: 'Expert diagnosis and treatment of neurological disorders, including headaches and epilepsy.',
    name: 'Dr. Grace Lewis',
    bookingLink: './appointment?doctor=GraceLewis'
  }
];




const DoctorsAvailable = () => {
  return (
    <main>
      <section className="services bookingd">
        <h1>Doctors Available</h1>
        <div className="service-cards">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="service-card">
              <img src={doctor.image} alt={doctor.alt} />
              <h2>{doctor.specialty}</h2>
              <p>{doctor.description}</p>
              <p><strong>Doctor:</strong> {doctor.name}</p>
              <a href={doctor.bookingLink} className="btn">Book Appointment</a>
            </div>
          ))}
        </div>
      </section>A
    </main>
  );
};

export default DoctorsAvailable;
