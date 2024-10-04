import Image1 from '..//..//assets/FTSO.png';
import Image2 from '..//..//assets/fassets.png';
import Image3 from '..//..//assets/ftsoracle.png';

export const newsPosts = [
  {
    id: 1,
    title: "FTSOv2: More data, delivered faster",
    image: Image1,
    author: "Jun Chung",
    date: "September 16 2024",
    tags: ["FLARE UPDATES"],
    content: `
      <h2>FTSOv2: A New Era in Decentralized Data</h2>
      <p>The Flare Time Series Oracle (FTSO) is an enshrined oracle that provides decentralized data to Flare. Since its debut two years ago, FTSOv1 has earned the reputation for offering consistent pricing information with zero downtime. FTSOv2 builds on the robust foundation laid by its predecessor, and sets a new benchmark for decentralized data.</p>
      
      <h3>What’s in FTSOv2?</h3>
      <h4>Secure</h4>
      <p>FTSOv2 is enshrined into Flare’s core protocol, meaning it benefits from the full economic security of the entire network. It’s as secure as the blockchain itself.</p>

      <h4>Fast</h4>
      <p>FTSOv2 updates with each new block on Flare, roughly every 1.8 seconds. This makes it the ideal oracle for DeFi – supporting use cases including lending and borrowing, perpetual and options trading, cross-chain order books, and many more.</p>

      <h4>Scalable</h4>
      <p>FTSOv2 supports up to 1000 feeds across various asset classes including equities, commodities, and cryptocurrencies, with access to 2 weeks of historical data.</p>

      <h4>Decentralized</h4>
      <p>Each feed is supported by around 100 independent data providers, chosen by users who delegate their stake to them. This decentralization ensures the system stays honest, with strict penalties for misbehavior.</p>

      <h4>Cost-Effective</h4>
      <p>Querying most block-latency feeds from FTSOv2 is free on Flare!</p>

      <!-- Continue content as necessary -->
    `,
  },
  {
    id: 2,
    title: "FAssets Open Beta Relaunches with New Features",
    image: Image2,
    author: "Jun Chung",
    date: "August 28 2024",
    tags: ["FLARE UPDATES"],
    content: `
      <h2>FAssets Open Beta Relaunches with New Features</h2>
      <p>Following a successful reset, the FAssets Open Beta is back with exciting new features for participants.</p>
      
      <h3>What is FAssets?</h3>
      <p>Developed by Flare Labs, FAssets brings verifiable economic security to BTC, XRP, and DOGE, enabling decentralized finance for these non-smart contract tokens on Flare. FAssets allows users to mint ERC-20 versions of these tokens in a trustless manner, unlocking their DeFi potential within dApps on Flare and other chains.</p>

      <h3>Open Beta Phases</h3>
      <h4>Phase 1 (Closed Beta)</h4>
      <p>Focused on establishing the core infrastructure, this phase was dedicated to agents and technical operators.</p>

      <h4>Phase 2 (Public Beta)</h4>
      <p>Launched on June 4th, this phase allowed users to mint and redeem FTestXRP through a demo dApp.</p>

      <h4>Beta Results</h4>
      <p>The Open Beta successfully facilitated the bridging of 34.6 million TestXRP to Flare for its 32,400 participants. Due to a recent Ripple XRP Testnet reset, Flare paused and reset the FAssets Open Beta. A total of 31 million new testXRP tokens were airdropped to enable participants to resume interacting with the relaunched Open Beta.</p>

      <h3>Key Features</h3>
      <h4>How to Become a Liquidity Provider</h4>
      <p>Users can provide liquidity by adding to CFLR agents’ collateral pools, earning rewards. Here’s how:</p>
      <ul>
        <li><strong>Choose a Pool:</strong> Select a pool and click ‘Deposit.’</li>
        <li><strong>Withdraw Anytime:</strong> Liquidity is always accessible, and users can withdraw assets at any time with a 60-second cooldown after deposit.</li>
        <li><strong>Earn Rewards:</strong> Rewards are based on fees earned by agents and your pool share.</li>
      </ul>

      <h4>How to Mint and Redeem FAssets</h4>
      <p>The minting and redeeming process allows users to choose their preferred agents. Agents' vault addresses, associated fees, and available lots are displayed on the dashboard. For example, an agent fee of 0.25% means minting 20 FTestXRP will incur a 0.05 FTestXRP fee.</p>

      <!-- Continue content as necessary -->
    `,
  },
  {
    id: 3,
    title: "Enshrined Oracles: Understanding the Flare Time Series Oracle",
    image: Image3,
    author: "Jun Chung",
    date: "September 09 2024",
    tags: ["FLARE UPDATES"],
    content: `
      <p>The concept of enshrined oracles isn’t new. It has been an ongoing topic of research and experimentation in the blockchain space, with many developers and researchers recognizing both the potential benefits and inherent challenges of enshrined oracles.</p>

      <h3>What are Enshrined Oracles?</h3>
      <p>In the blockchain ecosystem, “enshrined” refers to integrating specific functionalities directly into the foundational layer (Layer 1) of the blockchain itself. Unlike external or add-on services, enshrined features become an intrinsic part of the blockchain’s core operations, offering built-in security, reliability, and decentralization.</p>
    
      <h3>Enshrined Oracles in Ethereum</h3>
      <p>Ethereum, the leading smart contract platform, has been considering enshrined oracles for several years, with discussions surfacing as early as 2020. The vision is to provide decentralized applications (dApps) with native price feeds directly within the Ethereum protocol. These enshrined oracles offer notable benefits, such as significantly stronger immutability guarantees compared to external oracles.</p>
    
      <p>However, the proposal sparked concerns about the potential impact on protocol neutrality. <a href="https://vitalik.ca" target="_blank" rel="noopener noreferrer">Vitalik Buterin</a>, co-founder of Ethereum, was initially skeptical about enshrined oracles, fearing they might violate Ethereum’s “credibly neutral” position. But over time, he shifted his perspective, now supporting their inclusion as a way to enhance the network’s efficiency and security.</p>
    
      <h3>Why this matters: Performance is not the only problem</h3>
      <p>The development of oracles has shaped the broader blockchain landscape, highlighting the critical role oracles play as bridges between off-chain data and on-chain applications. While improving traditional performance metrics such as speed, cost, and accuracy is important, the real challenge lies in designing oracles that are decentralized, permissionless, and trustworthy.</p>
    
      <p>Unfortunately, this aspect of oracle design hasn’t received enough attention, yet it is key to creating a secure, decentralized data layer for blockchain ecosystems.</p>
    
      <h3>The Problems with Third-Party Oracles</h3>
      <p>Current third-party oracle services rely on off-chain networks of nodes to provide data. For example, an oracle network might utilize 10 independent data providers, but only a subset of these nodes might contribute to any given price feed, as illustrated below. This inconsistency can undermine data reliability and decentralization.</p>
    
      <p>Research shows that in some cases, as few as five data providers are used for some price feeds – creating an extremely low threshold for collusion.</p>
    
      <p>Given that billions of dollars in decentralized finance (DeFi) rely on such oracles, this creates potential points of failure and manipulation that exist outside the blockchain’s direct control.</p>
    
      <p>Additionally, developers also face significant obstacles with third-party oracles:</p>
    
      <ul>
        <li><strong>Security Concerns</strong>: The design of third-party oracles requires developers to vet the reliability and security of each and every oracle feed before launching their product, adding complexity to the development process. Additionally, the security of each feed can vary in time, adding even more complexity.</li>
        <li><strong>Cost</strong>: Many premium oracle services are expensive, with annual costs running into the millions, adding significant financial strain to blockchain projects.</li>
      </ul>
    
      <h3>Flare’s Solution</h3>
      <p>To address these challenges, Flare has developed two enshrined oracles to address the limitations of traditional systems:</p>
    
      <ul>
        <li><strong>Flare Time Series Oracle (FTSO)</strong>: This oracle provides up to 1,000 price feeds, updating with each block (approximately every 1.8 seconds).</li>
        <li><strong>Flare Data Connector (FDC)</strong>: It delivers verifiable, secure data from both connected blockchains and Web2 APIs.</li>
      </ul>
    
      <p>These oracles are enshrined into Flare, ensuring stronger security and performance:</p>
    
      <h3>Key Benefits of Flare’s Enshrined Oracles</h3>
      <p>Flare’s enshrined oracle system offers several distinct advantages over third-party oracles:</p>
    
      <ul>
        <li><strong>Security</strong>: The oracle system shares the same security model as the blockchain, ensuring a decentralized and manipulation-resistant data layer. This reduces external risks and strengthens the overall trust in the data feeds.</li>
        <li><strong>Speed</strong>: Enshrined oracles operate at the same speed as the blockchain, with updates occurring every 1.8 seconds. This near-instantaneous data is essential for time-sensitive DeFi applications and cross-chain interactions.</li>
        <li><strong>Free Data Access</strong>: Traditional oracles often charge for data feeds, but Flare’s enshrined oracles provide data for free. The network benefits from the increased usage of data by dApps, generating transaction fees that support network operations.</li>
        <li><strong>Design Flexibility</strong>: Enshrining the oracle directly into the blockchain unlocks design flexibility. Flare can optimize the chain for more efficient data handling and cost minimization.</li>
      </ul>
    
      <h3>The Future: Flare’s Continued Innovation</h3>
      <p>Flare isn’t stopping with its current enshrined oracle offerings. The upcoming FTSOv2 will further improve the system by enhancing both the speed and capacity of data delivery. This update will allow developers to access more data, faster, and with greater flexibility than ever before.</p>
    `,
  },
];
