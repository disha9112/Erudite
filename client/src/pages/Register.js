import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import axios from "axios";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase/firebase";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
  margin-top: -50px;
`;
const SignUp = styled.div`
  /* flex: 2; */
  align-items: center;
  height: auto;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  max-width: 50%;
  padding: 50px;
  gap: 10px;
`;
const Title = styled.h1`
  font-size: 24px;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  margin: 25px 0;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  outline: none;
  border-radius: 3px;
  padding: 10px;
  margin: 10px 0;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
  /* display: grid; */
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #ff3465;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  display: grid;
`;
const Label = styled.label`
  font-size: 0.9rem;
  display: grid;
`;
const Links = styled.div`
  margin-left: 50px;
`;
const Link = styled.span`
  margin-left: 30px;
`;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputs, setInputs] = useState({});
  const [profilePic, setProfilePic] = useState(undefined);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setInputs((prev) => {
      // take previous items and change description to new value
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const uploadFile = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.round(progress));
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
          // setInputs((prev) => {
          //   // take previous items and change description to new value
          //   return { ...prev, [urlType]: downloadURL };
          // });
          // setProfilePic(downloadURL);
          setInputs((prev) => {
            // take previous items and change description to new value
            return { ...prev, profilePic: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    profilePic && uploadFile(profilePic);
  }, [profilePic]);

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    if (inputs.password !== confirmPassword) {
      toast.error("Passwords don't match, try again");
    } else {
      try {
        await fetch("https://erudite-live.vercel.app/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...inputs,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            dispatch(loginSuccess(data.user));
            localStorage.setItem("token", data.token);
          })
          .then(() => navigate("/"))
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.message);
          });
      } catch (error) {
        dispatch(loginFailure());
      }
    }
  };

  return (
    <Container>
      <ToastContainer />
      <SignUp>
        <Title>Sign up</Title>
        <SubTitle>Start levelling up!</SubTitle>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Label>Profile Picture</Label>
        {progress > 0 ? (
          "Uploading: " + progress + "%"
        ) : (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
        )}
        <Button onClick={handleRegister}>Sign up</Button>
      </SignUp>
    </Container>
  );
};

export default Register;
