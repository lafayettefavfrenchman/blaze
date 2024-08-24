import React from "react";
import styled from "styled-components";
import EyeImg from "..//assets/eyeimg.svg";
import CircleImg from "..//assets/circleimg.svg";

interface ButtonProps {
  primary?: boolean;
}

const Container = styled.div`
  font-family: "Monument Grotesk", sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 46px;
  margin-bottom: 0px;
  font-family: "Monument Grotesk", sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 25px;
  color: #888;
  margin-top: -20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: -10px;
    margin-bottom: 30px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
    padding: 10px;

  }
  @media (max-width: 450px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Card = styled.div`
  background-color: #242425;
  color: white;
  border-radius: 25px;
  width: 420px;
  height: 427px;
  padding: 27px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

`;

const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 27px;
  margin-bottom: -65px;

  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: -35px;
  }
`;

const Icon = styled.div`
  font-size: 40px;
`;

const CardTextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.p`
  font-size: 26px;
  margin-bottom: -67px;
  margin-top: -67px;

  @media (max-width: 768px) {
    margin-bottom: -40px;
    margin-top: -40px;
  }
  @media (max-width: 450px) {
    margin-top: -100px;
  }
`;

const CardSubtitle = styled.p`
  font-size: 24px;
  color: #888;
  margin-bottom: -15px;

  @media (max-width: 768px) {
    margin-bottom: -10px;
  }
  @media (max-width: 450px) {
    margin-bottom: 20px;
  }
`;

const CardDescription = styled.p`
  font-size: 15px;
  color: #888;
  margin-bottom: -20px;
  line-height: 20px;

  @media (max-width: 768px) {
    margin-bottom: -15px;
    line-height: 18px;
    padding: 0 30px
  }
  @media (max-width: 450px) {
    margin-top: -30px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding: 10px;

`;

const Button = styled.button<ButtonProps>`
  background-color: transparent;
  color: white;
  font-size: 17px;
  border: 1px solid white;
  padding: 12px 27px;
  border-radius: 40px;
  cursor: pointer;
  margin-bottom: -9px;
  margin-top: -29px;
  width: 100%;

  &:hover {
    color: #e62058;
    border: 1px solid #e62058;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

const BlockchainForData: React.FC = () => {
  return (
    <Container>
      <Title>The blockchain for data</Title>
      <Subtitle>
        Flare is an EVM smart contract platform with two enshrined data
        acquisition protocols.
      </Subtitle>
      <CardContainer>
        <Card>
          <CardImageContainer>
            <Icon>
              <img width="140px" src={EyeImg}></img>
            </Icon>
          </CardImageContainer>
          <CardTextContainer>
            <CardTitle>FTSO</CardTitle>
            <CardSubtitle>Decentralized prices</CardSubtitle>
            <CardDescription>
              Offers highly-decentralized price and data feeds to dapps on
              Flare, without relying on centralized providers.
            </CardDescription>
          </CardTextContainer>
          <ButtonContainer>
            <Button primary>Learn More</Button>
          </ButtonContainer>
        </Card>
        <Card>
          <CardImageContainer>
            <Icon>
              <img width="140px" src={CircleImg}></img>
            </Icon>
          </CardImageContainer>
          <CardTextContainer>
            <CardTitle>Data Connector</CardTitle>
            <CardSubtitle>Trustless data proofs</CardSubtitle>
            <CardDescription>
              Enables information from other blockchains and the internet to be
              used securely and trustlessly on Flare.
            </CardDescription>
          </CardTextContainer>
          <ButtonContainer>
            <Button>Learn More</Button>
          </ButtonContainer>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default BlockchainForData;
