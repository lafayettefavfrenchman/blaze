import Social1 from "./assets/icons/socials (1).svg";
import Social2 from "./assets/icons/socials (2).svg";
import Social3 from "./assets/icons/socials (3).svg";
import Social4 from "./assets/icons/socials (4).svg";
import Social5 from "./assets/icons/socials (5).svg";
import Social6 from "./assets/icons/socials (6).svg";
import Social7 from "./assets/icons/socials (7).svg";
import Social8 from "./assets/icons/socials (8).svg";

export interface SocialIconData {
  name: string;
  src: string;
  link: string;
}

export const socialIconsData: SocialIconData[] = [
  {
    name: "Twitter",
    src: Social1,
    link: "https://twitter.com/flare"
  },
  {
    name: "Discord",
    src: Social2,
    link: "https://discord.gg/flare"
  },
  {
    name: "Telegram",
    src: Social3,
    link: "https://t.me/flare"
  },
  {
    name: "YouTube",
    src: Social4,
    link: "https://youtube.com/flare"
  },
  {
    name: "Medium",
    src: Social5,
    link: "https://medium.com/flare"
  },
  {
    name: "Instagram",
    src: Social6,
    link: "https://instagram.com/flare"
  },
  {
    name: "LinkedIn",
    src: Social7,
    link: "https://linkedin.com/company/flare"
  },
  {
    name: "GitHub",
    src: Social8,
    link: "https://github.com/flare"
  }
];