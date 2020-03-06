import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import styled from "styled-components";

const PlusButton = styled.button`
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: grey;
  margin: 0.25rem;
`;

const NewItemButton = props => {
  return (
    <PlusButton onClick={props.clickHandler} title={props.title}>
      <AddCircleIcon fontSize={"large"} />
    </PlusButton>
  );
};

export default NewItemButton;
