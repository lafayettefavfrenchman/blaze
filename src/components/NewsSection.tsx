import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Image3 from "../assets/Minting.jpg";
import Image2 from "../assets/Flare-67.png";
import Image1 from "../assets/defi.png";

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
    padding : 10px 20px 0 0px;
    color: black;
    margin: 0;
    text-align: left; /* Align the text below the image to the left */

    a {
      color: black;
      text-decoration: none;

      &:hover {
        text-decoration: underline; /* Underline on hover */
      }
    }
  }
`;

const NewsLabel = styled.div`
  background-color: #f7ecef; /* Background color */
  color: #e62058;
  font-size: 10px;
  border-radius: 15px; /* Border radius */
  display: inline-block;
  padding: 2px 5px; /* Small padding for some space inside */
  margin: 0px 18rem 20px 0px; /* Margin for spacing */
  text-align: center; /* Align the label to the left */
  transition: background-color 0.3s ease;


  &:hover {
    background-color: black; /* Black background on hover */
    color: white; /* Change text color to white on hover */
  }

  @media (max-width: 768px) {
    font-size: 10px;
  padding: 2px 5px; /* Small padding for some space inside */
  margin: 0px 16rem 20px 0px; /* Margin for spacing */
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
      <Title>Latest Flare news</Title>
      <NewsCardsContainer>
        <NewsCard>
          <img src={Image1} alt="News 1" />
          <p>
            <a href="#">New Flare DeFi Emissions Program Provides Industry Leading Yields</a>
          </p>
          <NewsLabel>FLARE UPDATES</NewsLabel>
        </NewsCard>
        <NewsCard>
          <img src={Image2} alt="News 2" />
          <p>
            <a href="#">Stargate Integrates Flare to Deliver Unified Liquidity From 25 Chains</a>
          </p>
          <NewsLabel>ECOSYSTEM NEWS</NewsLabel>
        </NewsCard>
        <NewsCard>
          <img src={Image3} alt="News 3" />
          <p>
            <a href="#">FAssets open beta update: demo dapp for minting now available</a>
          </p>
          <NewsLabel>FLARE UPDATES</NewsLabel>
        </NewsCard>
      </NewsCardsContainer>
    </NewsSectionContainer>
  );
};

export default NewsSection;
