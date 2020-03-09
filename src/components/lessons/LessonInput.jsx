import React from "react";
import { connect } from "react-redux";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { updateText, deleteText, moveElement } from "../../actions";
import styled from "styled-components";

const InputDiv = styled.div`
  margin: 20px 0;
`;

const InputGridDiv = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 60px 60px;
  background-color: #f5f5f5;
`;

const UpDownDiv = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.element === "break" || props.element === "picture"
      ? "1fr 60px 60px 1fr"
      : "1fr 60px 60px 60px 60px 60px"};
`;

const InputLabelHeader = styled.h6`
  text-align: center;
  margin: 0;
  padding: 1rem 1.25rem;
`;

const LessonInput = props => {
  const {
    elementIndex,
    value,
    lessonId,
    fullLessonContent,
    dispatch,
    element,
    toggleEdit,
    handleChange,
    changeAlign,
    align
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    if (element !== "picture" && element !== "break") {
      dispatch(
        updateText({
          elementIndex: elementIndex,
          content: value,
          lessonId: lessonId
        })
      );
    }
    toggleEdit();
  };

  const handleDelete = () => {
    dispatch(
      deleteText({
        elementIndex,
        lessonId,
        fullLessonContent
      })
    );
    toggleEdit();
  };

  const handleMove = direction => {
    dispatch(
      moveElement({
        elementIndex,
        lessonId,
        fullLessonContent,
        direction
      })
    );
    toggleEdit();
  };

  return (
    <InputDiv>
      <Paper component="form" onSubmit={handleSubmit}>
        <InputGridDiv>
          <Button type="submit" color="primary">
            <CheckCircleIcon />
          </Button>
          <div>
            <InputLabelHeader>{element.toUpperCase()}</InputLabelHeader>
            {element === "break" || element === "picture" ? (
              <div></div>
            ) : (
              <TextField
                required
                multiline
                value={value}
                onChange={handleChange}
                fullWidth
                variant="filled"
              />
            )}
            <UpDownDiv element={element}>
              <div></div>
              <Button onClick={() => handleMove("up")}>
                <ArrowUpwardIcon />
              </Button>
              <Button onClick={() => handleMove("down")}>
                <ArrowDownwardIcon />
              </Button>
              {element === "break" || element === "picture" ? (
                ""
              ) : (
                <>
                  <Button
                    disabled={align === "left"}
                    onClick={() => changeAlign("left")}
                  >
                    <FormatAlignLeftIcon />
                  </Button>
                  <Button
                    disabled={align === "center"}
                    onClick={() => changeAlign("center")}
                  >
                    <FormatAlignCenterIcon />
                  </Button>
                  <Button
                    disabled={align === "right"}
                    onClick={() => changeAlign("right")}
                  >
                    <FormatAlignRightIcon />
                  </Button>
                </>
              )}
            </UpDownDiv>
          </div>
          <Button color="primary" onClick={toggleEdit}>
            <CancelIcon />
          </Button>
          <Button onClick={handleDelete}>
            <DeleteForeverIcon color="error" />
          </Button>
        </InputGridDiv>
      </Paper>
    </InputDiv>
  );
};

export default connect()(LessonInput);
