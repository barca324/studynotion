import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto flex flex-wrap justify-between w-11/12 ">
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h4 className="text-lg font-bold mb-4">Connect with Us</h4>
          <ul className="text-sm">
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Instagram</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p className="text-sm">City centre<br/>Bengaluru,Karnatka<br/>768976</p>
          <p className="text-sm">Email: help@studynotion.com<br/>Phone: 123-456-7890</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h4 className="text-lg font-bold mb-4">Newsletter</h4>
          <form>
            <input type="email" placeholder="Your Email" className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-2"/>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; 2024 Study Notion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
