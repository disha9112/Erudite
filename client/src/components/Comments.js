import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Scrollbar } from "react-scrollbars-custom";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import Comment from "./Comment";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";

const Container = styled.div``;
const Wrapper = styled.div`
  /* overflow-y: scroll; */
  height: 74vh;
`;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.soft};
  border: none;
  outline: none;
  background-color: transparent;
`;
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0;
`;
const Button = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const fetchComments = async () => {
    try {
      await axios
        .get(`/comments/${videoId}`)
        .then((res) => setComments(res.data.comments));
      console.log(comments).catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
    } catch (err) {}
  };
  const handleCreateComment = async (e) => {
    e.preventDefault();

    try {
      axios
        .post("/comments/", {
          userId: currentUser._id,
          videoId,
          content,
        })
        .then(() => fetchComments());
    } catch (error) {}
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  return (
    <Container>
      <NewComment>
        {!currentUser ? (
          // <ProfilePic />
          <></>
        ) : (
          <>
            <ProfilePic src={currentUser.profilePic} />
            <Input
              placeholder="Add a new comment..."
              onChange={(e) => setContent(e.target.value)}
            />
            <Button onClick={handleCreateComment}>
              <SendIcon />
            </Button>
            <Hr />
          </>
        )}
      </NewComment>
      <Scrollbar style={{ height: "74vh" }}>
        <Wrapper>
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </Wrapper>
      </Scrollbar>
    </Container>
  );
};

export default Comments;
