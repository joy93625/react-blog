import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { getPosts } from "../../WebAPI";
import { Link } from "react-router-dom";

const HomeWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
`;
const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 16px;
`;
const PostTitle = styled(Link)`
  font-size: 24px;
  cursor: pointer;
  color: #333;
  text-decoration: none;
`;
const PostData = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageButton = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  width: 36px;
  height: 36px;
  border: solid 1px #3333332b;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  ${(props) =>
    props.$prev &&
    `
      border-radius: 0px;
      border: none;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: #333;
        border-bottom: 1px solid #333;
      }
    `}
`;
function Post({ post }) {
  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>
      <PostData>{new Date(post.createdAt).toLocaleString()}</PostData>
    </PostContainer>
  );
}

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getPosts(page).then((posts) => setPosts(posts));
  }, [page]);

  return (
    <HomeWrapper>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Pagination>
        {page !== 1 && (
          <PageButton $prev onClick={handlePrevClick}>
            ＜
          </PageButton>
        )}
        <PageButton>{page}</PageButton>
        {posts.length === 5 && (
          <PageButton $prev onClick={handleNextClick}>
            ＞
          </PageButton>
        )}
      </Pagination>
    </HomeWrapper>
  );
}
