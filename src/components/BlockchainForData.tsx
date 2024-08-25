import React from "react";
import styled from "styled-components";
import EyeImg from "../assets/eyeimg.svg";
import CircleImg from "../assets/circleimg.svg";

const Container = styled.div`
  font-family: "Monument Grotesk", sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 46px;
  margin: 0 0 10px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 25px;
  color: #888;
  margin: 0 0 25px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Card = styled.div`
  background-color: #242425;
  color: white;
  border-radius: 25px;
  width: 420px;
  height: 430px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: 430px;
  }
`;

const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  font-size: 40px;
`;

const CardTextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: -70px;

`;

const CardTitle = styled.p`
  font-size: 24px;
  margin: 0;
`;

const CardSubtitle = styled.p`
  font-size: 22px;
  color: #888;
  margin: -12px 0 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #888;
  margin: 15px 0 0;
  line-height: 20px;

  @media (max-width: 768px) {
    line-height: 18px;
    padding: 0 20px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  padding: 20px 0 0;
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  font-size: 16px;
  border: 1px solid white;
  padding: 10px 25px;
  border-radius: 40px;
  cursor: pointer;
  width: 100%;

  &:hover {
    color: #e62058;
    border: 1px solid #e62058;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

const BlockchainForData = () => {
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
              <img width="140px" src={EyeImg} alt="FTSO" />
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
            <Button>Learn More</Button>
          </ButtonContainer>
        </Card>
        <Card>
          <CardImageContainer>
            <Icon>
              <img width="140px" src={CircleImg} alt="Data Connector" />
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