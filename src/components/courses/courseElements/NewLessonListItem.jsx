import React from 'react';
import NewItemButton from '../NewItemButton';
import NewItemInput from '../NewItemInput';
import styled from 'styled-components';

export const NewItemDiv = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

const NewLessonListItem = props => {
  const {
    admin,
    showLessonForm,
    segmentFocus,
    segmentId,
    showThisSegmentLessonInput,
    newLessonText,
    setNewLessonText,
    handleNewLesson,
    segments,
    cancelLessonInput,
  } = props;
  if (!admin) return '';
  if (showLessonForm && segmentFocus === segmentId) {
    return (
      <NewItemDiv>
        <NewItemInput
          value={newLessonText}
          handleChange={e => setNewLessonText(e.target.value)}
          handleSubmit={() =>
            handleNewLesson(segmentId, segments[segmentId].lessons)
          }
          inputName="Lesson Name"
          handleCancel={cancelLessonInput}
        />
      </NewItemDiv>
    );
  } else {
    return (
      <NewItemDiv>
        <NewItemButton
          text="NEW LESSON"
          clickHandler={() => showThisSegmentLessonInput(segmentId)}
          title="New Lesson"
        />
      </NewItemDiv>
    );
  }
};

export default NewLessonListItem;
