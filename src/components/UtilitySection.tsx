import React, { useRef, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import Util1 from "../assets/Bridgingutil.svg";
import Util2 from "../assets/stateutil.svg";
import Util3 from "../assets/web2util.svg";
import Util4 from "../assets/datautil.svg";
import Util5 from "../assets/scalableutil.svg";
import WalletbaseModal from "./utility/walletbasemodal";
import WalletSelectionModal from "./utility/walletselectionmodal";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const UtilitySectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 40px 15px;
  }

  @media (max-width: 768px) {
    padding: 30px 10px;
    flex-direction: column;
  }
`;

const Title = styled.p`
  font-family: "Monument Grotesk", sans-serif;
  font-size: 45px;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 70px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 22px;
  max-width: 1250px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 18px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div<{ $isVisible: boolean; $delay: number }>`
  flex: 1;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #e5e4e2;
  opacity: 0;
  transform: translateY(20px);
  cursor: pointer;
  ${({ $isVisible, $delay }) =>
    $isVisible &&
    css`
      animation: ${fadeInUp} 0.6s ease-in-out forwards ${$delay * 0.2}s;
    `}
    
    &:hover {
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
    }

  img {
    max-width: 90px;
    margin-top: 20px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 100%;
  }
`;

const CardTitle = styled.p`
  font-size: 22px;
  color: black;
  margin-bottom: 10px;
  line-height: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: grey;
  line-height: 20px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

interface Category {
  title: string;
  description: string;
  icon: string;
}

const UtilitySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean[]>([false, false, false, false, false]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [openWalletbaseModal, setOpenWalletbaseModal] = useState(false);
  const [openWalletSelectionModal, setOpenWalletSelectionModal] = useState(false);
  const [, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCardClick = (category: Category) => {
    setSelectedCategory(category);
    setOpenWalletbaseModal(true);
  };

  const handleCloseWalletbaseModal = () => {
    setOpenWalletbaseModal(false);
  };

  const handleOpenWalletSelectionModal = () => {
    setOpenWalletbaseModal(false);
    setOpenWalletSelectionModal(true);
  };

  const handleCloseWalletSelectionModal = () => {
    setOpenWalletSelectionModal(false);
  };

  const handleSelectWallet = (wallet: any) => {
    console.log(`Selected wallet: ${wallet.name}`);
    setOpenWalletSelectionModal(false);
    // Additional logic for wallet selection can be added here
  };

  const categories: Category[] = [
    { title: "Connect to Dapps", description: "Error resolution for Dapp connections.", icon: Util1 },
    { title: "Validation", description: "Secure validation processes.", icon: Util2 },
    { title: "Claim", description: "Securely Claim your Tokens.", icon: Util3 },
    { title: "Migration", description: "Migration Error Assistance.", icon: Util4 },
    { title: "Swap Error", description: "Seamless error exchanges.", icon: Util5 },
  ];

  return (
    <UtilitySectionContainer>
      <Title>Expanding the utility of blockchain</Title>
      <CardsContainer>
        {categories.map((category, index) => (
          <Card
            key={index}
            ref={(el) => (cardRefs.current[index] = el!)}
            $isVisible={isVisible[index]}
            $delay={index}
            onClick={() => handleCardClick(category)}
          >
            <img src={category.icon} alt={category.title} />
            <CardTitle>{category.title}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </Card>
        ))}
      </CardsContainer>

      <WalletbaseModal
        open={openWalletbaseModal}
        onClose={handleCloseWalletbaseModal}
        onOpenWalletSelection={handleOpenWalletSelectionModal}
      />

      <WalletSelectionModal
        open={openWalletSelectionModal}
        onClose={handleCloseWalletSelectionModal}
        onSelectWallet={handleSelectWallet}
      />
    </UtilitySectionContainer>
  );
};

export default UtilitySection;