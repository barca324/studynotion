import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getenrolledcourses } from '../../services/operations/Profileapi';

const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const {user}=useSelector((state)=>state.profile)

  const getEnrolledCourses = async () => {
    try {
      const response = await getenrolledcourses(token);
      setEnrolledCourses(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnrolledCourses();
  }, []);

  return (
    <div>
     <div>Enrolled Courses</div>
      {!enrolledCourses ? (
        <div>Loading...</div>
      ) : enrolledCourses.length === 0 ? (
        <p>You have not enrolled in any course</p>
      ) : (
        <div>
          {enrolledCourses.map((course, index) => (
            <div key={index}>
              <div>
                <img src={course.thumbnail} alt={course.name} />
                <div>
                  <p>{course.name}</p>
                  <p>{course.description}</p>
                </div>
              </div>
              <div>
                <p>Progress: {course.progresspercentage || 0}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
