import React from 'react';
import Lottie from "react-lottie";
import animationData from "../assets/square (1).json"; // Update with your Lottie animation path

interface SquareProgressProps {
  size: number | string;
}

const SquareProgress: React.FC<SquareProgressProps> = ({ size }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={size}
      width={size}
    />
  );
};

export default SquareProgress;