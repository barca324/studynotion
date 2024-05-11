import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className='text-center items-center'>
         <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        </div>
   
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions, suggestions, or feedback, please feel free to reach out to us. We'd love to
          hear from you! You can contact us via email, phone, or by filling out the contact form below.
        </p>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <div className="flex items-center mb-2">
            <svg className="h-6 w-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12V12M12 12v8m-5-8a5 5 0 0 1 10 0v8a5 5 0 0 1-10 0V12zm0 0h10m-8 4h2m-4-4h2"></path>
            </svg>
            <span className="text-lg text-gray-700">Email: info@studynotion.com</span>
          </div>
          <div className="flex items-center">
            <svg className="h-6 w-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <span className="text-lg text-gray-700">Phone: +1 (123) 456-7890</span>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Form</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name:</label>
              <input id="name" name="name" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input id="email" name="email" type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message:</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
