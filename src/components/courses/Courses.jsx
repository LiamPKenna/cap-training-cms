import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loading from '../utilities/Loading';
import { addCourse } from '../../actions';
import NewItemButton from './NewItemButton';
import NewItemInput from './NewItemInput';
import CourseLink from './CourseLink';
import NewItemDiv from './NewItemDiv';
import { StyledListItem, PageWrapDiv } from './StyledCourseComponents';

const Courses = props => {
  const [showForm, setShowForm] = useState(false);
  const [newCourseText, setNewCourseText] = useState('');

  const showNewCourseForm = () => {
    setShowForm(true);
  };

  const handleNewCourse = () => {
    setShowForm(false);
    props.dispatch(addCourse(newCourseText));
  };

  const cancelInput = () => {
    setShowForm(false);
    setNewCourseText('');
  };

  const makeCourses = () => {
    if (!props.courses) {
      return <Loading />;
    } else {
      return Object.keys(props.courses).map(courseId => (
        <StyledListItem key={courseId}>
          <CourseLink
            courseId={courseId}
            title={props.courses[courseId].title}
          />
        </StyledListItem>
      ));
    }
  };

  return (
    <PageWrapDiv>
      <h1>All Courses:</h1>
      <ul>{makeCourses()}</ul>
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

const mapStateToProps = state => {
  return {
    courses: state.courses,
    admin: state.users.admin,
  };
};

export default connect(mapStateToProps)(Courses);
