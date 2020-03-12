import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { storage } from '../../../firebase';

const VideoInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const VideoUpload = () => {
  const [video, setVideo] = useState(null);

  const handleChange = e => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`videos/${video.name}`).put(video);
    console.log(uploadTask);

    uploadTask.on(
      'state_changed',
      snap => {
        console.log(
          `${Math.floor((snap.bytesTransferred / snap.totalBytes) * 100)}%`
        );
      },
      error => console.log(error),
      () => {
        storage
          .ref('videos')
          .child(video.name)
          .getDownloadURL()
          .then(url => console.log(url));
      }
    );
  };

  return (
    <VideoInputDiv>
      <input type="file" onChange={handleChange} />
      <Button color="primary" variant="contained" onClick={handleUpload}>
        Upload
      </Button>
    </VideoInputDiv>
  );
};

export default VideoUpload;
