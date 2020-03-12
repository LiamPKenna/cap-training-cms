import React from 'react';
import styled from 'styled-components';
import NewItemButton from './NewItemButton';
import NewItemInput from './NewItemInput';

export const NewItemMainDiv = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

const NewItemDiv = props => {
  const {
    showForm,
    showNewCourseForm,
    newCourseText,
    setNewCourseText,
    handleNewCourse,
    cancelInput,
  } = props;
  if (!showForm) {
    return (
      <NewItemMainDiv>
        <NewItemButton clickHandler={showNewCourseForm} title={'New Course'} />
      </NewItemMainDiv>
    );
  } else {
    return (
      <NewItemMainDiv>
        <NewItemInput
          value={newCourseText}
          handleChange={e => setNewCourseText(e.target.value)}
          handleSubmit={handleNewCourse}
          inputName="Course Name"
          handleCancel={cancelInput}
        />
      </NewItemMainDiv>
    );
  }
};

export default NewItemDiv;
