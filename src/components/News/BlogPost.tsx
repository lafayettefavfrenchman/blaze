import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { newsPosts } from "./newsData"; // Assuming you're importing blog data from newsData
import newslogo from "..//..//assets/logoo.png";

// Container with background style similar to the "paper"
const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  font-family: "Monument Grotesk", sans-serif;
`;
const Topper = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  padding: 25px;
  border-radius: 18px;
`;
const BackButton = styled.p`
  cursor: pointer;
  color: #333;
  font-size: 16px;
  margin-bottom: 20px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const IconAndMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const BlogTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`;

const Meta = styled.div`
  color: #888;
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

const AuthorDateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Gap between the logo, author, and date */
`;

const Author = styled.span`
  font-weight: bold;
  color: #000;
`;

const BlogContent = styled.div`
  line-height: 1.6;
  font-size: 18px;
  margin-top: 20px;
  padding: 25px;
`;

const StayInTheKnowButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #e80057;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    background-color: #cc004f;
  }
`;

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Ensure id is defined before using it with parseInt
  const postId = id ? parseInt(id, 10) : null;
  const post = newsPosts.find((p) => p.id === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <BlogContainer>
      <Topper>
        <BackButton onClick={() => navigate(-1)}>&larr; Back</BackButton>
        <Header>
          <BlogTitle>{post.title}</BlogTitle>
          <IconAndMeta>
            <Icon src={newslogo} alt="Blog icon" />
            <Meta>
              <AuthorDateWrapper>
                <p>{post.date}</p>
                <p>
                  by <Author>{post.author}</Author>
                </p>
              </AuthorDateWrapper>
            </Meta>
          </IconAndMeta>
        </Header>
      </Topper>
      <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
      <StayInTheKnowButton>Stay in the know</StayInTheKnowButton>
    </BlogContainer>
  );
};

export default BlogPost;
