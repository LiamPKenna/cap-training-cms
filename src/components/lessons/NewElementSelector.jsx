import React, { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const NewElementSelector = props => {
  const [value, setValue] = useState("text");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const divGridStyle = {
    display: "grid",
    gridTemplateColumns: "70px 1fr",
    gridColumnGap: "15px"
  };
  const labelStyle = {
    textAlign: "center",
    margin: "0",
    padding: "10px 0 10px 0",
    borderBottom: "1px solid lightgrey"
  };
  const newElementStyle = {
    backgroundColor: "#f5f5f5"
  };
  const radioStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0"
  };
  return (
    <Paper component="form">
      <div style={newElementStyle}>
        <h6 style={labelStyle}>ADD A NEW ELEMENT</h6>
        <div style={divGridStyle}>
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
            <div style={radioStyle}>
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
              {/* <FormControlLabel
                value="picture"
                control={<Radio color="primary" />}
                label="Picture"
              /> */}
            </div>
          </RadioGroup>
        </div>
      </div>
    </Paper>
  );
};

export default NewElementSelector;
