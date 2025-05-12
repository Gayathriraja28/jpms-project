import React from 'react';
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        {/* Company Section */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Employer Home</a></li>
            </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>

            <li><a href="#" className="hover:underline">Report Issue</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Fraud Alert</a></li>
            <li><a href="#" className="hover:underline">Trust & Safety</a></li>
          </ul>
        </div>

        {/* App Section */}
        <div>
          <h3 className="font-semibold mb-3">Mobile</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Apply on the Go</a></li>
            <li><a href="#" className="hover:underline">Get real-time job updates on our App</a></li><br/>
          <a href='https://play.google.com/store/apps?hl=en' target='blank'> <img src={playstore} alt="playstore" className='h-9 w-auto'/> </a> <br/>
          <a href='https://www.apple.com/in/app-store/' target='blank'><img src={appstore} alt="playstore" className='h-9 w-auto'/></a>
            
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
        &copy; 2025 Job Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
