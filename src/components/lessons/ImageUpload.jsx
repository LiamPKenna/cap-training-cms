import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { storage } from "../../../firebase";

const ImageInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    console.log(uploadTask);

    uploadTask.on(
      "state_changed",
      snap => {
        console.log(
          `${Math.floor((snap.bytesTransferred / snap.totalBytes) * 100)}%`
        );
      },
      error => console.log(error),
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => console.log(url));
      }
    );
  };

  return (
    <ImageInputDiv>
      <input type="file" onChange={handleChange} />
      <Button color="primary" variant="contained" onClick={handleUpload}>
        Upload
      </Button>
    </ImageInputDiv>
  );
};

export default ImageUpload;
