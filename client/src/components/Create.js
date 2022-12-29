import React from "react";
import styled from "styled-components";

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
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>Close</Close>
        <Title>Upload a new video</Title>
        <Label>Video</Label>
        <Input type="file" accept="video/*" />
        <Input type="text" placeholder="Title" />
        <Info placeholder="Info" rows={5} />
        <Input type="text" placeholder="Tag" />
        <Label>Thumbnail</Label>
        <Input type="file" accept="image/*" />
        <Button>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Create;
