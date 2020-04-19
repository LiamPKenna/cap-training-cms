import React, { useState } from 'react';
import { connect } from 'react-redux';
import { courseActions } from '../../actions';
import NewItemDiv from './NewItemDiv';
import { PageWrapDiv } from './StyledCourseComponents';
import CourseListItems from './CourseListItems';

const Courses = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [newCourseText, setNewCourseText] = useState('');

  const showNewCourseForm = () => {
    setShowForm(true);
  };

  const handleNewCourse = () => {
    setShowForm(false);
    props.dispatch(courseActions.addCourse(newCourseText));
  };

  const cancelInput = () => {
    setShowForm(false);
    setNewCourseText('');
  };

  return (
    <PageWrapDiv>
      <h1>All Courses:</h1>
      <ul>
        <CourseListItems courses={props.courses} />
      </ul>
      <NewItemDiv
        showForm={showForm}
        showNewCourseForm={showNewCourseForm}
        newCourseText={newCourseText}
        setNewCourseText={setNewCourseText}
        handleNewCourse={handleNewCourse}
        cancelInput={cancelInput}
      />
    </PageWrapDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    admin: state.users.admin,
  };
};

export default connect(mapStateToProps)(Courses);
