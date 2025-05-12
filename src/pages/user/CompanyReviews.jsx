import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { company: 'Zoho', rating: 5 },
  { company: 'Tech Mahindra', rating: 3 },
  { company: 'Accenture', rating: 4 },
  { company: 'Wipro', rating: 3 },
  { company: 'TCS', rating: 4 },
  { company: 'Infosys', rating: 3 },
  { company: 'Cognizant', rating: 4 },
];

const CompanyReviews = () => {
  return (
    <div className="mt-10 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Company Ratings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-5 rounded-xl flex flex-col items-center border hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2 text-purple-700">{review.company}</h3>
            <div className="flex gap-1 text-yellow-500">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < review.rating ? 'fill-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyReviews;
