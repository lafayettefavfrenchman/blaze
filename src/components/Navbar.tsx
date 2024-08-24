import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Img from "../assets/Logo.svg";
import SearchImg from "../assets/search.svg";
import { Sling as Hamburger } from 'hamburger-react';

interface MobileMenuProps {
  open: boolean;
}

const NavbarContainer = styled.nav<{ isScrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 130px;
  font-family: "Monument Grotesk", sans-serif;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ isScrolled }) => (isScrolled ? "#fff" : "transparent")};
  //box-shadow: ${({ isScrolled }) => (isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none")};
  transition: background-color 0.3s, box-shadow 0.3s;

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
  align-items: center;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
  }

  li {
    padding: 10px 0;
    font-size: 18px;
    color: #000;

    &:hover {
      color: #e62058;
    }
  }

  button {
    margin-top: 20px;
  }
`;

const Search = styled.div`
  img {
    width: 30px;
    padding-top: 20px;
    @media (max-width: 768px) {
      width: 18px;
    }
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <NavbarContainer isScrolled={isScrolled}>
      <Logo>
        <img src={Img} alt="Logo" />
      </Logo>
      <NavLinks>
        <li>Learn</li>
        <li>Build</li>
        <li>Use</li>
        <li>Operate</li>
        <li>Connect</li>
        <li>News</li>
      </NavLinks>
      <RightSide>
        <Search>
          <img src={SearchImg} alt="Search" />
        </Search>
        <DocumentationButton>Documentation ↗</DocumentationButton>
      </RightSide>
      <HamburgerIcon>
        <Hamburger toggled={isOpen} toggle={setOpen} size={30} color="#E62058" />
      </HamburgerIcon>
      <MobileMenu open={isOpen}>
        <li>Learn</li>
        <li>Build</li>
        <li>Use</li>
        <li>Operate</li>
        <li>Connect</li>
        <li>News</li>
        <Search>
          <img src={SearchImg} alt="Search" />
        </Search>
        <DocumentationButton>Documentation ↗</DocumentationButton>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
