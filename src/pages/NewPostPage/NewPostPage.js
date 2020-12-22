import styled from "styled-components";
import React, { useState } from "react";
import { newPost } from "../../WebAPI";
import { getAuthToken } from "../../Utils";

import { useHistory } from "react-router-dom";

const NewPostContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 80px;
  border: 1px solid #333;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;
const PostLable = styled.div`
  margin: 10px 0px;
  font-size: 20px;
`;

const PostInput = styled.div`
  margin: 16px;
`;
const PostTitleInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 18px;
`;
const PostTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
`;
const PostSubmit = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Error = styled.div`
  color: red;
`;

export default function LoginPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    const token = getAuthToken();
    setErrorMessage(null);
    if (token) {
      if (!title || !body) {
        return setErrorMessage("Please fill the empty area.");
      }
      newPost(title, body).then((response) => {
        console.log(response);
      });
      history.push("/");
    }
  };
  return (
    <NewPostContainer>
      {errorMessage && <Error>{errorMessage}</Error>}
      <form onSubmit={handleSubmit}>
        <PostInput>
          <PostLable>文章標題</PostLable>
          <PostTitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="標題"
          />
        </PostInput>
        <PostInput>
          <PostLable>文章內容</PostLable>
          <PostTextarea
            rows={14}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </PostInput>
        <PostSubmit>
          <button>發布</button>
        </PostSubmit>
      </form>
    </NewPostContainer>
  );
}
