import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { newsPosts } from "./newsData"; // Importing the news data

const NewsSectionContainer = styled.section<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  @media (max-width: 1024px) {
    padding: 40px 15px;
  }

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const Title = styled.p`
  font-family: "Monument Grotesk", sans-serif;
  font-size: 45px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const NewsCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1350px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NewsCard = styled.div`
  flex: 1;
  max-width: 660px;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 20px;
  gap: 20px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    color: black;
    margin: 0;
    text-align: left;
  }

  /* Only apply hover effect to the Link */
  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NewsLabel = styled.div`
  background-color: #f7ecef;
  color: #e62058;
  font-size: 10px;
  border-radius: 15px;
  padding: 2px 5px;
  margin: 0px 18rem 20px 0px;
  transition: background-color 0.3s ease;
  white-space: nowrap; /* Prevent wrapping */
  text-overflow: ellipsis; /* Add ellipsis if content is too long */
  overflow: hidden; /* Hide overflow */

  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 768px) {
    margin: 0px 17rem 20px 0px;
    font-size: 8px; /* Reduce font size on small screens */
  }
`;


const NewsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NewsSectionContainer ref={sectionRef} $isVisible={isVisible}>
      <Title>Latest Flare News</Title>
      <NewsCardsContainer>
        {newsPosts.map((post) => (
          <NewsCard key={post.id}>
            <Link to={`/news/${post.id}`}>
              <img src={post.image} alt={post.title} />
              <p>{post.title}</p>
              <NewsLabel>{post.tags}</NewsLabel>
            </Link>
          </NewsCard>
        ))}
      </NewsCardsContainer>
    </NewsSectionContainer>
  );
};

export default NewsSection;
