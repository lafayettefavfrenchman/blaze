import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons
import DesktopImage from "../assets/desktop.jpg"; // Replace with the actual desktop image path
import MobileImage from "../assets/mobile.jpg"; // Replace with the actual mobile image path

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align to the right */
  background-image: url(${DesktopImage});
  background-size: cover;
  background-position: center;
  height: 350px;
  width: 100%;
  max-width: 1200px; /* Max width set to 1200px */
  margin: 0 auto; /* Center the container */

  @media (max-width: 768px) {
    background-image: url(${MobileImage});
    height: 600px;
    justify-content: center; /* Center content for mobile */
  }
`;

const HeroContent = styled.div`
  position: absolute;
  left: 40px; /* Position the content slightly to the left */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  max-width: 35%; /* Restrict content width to 40% of the container */
  padding: 40px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: left;
    width: 100%;
    max-width: none; /* Remove width restriction for mobile */
    top: 20px; /* Move content to the top for mobile */
    left: 50%; /* Center the content horizontally on mobile */
    transform: translateX(-50%); /* Adjust for centering */
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
  gap: 8px; /* Space between text and icon */
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
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          <b>Grants</b> are available to teams using our tech in interesting
          ways.
        </HeroTitle>
        <HeroButton>
          <FaStar /> {/* Star icon */}
          Learn more
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default ResponsiveHero;
