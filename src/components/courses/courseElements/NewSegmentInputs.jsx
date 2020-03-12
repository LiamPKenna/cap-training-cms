import React from 'react';
import NewItemButton from '../NewItemButton';
import NewItemInput from '../NewItemInput';
import styled from 'styled-components';

export const NewItemDiv = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

const NewSegmentInputs = props => {
  const {
    showSegmentForm,
    newSegmentText,
    handleNewSegment,
    cancelSegmentInput,
    setNewSegmentText,
    setShowSegmentForm,
    admin,
  } = props;
  if (!admin) return '';
  if (!showSegmentForm) {
    return (
      <NewItemDiv>
        <NewItemButton
          text="NEW SEGMENT"
          clickHandler={() => setShowSegmentForm(true)}
          title="New Segment"
        />
      </NewItemDiv>
    );
  } else {
  }
  return (
    <NewItemDiv>
      <NewItemInput
        value={newSegmentText}
        handleChange={e => setNewSegmentText(e.target.value)}
        handleSubmit={handleNewSegment}
        inputName="Segment Name"
        handleCancel={cancelSegmentInput}
      />
    </NewItemDiv>
  );
};

export default NewSegmentInputs;
