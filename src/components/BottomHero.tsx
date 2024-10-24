import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { newsPosts } from "./News/newsData"; // Import the news posts data
import DesktopImage from "../assets/desktop.jpg"; // Replace with the actual desktop image path
import MobileImage from "../assets/mobile.jpg"; // Replace with the actual mobile image path

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: url(${DesktopImage});
  background-size: cover;
  background-position: center;
  height: 350px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    background-image: url(${MobileImage});
    height: 600px;
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  max-width: 35%;
  padding: 40px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: left;
    width: 100%;
    max-width: none;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const HeroTitle = styled.p`
  font-family: "Monument Grotesk", sans-serif;
  font-size: 30px;
  margin: 0 0 30px 0;
  line-height: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const HeroButton = styled.button`
  display: flex;
  align-items: left;
  gap: 8px;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 35px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const ResponsiveHero: React.FC = () => {
  const navigate = useNavigate();

  // Function to handle redirection to a random news post
  const handleLearnMore = () => {
    const randomIndex = Math.floor(Math.random() * newsPosts.length);
    const randomNewsPost = newsPosts[randomIndex];
    navigate(`/news/${randomNewsPost.id}`); // Redirect to the random news post
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          <b>Grants</b> are available to teams using our tech in interesting
          ways.
        </HeroTitle>
        <HeroButton onClick={handleLearnMore}>
          <FaStar /> Learn more
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default ResponsiveHero;
