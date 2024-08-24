import React from 'react';
import styled, { keyframes } from 'styled-components';

interface GradientTextProps {
  text: string;
  gradient: string;
  animationDuration?: string;
}

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

// Define the props used for styling separately from the full component props
interface GradientTextWrapperProps {
  gradient: string;
  animationDuration?: string;
}

const GradientTextWrapper = styled.div<GradientTextWrapperProps>`
  background: ${(props) => props.gradient};
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${gradientAnimation} ${(props) => props.animationDuration || '10s'} ease infinite;
`;

const GradientText: React.FC<GradientTextProps> = ({
  text,
  gradient,
  animationDuration = '10s',
}) => {
  return (
    <GradientTextWrapper gradient={gradient} animationDuration={animationDuration}>
      {text}
    </GradientTextWrapper>
  );
};

export default GradientText;