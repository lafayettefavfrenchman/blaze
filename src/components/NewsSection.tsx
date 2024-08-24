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
  font-size: 40px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const NewsCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1250px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
  }
`;

const NewsCard = styled.div`
  flex: 1;
  max-width: 360px;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  p {
    padding: 20px;
    font-size: 16px;
    color: black;
  }

  a {
    color: #e62058;
    text-decoration: none;
    font-weight: bold;
  }
`;

const NewsLabel = styled.div`
  padding: 0 0;
  background-color: lavender;
  color: #e62058;
  font-size: 12px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 20px;
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
            Stargate Integrates Flare to Deliver Unified Liquidity From 25 Chains
          </p>
          <NewsLabel>ECOSYSTEM NEWS</NewsLabel>
        </NewsCard>
        <NewsCard>
          <img src={Image3} alt="News 3" />
          <p>
            FAssets open beta update: demo dapp for minting now available
          </p>
          <NewsLabel>FLARE UPDATES</NewsLabel>
        </NewsCard>
      </NewsCardsContainer>
    </NewsSectionContainer>
  );
};

export default NewsSection;
