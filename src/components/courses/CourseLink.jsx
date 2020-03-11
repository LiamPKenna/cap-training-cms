import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EditButton from '../utilities/EditButton';
import { connect } from 'react-redux';
import CoursesInput from './CoursesInput';

const CourseLinkHeader = styled.h2`
  :link {
    text-decoration: none;
  }
`;

const CourseLink = props => {
  const [editMode, setEditMode] = useState(false);
  const { courseId, title, admin } = props;
  const [value, setValue] = useState(title);
  const toggleEdit = () => {
    setEditMode(!editMode);
  };
  return (
    <>
      {admin && !editMode ? <EditButton handleClick={toggleEdit} /> : ''}
      {editMode ? (
        <CoursesInput
          toggleEdit={toggleEdit}
          value={value}
          handleChange={e => setValue(e.target.value)}
          upDown={false}
          courseId={courseId}
        />
      ) : (
        <Link to={`/courses/${courseId}`} style={{ textDecoration: 'none' }}>
          <CourseLinkHeader className="course-links">{title}</CourseLinkHeader>
        </Link>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    admin: state.users.admin
  };
};

export default connect(mapStateToProps)(CourseLink);
