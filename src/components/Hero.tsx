import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Interface for the GradientText component props
interface GradientTextProps {
  text: string;
  gradient: string;
  animationDuration?: string;
}

// Interface for the Button component props
interface ButtonProps {
  primary?: boolean;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Keyframes for gradient animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Interface for the GradientTextWrapper props
interface GradientTextWrapperProps {
  gradient: string;
  animationDuration?: string;
}

// Styled component for the gradient text
const GradientTextWrapper = styled.span<GradientTextWrapperProps>`
  background: ${(props) => props.gradient};
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${gradientAnimation} ${(props) => props.animationDuration || "10s"}
    ease infinite;
  display: inline-block;
`;

// GradientText component definition
const GradientText: React.FC<GradientTextProps> = ({
  text,
  gradient,
  animationDuration = "10s",
}) => {
  return (
    <GradientTextWrapper
      gradient={gradient}
      animationDuration={animationDuration}
    >
      {text}
    </GradientTextWrapper>
  );
};

// Styled component for the body wrapper
const BodyWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 100px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 0.5s;

  @media (max-width: 768px) {
    padding: 50px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin-top: 20px;
  }
`;

const Heading = styled.h1`
  font-size: 7.5rem;
  font-weight: 600;
  letter-spacing: -5px;
  margin: 0;
  line-height: 1.2;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 0.7s;

  @media (max-width: 1024px) {
    font-size: 6rem;
    letter-spacing: -4px;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    letter-spacing: -3px;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    letter-spacing: -2px;
  }
`;

const Subheading = styled.p`
  font-size: 2.45rem;
  margin-top: 20px;
  letter-spacing: -0.3px;
  color: #555;
  padding: 0 150px;
  line-height: 40px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 0.9s;

  @media (max-width: 1024px) {
    padding: 0 100px;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0 20px;
    line-height: 30px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: -2px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 1.1s;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

// Styled component for the button
const Button = styled.button<ButtonProps>`
  padding: 15px 40px;
  margin: 0 10px;
  border: 1px solid ${(props) => (props.primary ? "#E62058" : "#000")};
  border-radius: 60px;
  background-color: ${(props) => (props.primary ? "#E62058" : "#FFF")};
  color: ${(props) => (props.primary ? "#FFF" : "#000")};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "#E62058" : "#000")};
    color: ${(props) => (props.primary ? "#FFF" : "#fff")};
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 10 50px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 5px 25px;
    line-height: 30px;
  }
`;

// Hero component definition
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <BodyWrapper style={{ opacity: isVisible ? 1 : 0 }}>
      <Heading>
        <GradientText
          text="Connect Everything."
          //gradient="linear-gradient(to right, #ff6900, #fcb900, #7bdcb5, #00d084, #0693e3, #9b51e0)"
          //gradient= "linear-gradient(to right, #E62058, #F7A9B9, #D1B9F2, #B4E3F1, #A9F5F2, #D1E3F2, #F7B9D1)"
          gradient="linear-gradient(to right, #E62058, #F7A9B9, #D1B9F2, #D2B7B4, #BDA9A7, #D1E3F2, #F7B9D1)"
          animationDuration="15s"
        />
      </Heading>
      <Subheading>
        <GradientText
          text="Flare is the blockchain for data, providing developers with secure decentralized access to high-integrity data from other chains and the internet."
          gradient="linear-gradient(to right, #E62058, #F7A9B9, #D1B9F2, #D2B7B4, #BDA9A7, #D1E3F2, #F7B9D1)"
          animationDuration="15s"
        />
      </Subheading>
      <ButtonWrapper>
        <Button>Select Wallet</Button>
        <Button primary>Connect Wallet</Button>
      </ButtonWrapper>
    </BodyWrapper>
  );
};

export default Hero;
