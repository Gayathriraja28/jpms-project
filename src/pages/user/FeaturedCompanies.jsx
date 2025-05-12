import React from 'react';
import zohologo from '../../assets/zohologo.png'
import techmlogo from '../../assets/techmlogo.png';
import accenturelogo from '../../assets/accenturelogo.png';
import wiprologo from '../../assets/wiprologo.png';
import tcslogo from '../../assets/tcslogo.png';
import infosyslogo from '../../assets/infosyslogo.png';
import cognizantlogo from '../../assets/cognizantlogo.svg';

const featuredCompanies = [
  { name: 'Zoho', logo: zohologo },
  { name: 'Tech Mahindra', logo: techmlogo },
  { name: 'Accenture', logo: accenturelogo },
  { name: 'Wipro', logo: wiprologo },
  { name: 'TCS', logo: tcslogo },
  { name: 'Infosys', logo: infosyslogo },
  { name: 'Cognizant', logo: cognizantlogo },
];

const FeaturedCompanies = () => (
  <div className="my-8">
    <h2 className="text-xl font-bold mb-4 text-center">Featured Companies</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
      {featuredCompanies.map((company) => (
        <div key={company.name} className="bg-white p-2 rounded shadow-md h-20 flex items-center justify-center">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="h-12 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedCompanies;
