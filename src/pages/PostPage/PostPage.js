// import "./App.css";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { getPost } from "../../WebAPI";
import { useParams } from "react-router-dom";

const HomeWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
  border: 1px solid #333;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
const PostContainer = styled.div`
  padding: 16px;
  position: relative;
`;
const PostTitle = styled.div`
  font-size: 24px;
`;
const PostData = styled.div`
  margin: 20px 0;
  color: rgba(0, 0, 0, 0.5);
`;
const PostContent = styled.div``;

function Post({ post }) {
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostData>{new Date(post.createdAt).toLocaleString()}</PostData>
      <PostContent>{post.body}</PostContent>
    </PostContainer>
  );
}

export default function PostPage() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPost(id).then((post) => setPost(post));
  }, [id]);

  return (
    <HomeWrapper>
      <Post post={post} />
    </HomeWrapper>
  );
}
