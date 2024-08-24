import React, { useState } from "react";
import styled from "styled-components";
import { images } from "../carouselData";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.p`
  font-family: "Monument Grotesk", sans-serif;
  font-size: 45px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 90px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 1200px; /* Max width set to 1200px */
`;

const CarouselTrack = styled.div<{ currentSlide: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100 / 6}%)`};
  width: ${({ children }) => `${(React.Children.count(children) * 100) / 6}%`}; /* Adjusted width for the track */
`;

const CarouselItem = styled.div`
  min-width: calc(100% / 6); /* 6 images per view */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 75%; /* Ensure the image takes up the maximum width available within the container */
    height: auto; /* Maintain the natural aspect ratio of the image */
    max-height: 80px;

    @media (max-width: 768px) {
      max-height: 50px;
    }
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.span<{ active: boolean }>`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? "#E62058" : "#ccc")};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
  cursor: pointer;
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
    padding: 5px 20px;
    font-size: 10px;

`;

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerPage = 6;
  const totalItems = images.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const getTransformValue = () => {
    if (currentSlide === totalPages - 1 && totalItems % itemsPerPage !== 0) {
      const lastPageOffset = (totalItems % itemsPerPage) * 100 / itemsPerPage;
      return `translateX(-${(currentSlide * 100) - lastPageOffset}%)`;
    }
    return `translateX(-${currentSlide * 100}%)`;
  };

  return (
    <CarouselContainer>
      <Title>Who's in the Flare ecosystem?</Title>
      <CarouselWrapper>
        <CarouselTrack currentSlide={currentSlide} style={{ transform: getTransformValue() }}>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img src={image} alt={`Carousel item ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselWrapper>
      <DotsWrapper>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsWrapper>
      <CarouselButton onClick={nextSlide}>Start Building</CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
