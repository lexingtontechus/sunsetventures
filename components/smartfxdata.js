import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faBullseye,
  faBookAtlas,
} from "@fortawesome/free-solid-svg-icons";

import smartfxOneImg from "../public/img/smartfxone.jpg";
import smartfxTwoImg from "../public/img/smartfxtwo.jpg";

const smartfxOne = {
  title: "Forex & Currency ETF",
  desc: "Currency ETF & Forex trading using AI & Machine Learning to power sustainable investment portfolios across a wide range of technologies & industries.",
  image: smartfxOneImg,
  bullets: [
    {
      title: "Our Technology",
      desc: "Quant-driven Forex investment platform.",
      icon: <FontAwesomeIcon icon={faMicrochip} />, //<EmojiHappyIcon />
    },
    {
      title: "Our Methodology",
      desc: "Predicting specific market conditions to produce exceptional returns to investors. Curated currency baskets & dynamic pairing selections.",
      icon: <FontAwesomeIcon icon={faBookAtlas} />, //<ChartSquareBarIcon />
    },
    {
      title: "Our Objectives",
      desc: "Superior investment returns by means of acquiring value-add income assets & properties.",
      icon: <FontAwesomeIcon icon={faBullseye} />, //<CursorClickIcon />
    },
  ],
};

const smartfxTwo = {
  title: "Crypto ETF",
  desc: "Digital assets management, investment & trading - cryptocurrencies & NFTs.",
  image: smartfxTwoImg,
  bullets: [
    {
      title: "Our Technology",
      desc: "Led by experienced brokers, traders & data scientists",
      icon: <FontAwesomeIcon icon={faMicrochip} />, //<DeviceMobileIcon />
    },
    {
      title: "Our Methodology",
      desc: "Dynamic AI & ML driven algorithms",
      icon: <FontAwesomeIcon icon={faBookAtlas} />, //<AdjustmentsIcon />
    },
    {
      title: "Our Objectives",
      desc: "Optimized leverage, risk & liquidity.",
      icon: <FontAwesomeIcon icon={faBullseye} />, //<SunIcon />
    },
  ],
};

export { smartfxOne, smartfxTwo };
