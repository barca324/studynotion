import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div>
           <h1 className="text-3xl font-bold text-black mb-6 items-center text-center">About </h1>
        </div>
   
        <p className="text-lg text-gray-700 mb-4">
          StudyNotion is a platform dedicated to providing high-quality educational resources and tools to students
          and educators. Our mission is to make learning more accessible, engaging, and effective for everyone.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you're a student looking for study materials, a teacher seeking teaching resources, or just someone
          passionate about learning, StudyNotion has something for you. We offer a wide range of educational content,
          including articles, tutorials, videos, interactive quizzes, and much more.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our team is committed to continuously improving and expanding StudyNotion to better serve the needs of our
          users. We value feedback from our community and strive to create an inclusive and supportive learning
          environment for all.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for choosing StudyNotion as your learning companion. Together, let's explore the exciting world
          of knowledge and discovery!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
