import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpg";
// import Img9 from "../assets/img9.jpg";
// import Img10 from "../assets/img10.jpg";
import { socialIconsData, SocialIconData } from "../socialIconsdata";

const GalleryContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const GalleryTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  gap: 20px;
`;

const GalleryItem = styled.div`
  flex: 0 0 auto;
  overflow: hidden;
`;

const FullWidthImage = styled.img`
  width: 600px;
  height: 450px;
  object-fit: cover;
  border-radius: 15px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 600px;
`;

const GridImage = styled.img<{ height?: string }>`
  width: 100%;
  height: ${props => props.height || "215px"};
  object-fit: cover;
  border-radius: 15px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 45px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #333;
  padding: 20px;
  border-radius: 15px;
`;

const Icon = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 10px;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const FlareGallery: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isPaused && trackRef.current) {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition - 1;
          const trackWidth = trackRef.current?.scrollWidth ?? 0;
          const containerWidth = trackRef.current?.clientWidth ?? 0;
          return newPosition <= -trackWidth + containerWidth ? 0 : newPosition;
        });
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const renderGalleryItems = () => [
    <GalleryItem key="1">
      <FullWidthImage src={Img1} alt="Hackathon" />
    </GalleryItem>,
    <GalleryItem key="2">
      <FullWidthImage src={Img2} alt="Presentation" />
    </GalleryItem>,
    <GalleryItem key="3">
      <GridContainer>
        <GridImage src={Img3} alt="Group Photo" />
        <GridImage src={Img4} alt="Event" />
        <SocialIcons>
      {socialIconsData.map((icon: SocialIconData) => (
        <Icon key={icon.name} href={icon.link} target="_blank" rel="noopener noreferrer">
          <IconImage src={icon.src} alt={icon.name} />
        </Icon>
      ))}
    </SocialIcons>
        <GridImage src={Img5} alt="Networking" />
      </GridContainer>
    </GalleryItem>,
    <GalleryItem key="4">
      <GridContainer>
        <GridImage src={Img6} alt="Workshop" height="450px" />
        <GridImage src={Img7} alt="Panel Discussion" height="450px" />
      </GridContainer>
    </GalleryItem>,
  ];

  return (
    <>
      <Title>Join the Flare community</Title>
      <GalleryContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <GalleryTrack
          ref={trackRef}
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {renderGalleryItems()}
          {renderGalleryItems()} {/* Duplicate items for seamless looping */}
        </GalleryTrack>
      </GalleryContainer>
    </>
  );
};

export default FlareGallery;