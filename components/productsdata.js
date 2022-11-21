import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon
} from "@heroicons/react/outline";

import productOneImg from "../public/img/smartfxone.jpg";
import productTwoImg from "../public/img/smartfxtwo.jpg";

const productOne = {
  title: "Product 1",
  desc:
    "You can use this space to highlight your first product or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: productOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next product point.",
      icon: <ChartSquareBarIcon />
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />
    }
  ]
};

const productTwo = {
  title: "Product 2",
  desc:
    "You can use this same layout with a flip image to highlight your rest of the products of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: productTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />
    }
  ]
};

export { productOne, productTwo };