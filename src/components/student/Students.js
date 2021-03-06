import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import styles from './students.css';

const Students = ({ filterTa, students, handleStudentSelect }) => {
  const studentItems = students
    .sort((a, b) => (b.pending - a.pending))
    .filter(i => {
      if(filterTa) return i.sectionNames.includes(filterTa);
      return i;
    })
    .map(student => {
      return (
        <Student 
          key={student.id} 
          id={student.id}
          name={student.name} 
          pending={student.pending} 
          missing={student.missing}
          handleStudentSelect={handleStudentSelect}
        />
      );
    });

  return (
    <ul className={styles.students}>
      {studentItems}
    </ul>
  );
};

Students.propTypes = {
  students: PropTypes.array.isRequired,
  handleStudentSelect: PropTypes.func.isRequired,
  filterTa: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export default Students;
