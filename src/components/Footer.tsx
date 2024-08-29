import React from "react";
import styled, { keyframes } from "styled-components";
import { FaTwitter, FaDiscord, FaTelegram, FaYoutube, FaMedium, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "../assets/footerlogo.svg";

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

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #FF7FAA, #FBD4DA, #E8DCF8, #E9DBD9, #DED4D3, #E8F1F8, #FBD4E8);
  background-size: 700% 700%;
  animation: ${gradientAnimation} 15s ease infinite;
  padding: 90px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0));
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    margin-right: 20px;
        gap: 130px;

  }

  img {
    height: 30px;
    margin-right: 15px;
  }
`;

const TextContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CopyrightText = styled.span`
  color: #fff;
  font-size: 15px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

const LinkText = styled.a`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-right: 0;
    font-size: 13px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 20px;
  }

  svg {
    color: #fff;
    font-size: 30px;
    margin-left: 15px;
    transition: color 0.3s;

    &:hover {
      color: #e62058;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      margin-left: 0;
      margin-right: 15px;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <img src={Logo} alt="Flare Logo" />
        <TextContent>
          <CopyrightText>© Flare Network 2024</CopyrightText>
          <LinkText href="#">Terms & Privacy</LinkText>
          <LinkText href="#">Media & Branding</LinkText>
          <LinkText href="#">Team</LinkText>
        </TextContent>
      </LeftSection>
      <RightSection>
        <FaTwitter />
        <FaDiscord />
        <FaTelegram />
        <FaYoutube />
        <FaMedium />
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;