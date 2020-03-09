import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { storage } from "../../firebase";
import { useDispatch } from "react-redux";
import { updatePicture } from "../../actions";

const ImageInputDiv = styled.div`
  align-items: center;
  max-width: 25rem;
  background: linear-gradient(
    90deg,
    rgba(40, 40, 40, 1) ${props => props.uploadProgress - 1}%,
    rgba(0, 0, 0, 0) ${props => props.uploadProgress}%,
    rgba(113, 113, 113, 0) 100%
  );
  margin: 1rem auto;
`;

const StyledInput = styled.input`
  width: 100%;
  display: none;
`;

const SelectedDiv = styled.div`
  text-align: center;
  width: 100%;
`;

const ImageUpload = props => {
  const [image, setImage] = useState(null);
  const [altText, setAltText] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const dispatch = useDispatch();

  const { lessonId, elementIndex } = props;

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setTimeout(() => {
        console.log(image);
        if (image) setAltText(image.name);
      }, 1000);
    }
  };

  const handleUpload = e => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snap => {
        setUploadProgress(
          Math.floor((snap.bytesTransferred / snap.totalBytes) * 100)
        );
      },
      error => console.log(error),
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setUploadProgress(0);
            dispatch(
              updatePicture({
                url: url,
                alt: altText,
                lessonId,
                elementIndex
              })
            );
          });
      }
    );
  };

  return (
    <ImageInputDiv uploadProgress={uploadProgress}>
      <form onSubmit={handleUpload}>
        <StyledInput
          type="file"
          onChange={handleChange}
          id="upload"
          accept="image/*"
        />
        <label htmlFor="upload">
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
          >
            Select Image
          </Button>
        </label>
        {image ? (
          <SelectedDiv>{`Image selected: ${image.name}`}</SelectedDiv>
        ) : (
          ""
        )}
        <TextField
          required
          label="Alt Text"
          value={altText}
          onChange={e => setAltText(e.target.value)}
          fullWidth
          variant="filled"
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Upload
        </Button>
      </form>
    </ImageInputDiv>
  );
};

export default ImageUpload;
