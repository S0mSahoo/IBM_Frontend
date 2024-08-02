import React, { useEffect } from 'react';
import '../css/DoctorsAvailable.css';

const doctors = [
  {
    id: 1,
    image: 'https://media.istockphoto.com/id/690210372/photo/smiling-male-doctor-with-arms-crossed-in-hospital.jpg?s=612x612&w=0&k=20&c=xIxP4kNxRDRzE6KfMp2a56O3l6Z-JvF1k3wuKKGJsmQ=',
    alt: 'Dr. John Doe',
    specialty: 'General Consultation',
    description: 'Our experienced general physicians provide comprehensive health care for all age groups.',
    name: 'Dr. John Doe',
    bookingLink: './appointment?doctor=JohnDoe'
  },
  {
    id: 2,
    image: 'https://img.freepik.com/premium-photo/attractive-female-doctor-white-coat-glasses_88135-6126.jpg?w=900',
    alt: 'Dr. Sarah Williams',
    specialty: 'Pediatric Care',
    description: 'Specialized care for infants, children, and adolescents by our expert pediatricians.',
    name: 'Dr. Sarah Williams',
    bookingLink: './appointment?doctor=SarahWilliams'
  },
  {
    id: 3,
    image: 'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg?t=st=1722536928~exp=1722540528~hmac=8de652f42231c4d0a20c2c32480f6c6ccc5df6bc8fb290e9a4a92e5ceee753b1&w=900',
    alt: 'Dr. Alan Brown',
    specialty: 'Dermatology',
    description: 'Advanced skin care treatments and procedures by our skilled dermatologists.',
    name: 'Dr. Alan Brown',
    bookingLink: './appointment?doctor=AlanBrown'
  },
  {
    id: 4,
    image: 'https://media.istockphoto.com/id/1207212127/photo/experience-you-can-trust.jpg?s=612x612&w=0&k=20&c=V0sNP_j9l3QQKwQ3dU4d4cJGgvdqceuXCj3__6m2So4=',
    alt: 'Dr. Jane Smith',
    specialty: 'Cardiology',
    description: 'Expert cardiac care including diagnosis, treatment, and prevention of heart conditions.',
    name: 'Dr. Jane Smith',
    bookingLink: './appointment?doctor=JaneSmith'
  },
  {
    id: 5,
    image: 'https://img.freepik.com/free-photo/attractive-medical-professional-uniform-standing-with-arms-crossed-against-isolated-background_662251-416.jpg?w=740&t=st=1722536442~exp=1722537042~hmac=de1514445b16db931ed8ff6f2203c353a08ab4395e43bdb86ec1d374d42dfdce',
    alt: 'Dr. Michael Johnson',
    specialty: 'Orthopedics',
    description: 'Comprehensive care for bone, joint, and muscle conditions by our orthopedic specialists.',
    name: 'Dr. Michael Johnson',
    bookingLink: './appointment?doctor=MichaelJohnson'
  },
  {
    id: 6,
    image: 'https://img.freepik.com/premium-photo/studio-shot-young-muscular-man-doctor-against-white-backgroun_251136-51166.jpg?w=996',
    alt: 'Dr. Emily Davis',
    specialty: 'Ophthalmology',
    description: 'Advanced eye care services including surgeries and treatments for various eye conditions.',
    name: 'Dr. Emily Davis',
    bookingLink: './appointment?doctor=EmilyDavis'
  },
  {
    id: 7,
    image: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Dr. Mark Wilson',
    specialty: 'Dental Care',
    description: 'Full range of dental services including cleanings, fillings, and cosmetic procedures.',
    name: 'Dr. Mark Wilson',
    bookingLink: './appointment?doctor=MarkWilson'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Dr. Linda Taylor',
    specialty: 'Gynecology',
    description: 'Comprehensive women’s health services including prenatal care and gynecological surgeries.',
    name: 'Dr. Linda Taylor',
    bookingLink: './appointment?doctor=LindaTaylor'
  },
  {
    id: 9,
    image: 'https://as1.ftcdn.net/v2/jpg/03/13/77/82/1000_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv.jpg',
    alt: 'Dr. Robert Brown',
    specialty: 'Neurology',
    description: 'Expert diagnosis and treatment of neurological disorders, including headaches and epilepsy.',
    name: 'Dr. Robert Brown',
    bookingLink: './appointment?doctor=RobertBrown'
  },
  {
    id: 10,
    image: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Dr. Laura Green',
    specialty: 'Endocrinology',
    description: 'Specialized care for hormone-related conditions and disorders such as diabetes and thyroid issues.',
    name: 'Dr. Laura Green',
    bookingLink: './appointment?doctor=LauraGreen'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Dr. Michael Adams',
    specialty: 'Hematology',
    description: 'Expert care for blood disorders, including anemia, leukemia, and clotting issues.',
    name: 'Dr. Michael Adams',
    bookingLink: './appointment?doctor=MichaelAdams'
  },
  {
    id: 12,
    image: 'https://media.istockphoto.com/id/675005034/photo/young-smiling-confident-female-doctor-healthcare-professional-with-stethoscope-standing.jpg?s=612x612&w=0&k=20&c=9oou8xYRKw4TkiET_ztzQpZD-Io0ErIVsnjdddRNMOQ=',
    alt: 'Dr. Alice Cooper',
    specialty: 'Rheumatology',
    description: 'Diagnosis and treatment of autoimmune diseases and affecting the joints and muscles.',
    name: 'Dr. Alice Cooper',
    bookingLink: './appointment?doctor=AliceCooper'
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Dr. David Lee',
    specialty: 'Gastroenterology',
    description: 'Comprehensive care for digestive system disorders, including IBS, liver diseases, and more.',
    name: 'Dr. David Lee',
    bookingLink: './appointment?doctor=DavidLee'
  },
  {
    id: 14,
    image: 'https://as1.ftcdn.net/v2/jpg/03/13/77/82/1000_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv.jpg',
    alt: 'Dr. Nancy Wilson',
    specialty: 'Infectious Diseases',
    description: 'Specialized treatment for infections caused by bacteria, viruses, fungi, and parasites.',
    name: 'Dr. Nancy Wilson',
    bookingLink: './appointment?doctor=NancyWilson'
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Dr. Charles King',
    specialty: 'Pulmonology',
    description: 'Care for respiratory conditions, including asthma, COPD, and lung infections.',
    name: 'Dr. Charles King',
    bookingLink: './appointment?doctor=CharlesKing'
  },
  {
    id: 16,
    image: 'https://media.istockphoto.com/id/675005034/photo/young-smiling-confident-female-doctor-healthcare-professional-with-stethoscope-standing.jpg?s=612x612&w=0&k=20&c=9oou8xYRKw4TkiET_ztzQpZD-Io0ErIVsnjdddRNMOQ=',
    alt: 'Dr. Olivia Martinez',
    specialty: 'Urology',
    description: 'Expert treatment for urinary tract and male reproductive system disorders.',
    name: 'Dr. Olivia Martinez',
    bookingLink: './appointment?doctor=OliviaMartinez'
  },
  {
    id: 17,
    image: 'https://media.istockphoto.com/id/1494324933/photo/portrait-of-asian-chinese-mixed-race-senior-mature-man-doctor-in-collared-business-shirt.webp?s=2048x2048&w=is&k=20&c=kipGtD1Tfd4y49mdCoCoE6Hpo3FSlP9anUIjkqvp_Ys=',
    alt: 'Dr. James Wilson',
    specialty: 'Plastic Surgery',
    description: 'Cosmetic and reconstructive surgical procedures to enhance appearance and restore function.',
    name: 'Dr. James Wilson',
    bookingLink: './appointment?doctor=JamesWilson'
  },
  {
    id: 18,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Dr. Sophia Lee',
    specialty: 'Oncology',
    description: 'Comprehensive care for cancer patients, including diagnosis, treatment, and follow-up care.',
    name: 'Dr. Sophia Lee',
    bookingLink: './appointment?doctor=SophiaLee'
  },
  {
    id: 1,
    image: 'https://media.istockphoto.com/id/690210372/photo/smiling-male-doctor-with-arms-crossed-in-hospital.jpg?s=612x612&w=0&k=20&c=xIxP4kNxRDRzE6KfMp2a56O3l6Z-JvF1k3wuKKGJsmQ=',
    alt: 'Dr. John Doe',
    specialty: 'General Consultation',
    description: 'Our experienced general physicians provide comprehensive health care for all age groups.',
    name: 'Dr. John Doe',
    bookingLink: './appointment?doctor=JohnDoe'
  },
  {
    id: 2,
    image: 'https://img.freepik.com/premium-photo/attractive-female-doctor-white-coat-glasses_88135-6126.jpg?w=900',
    alt: 'Dr. Sarah Williams',
    specialty: 'Pediatric Care',
    description: 'Specialized care for infants, children, and adolescents by our expert pediatricians.',
    name: 'Dr. Sarah Williams',
    bookingLink: './appointment?doctor=SarahWilliams'
  },
  {
    id: 3,
    image: 'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg?t=st=1722536928~exp=1722540528~hmac=8de652f42231c4d0a20c2c32480f6c6ccc5df6bc8fb290e9a4a92e5ceee753b1&w=900',
    alt: 'Dr. Alan Brown',
    specialty: 'Dermatology',
    description: 'Advanced skin care treatments and procedures by our skilled dermatologists.',
    name: 'Dr. Alan Brown',
    bookingLink: './appointment?doctor=AlanBrown'
  },
  {
    id: 4,
    image: 'https://media.istockphoto.com/id/1207212127/photo/experience-you-can-trust.jpg?s=612x612&w=0&k=20&c=V0sNP_j9l3QQKwQ3dU4d4cJGgvdqceuXCj3__6m2So4=',
    alt: 'Dr. Jane Smith',
    specialty: 'Cardiology',
    description: 'Expert cardiac care including diagnosis, treatment, and prevention of heart conditions.',
    name: 'Dr. Jane Smith',
    bookingLink: './appointment?doctor=JaneSmith'
  },
  {
    id: 5,
    image: 'https://img.freepik.com/free-photo/attractive-medical-professional-uniform-standing-with-arms-crossed-against-isolated-background_662251-416.jpg?w=740&t=st=1722536442~exp=1722537042~hmac=de1514445b16db931ed8ff6f2203c353a08ab4395e43bdb86ec1d374d42dfdce',
    alt: 'Dr. Michael Johnson',
    specialty: 'Orthopedics',
    description: 'Comprehensive care for bone, joint, and muscle conditions by our orthopedic specialists.',
    name: 'Dr. Michael Johnson',
    bookingLink: './appointment?doctor=MichaelJohnson'
  },
  {
    id: 6,
    image: 'https://img.freepik.com/premium-photo/studio-shot-young-muscular-man-doctor-against-white-backgroun_251136-51166.jpg?w=996',
    alt: 'Dr. Emily Davis',
    specialty: 'Ophthalmology',
    description: 'Advanced eye care services including surgeries and treatments for various eye conditions.',
    name: 'Dr. Emily Davis',
    bookingLink: './appointment?doctor=EmilyDavis'
  },
  
 
];




const DoctorsAvailable = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <main>
      <section className="services">
        <h1><span>Doctors</span> Available</h1>
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
      </section>
    </main>
  );
};

export default DoctorsAvailable;
