import React, { useState, useEffect } from "react";
import Img from "../assets/Logo.svg";
import SearchImg from "../assets/search.svg";
import { Sling as Hamburger } from 'hamburger-react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import styled, { keyframes } from "styled-components";

interface MobileMenuProps {
  open: boolean;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const NavbarContainer = styled.nav<{ isScrolled: boolean; isVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 130px;
  font-family: "Monument Grotesk", sans-serif;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ isScrolled }) => (isScrolled ? "#fff" : "transparent")};
  transition: background-color 0.3s, box-shadow 0.3s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => isVisible && fadeIn} 0.5s ease-out;

  @media (max-width: 1024px) {
    padding: 2px 80px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  width: 7rem;
  padding: 10px;
  padding-top: 20px;

  @media (max-width: 768px) {
    width: 7rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  cursor: pointer;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  li {
    font-size: 16px;
    color: #000;

    &:hover {
      color: #e62058;
    }
  }
`;

const RightSide = styled.ul`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DocumentationButton = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  font-size: 13px;
  padding: 6px 30px;
  font-family: "Monument Grotesk", sans-serif;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
    color: #e62058;
    border: 1px solid #e62058;
  }

  @media (max-width: 768px) {
    padding: 2px 20px;
    font-size: 14px;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2.3rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<MobileMenuProps>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 10px;
  z-index: 1000;
  animation: ${({ open }) => (open ? fadeIn : "")} 0.5s ease-out;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
  }

  ul {
    margin-left: 30px;
    font-size: 18px;
    color: #000;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
    opacity: 0;
    transform: translateY(-20px);
    animation: ${({ open }) => (open ? fadeIn : "")} 0.4s forwards;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
    &:nth-child(5) {
      animation-delay: 0.5s;
    }
    &:nth-child(6) {
      animation-delay: 0.6s;
    }

    &:hover {
      background-color: #f5f5f5;
      transform: scale(1.05);
      color: #e62058;
    }
  }

  button {
    margin-top: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #e62058;
      color: white;
    }
  }
`;


const Search = styled.div`
  img {
    width: 30px;
    padding-top: 20px;

    @media (max-width: 768px) {
      width: 18px;
      margin-left: 30px;

    }
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled} isVisible={isVisible}>
      <Logo>
        <img src={Img} alt="Logo" />
      </Logo>
      <NavLinks>
        <li><Link to="hero" smooth={true} duration={500}>Learn</Link></li>
        <li><Link to="blockchain-for-data" smooth={true} duration={500}>Build</Link></li>
        <li><Link to="carousel" smooth={true} duration={500}>Use</Link></li>
        <li><Link to="utility-section" smooth={true} duration={500}>Operate</Link></li>
        <li><Link to="gallery" smooth={true} duration={500}>Connect</Link></li>
        <li><Link to="news-section" smooth={true} duration={500}>News</Link></li>
      </NavLinks>
      <RightSide>
        <Search>
          <img src={SearchImg} alt="Search" />
        </Search>
        <DocumentationButton>Connect ↗</DocumentationButton>
      </RightSide>
      <HamburgerIcon>
        <Hamburger toggled={isOpen} toggle={setOpen} size={30} color="#E62058" />
      </HamburgerIcon>
      <MobileMenu open={isOpen}>
        <ul><Link to="hero" smooth={true} duration={500} onClick={() => setOpen(false)}>Learn</Link></ul>
        <ul><Link to="blockchain-for-data" smooth={true} duration={500} onClick={() => setOpen(false)}>Build</Link></ul>
        <ul><Link to="carousel" smooth={true} duration={500} onClick={() => setOpen(false)}>Use</Link></ul>
        <ul><Link to="utility-section" smooth={true} duration={500} onClick={() => setOpen(false)}>Operate</Link></ul>
        <ul><Link to="gallery" smooth={true} duration={500} onClick={() => setOpen(false)}>Connect</Link></ul>
        <ul><Link to="news-section" smooth={true} duration={500} onClick={() => setOpen(false)}>News</Link></ul>
        <Search onClick={() => setOpen(false)}>
          <img src={SearchImg} alt="Search" />
        </Search>
        <DocumentationButton onClick={() => setOpen(false)}>Connect ↗</DocumentationButton>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
