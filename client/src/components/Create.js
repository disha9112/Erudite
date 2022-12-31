import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";
import styled from "styled-components";
import app from "../firebase/firebase";

const Container = styled.div`
  display: flex;
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000a7;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.bgMenu};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  display: flex;
  color: #ff3465;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Info = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #ff3465;
  color: ${({ theme }) => theme.text};
`;
const Label = styled.label`
  font-size: 0.9rem;
`;

const Create = ({ setOpen }) => {
  const navigate = useNavigate();

  const [thumbnail, setThumbnail] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [thumbnailProgress, setThumbnailProgress] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  // const [title, setTitle] = useState("");
  // const [info, setInfo] = useState("");
  const [inputs, setInputs] = useState({});
  // const [tag, setTag] = useState("");
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => {
      // take previous items and change description to new value
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "videoUrl"
          ? setVideoProgress(Math.round(progress))
          : setThumbnailProgress(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            // take previous items and change description to new value
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    thumbnail && uploadFile(thumbnail, "thumbnail");
  }, [thumbnail]);
  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  const handleCreate = async (e) => {
    e.preventDefault();
    await axios.post("/videos/", { ...inputs }).then((res) => {
      setOpen(false);
      setId(res.data.video._id);
      navigate(`/video/${res.data.video._id}`);
    });
    await axios.put(`/videos/view/${id}`);
  };

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>Close</Close>
        <Title>Upload a new video</Title>
        <Label>Video</Label>
        {videoProgress > 0 ? (
          "Uploading: " + videoProgress + "%"
        ) : (
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}
        <Input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <Info placeholder="Info" name="info" rows={5} onChange={handleChange} />
        <Input
          type="text"
          name="tag"
          placeholder="Tag"
          onChange={handleChange}
        />
        <Label>Thumbnail</Label>
        {thumbnailProgress > 0 ? (
          "Uploading: " + thumbnailProgress + "%"
        ) : (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        )}
        <Button onClick={handleCreate}>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Create;
