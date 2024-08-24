import React from "react";
import styled from "styled-components";
// Import your icons and logo here
// For example: 
import Logo from "../assets/Logo.svg";
//import IconX from "../assets/icon-x.png";
//import IconDiscord from "../assets/icon-discord.png";

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, #f7d4e4, #e62058);
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 20px;
    margin-right: 15px;
  }

  span {
    color: #fff;
    font-size: 14px;
    margin-right: 20px;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  a {
    color: #fff;
    margin-right: 20px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
`;

// const RightSection = styled.div`
//   display: flex;
//   align-items: center;

//   img {
//     height: 20px;
//     margin-left: 15px;
//     filter: invert(1); // For white icons, use this CSS filter to invert the color

//     @media (max-width: 768px) {
//       margin: 10px;
//     }
//   }
// `;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <img src={Logo} alt="Flare Logo" />
        <span>© Flare Network 2024</span>
        <a href="#">Terms & Privacy</a>
        <a href="#">Media & Branding</a>
        <a href="#">Team</a>
      </LeftSection>
      {/* <RightSection>
        <img src={IconX} alt="X" />
        <img src={IconDiscord} alt="Discord" />
        <img src={IconTelegram} alt="Telegram" />
        <img src={IconYouTube} alt="YouTube" />
        <img src={IconMedium} alt="Medium" />
        <img src={IconReddit} alt="Reddit" />
        <img src={IconInstagram} alt="Instagram" />
        <img src={IconLinkedIn} alt="LinkedIn" />
        <img src={IconGitHub} alt="GitHub" />
      </RightSection> */}
    </FooterContainer>
  );
};

export default Footer;
