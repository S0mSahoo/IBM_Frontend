// src/DonationPortal.js
import React, { useState } from 'react';
import '../css/Donation.css';
import DonateMoney from './DonateMoney';
import DonateFood from './DonateFood';
import Aos from 'aos';
Aos.init()
const Donation = () => {
  const [donationType, setDonationType] = useState('money')
  let target = 1000000
  let current = 869459
  const handleClick = (type) => {
    setDonationType(type);
  };
  return (
    <div id='donation' data-aos='fade-up'>
      <h1 data-aos='fade-up' className='donation-head'>Make a&nbsp;<span> Donation!!</span></h1>
      <div data-aos='fade-up' className="main">
        <div data-aos='fade-up' className="left">
          <div className="content-1">
            <img src="https://images.ctfassets.net/z0x29akdg5eb/27Zr13KQjfdDvNc0T4L1wx/daa855efe9c03b41e373bc2a27d432fd/2024118_SDN_PortSudanDistributions_AbubakarGARENLABEI__4_of_41_-b.jpg?w=842&h=527&fit=fill&q=80&fm=avif" alt="..." />
            <div>
              <span>{target} meals</span>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <span>{current} meals</span>
              <span>{(current / target * 100).toFixed(2)}%</span>
            </div>
          </div>
          <div className="content-2">
            <h1>Overview</h1>
            <p>Global food insecurity is a pressing issue affecting over 820 million people worldwide, according to the Food and Agriculture Organization (FAO). This crisis is exacerbated by a combination of factors, including climate change, conflict, economic instability, and the COVID-19 pandemic, which has pushed millions more into hunger. Food insecurity leads to malnutrition, which impacts both physical and cognitive development, particularly in children. Approximately 144 million children under five years old are stunted due to chronic undernourishment.

              The effects of food insecurity extend beyond health. Economically, it traps communities in a cycle of poverty, as malnourished individuals are less productive, affecting their ability to work and contribute to the economy. Socially, it leads to instability and can drive conflict, as competition for scarce resources increases. Additionally, food insecurity disproportionately affects rural areas, where agriculture is often the primary livelihood. Smallholder farmers, who produce a significant portion of the world’s food, are particularly vulnerable to the impacts of climate change and market fluctuations.

              Addressing food insecurity requires a multifaceted approach, including sustainable agricultural practices, improved food distribution systems, and social safety nets. International cooperation and local community involvement are crucial in developing resilient food systems that can withstand the challenges of a changing global landscape. Ensuring food security is essential for achieving broader development goals, including poverty reduction, health improvement, and social stability.</p>
          </div>
        </div>
        <div data-aos='fade-up' className="right">
          <div data-aos='fade-up' className='donation-type'>
            <span className={donationType === 'money' ? 'active' : ''} onClick={() => handleClick('money')}>Donate Money</span>
            <span className={donationType === 'food' ? 'active' : ''} onClick={() => handleClick('food')}>Donate Food</span>
          </div>
          {donationType === 'money' && <DonateMoney />}
          {donationType === 'food' && <DonateFood />}
        </div>
      </div>
    </div>
  );
};

export default Donation;
