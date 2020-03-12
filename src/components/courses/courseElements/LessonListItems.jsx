import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CheckMark from '../../utilities/CheckMark';

export const StyledListItem = styled.li`
  margin: 1rem 3rem 0.5rem;
`;

const LessonListItems = props => {
  const { lessons, completedLessons } = props;
  if (!lessons || Object.keys(lessons).length < 1) {
    return <StyledListItem>No lessons yet</StyledListItem>;
  }
  return lessons
    .filter(l => l.title !== 'default')
    .map(lesson => (
      <StyledListItem key={lesson.lessonId}>
        <Link to={`/lessons/${lesson.lessonId}`}>{lesson.title}</Link>
        {completedLessons && completedLessons[lesson.lessonId] ? (
          <CheckMark />
        ) : (
          ''
        )}
      </StyledListItem>
    ));
};

export default LessonListItems;
