import React, { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styled from "styled-components";

const RadioDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
`;

const NewElementWrapperDiv = styled.div`
  background-color: #f5f5f5;
`;

const InputLabelHeader = styled.h6`
  margin: 0;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid lightgrey;
  font-size: 1rem;
`;

const NewElementGrid = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-column-gap: 15px;
  min-height: 5rem;
`;

const NewElementPaper = styled(Paper)`
  margin: 20px 0;
`;

const NewElementSelector = props => {
  const [value, setValue] = useState("text");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <NewElementPaper component="form">
      <NewElementWrapperDiv>
        <InputLabelHeader>ADD A NEW ELEMENT</InputLabelHeader>
        <NewElementGrid>
          <Button color="primary" onClick={() => props.handleNewElement(value)}>
            <CheckCircleIcon />
          </Button>
          <RadioGroup
            aria-label="element type"
            name="element type"
            value={value}
            onChange={handleChange}
            row
          >
            <RadioDiv>
              <FormControlLabel
                value="text"
                control={<Radio color="primary" />}
                label="Text"
              />
              <FormControlLabel
                value="title"
                control={<Radio color="primary" />}
                label="Title"
              />
              <FormControlLabel
                value="heading"
                control={<Radio color="primary" />}
                label="Heading"
              />
              <FormControlLabel
                value="subHeading"
                control={<Radio color="primary" />}
                label="Sub Heading"
              />
              <FormControlLabel
                value="code"
                control={<Radio color="primary" />}
                label="Code"
              />
              <FormControlLabel
                value="picture"
                control={<Radio color="primary" />}
                label="Picture"
              />
              <FormControlLabel
                value="video"
                control={<Radio color="primary" />}
                label="Video"
              />
              <FormControlLabel
                value="break"
                control={<Radio color="primary" />}
                label="Break"
              />
            </RadioDiv>
          </RadioGroup>
        </NewElementGrid>
      </NewElementWrapperDiv>
    </NewElementPaper>
  );
};

export default NewElementSelector;
