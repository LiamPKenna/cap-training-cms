import React from 'react';
import Loading from '../utilities/Loading';
import { StyledListItem } from './StyledCourseComponents';
import CourseLink from './CourseLink';

const CourseListItems = props => {
  const { courses } = props;
  if (!courses) return <Loading />;
  return Object.keys(courses).map(courseId => (
    <StyledListItem key={courseId}>
      <CourseLink courseId={courseId} title={courses[courseId].title} />
    </StyledListItem>
  ));
};

export default CourseListItems;
