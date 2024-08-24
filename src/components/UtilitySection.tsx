import React, { useRef, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import Util1 from "../assets/Bridgingutil.svg";
import Util2 from "../assets/stateutil.svg";
import Util3 from "../assets/web2util.svg";
import Util4 from "../assets/datautil.svg";
import Util5 from "../assets/scalableutil.svg";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const UtilitySectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;

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
  margin-top: 70px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 22px;
  max-width: 1250px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div<{ $isVisible: boolean; $delay: number }>`
  flex: 1;
  max-width: 240px;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #e5e4e2;
  opacity: 0;
  transform: translateY(20px);
  ${({ $isVisible, $delay }) =>
    $isVisible &&
    css`
      animation: ${fadeInUp} 0.6s ease-in-out forwards ${$delay * 0.2}s;
    `}

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
  }

  img {
    max-width: 90px;
    margin-top: 20px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }
`;

const CardTitle = styled.p`
  font-size: 22px;
  color: black;
  margin-bottom: 10px;
  line-height: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: grey;
  line-height: 20px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CarouselButton = styled.button`
  margin-top: 20px;
  background-color: #e62058;
  border: none;
  padding: 5px 40px;
  color: #fff;
  font-family: "Monument Grotesk", sans-serif;
  font-size: 15px;
  cursor: pointer;
  border-radius: 50px;

  &:hover {
    background-color: #c5174c;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 22px;
  margin-top: 30px;
`;

const UtilitySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean[]>([false, false, false, false, false]);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <UtilitySectionContainer>
      <Title>Expanding the utility of blockchain</Title>
      <CardsContainer>
        {[Util1, Util2, Util3, Util4, Util5].map((image, index) => (
          <Card
            key={index}
            ref={(el) => (cardRefs.current[index] = el!)}
            $isVisible={isVisible[index]}
            $delay={index}
          >
            <img src={image} alt="Utility" />
            <CardTitle>{["Decentralized Bridging", "State Acquisition", "Web2 Connectivity", "Enshrined Oracles", "Data Access For Free"][index]}</CardTitle>
            <CardDescription>
              {[
                "Trustlessly access value and users from other chains.",
                "Build dapps and protocols that utilize state from any connected chain.",
                "Trustlessly trigger smart contracts with data from web2 APIs.",
                "Access all the data you need, knowing Flare's oracles are secured at the network layer.",
                "Build on Flare with a broad range of data feeds available on-chain for free."
              ][index]}
            </CardDescription>
          </Card>
        ))}
      </CardsContainer>
      <ButtonContainer>
        <CarouselButton>Start Building</CarouselButton>
        <CarouselButton>Start Building</CarouselButton>
        <CarouselButton>Start Building</CarouselButton>
      </ButtonContainer>
    </UtilitySectionContainer>
  );
};

export default UtilitySection;
