import Link from "next/link";
import Image from "next/image";

import SEO from "../components/seo";
import SectionTitle from "../components/sectionTitle";
import PopupWidget from "../components/popupWidget";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faLinkedinIn,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  return (
    <>
      <SEO title="Portfolio | 0xaloysius" description="Portfolio 0xaloysius." />

      <Navbar />
      <SectionTitle pretitle="Mission Statement" title="Mission Statement">
        Support diversified investments in Southern Californian start-ups and
        communities to create sustainable, renewable & secure platforms.
      </SectionTitle>
      <SectionTitle pretitle="Cornerstone Ecosystem" title="Portfolio">
        Collaborate and invest with the SoCal business & tech communities and
        foster employment in our business ventures.
      </SectionTitle>

      <div className="container  items-center p-8 mx-auto w-full place-content-center">
        <section className="">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card1 />
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card2 />
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card3 />
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card4 />
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card5 />
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
                <Card6 />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <PopupWidget />
    </>
  );
}

function Card1() {
  return (
    <div className="px-6">
      <Link
        href="https://lexingtontech.us"
        target="_blank"
        alt="Lexington Tech"
      >
        <Image
          alt="Lexington Tech LLC"
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-lxt.svg"
          className="shadow-lg rounded-full mx-auto max-w-120-px"
          height={150}
          width={150}
          priority="true"
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          President
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          Lexington Tech LLC
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/lexingtontechus"
            target="_blank"
            alt="Lexington Tech | LinkedIn"
          >
            <button
              className="bg-truePurple-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="px-6 fill-trueZinc-700 dark:fill-trueZinc-100">
      <Link href="https://delsolventures.nft" target="_blank" alt="del SOL">
        <Image
          alt="del SOL"
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-dsvi-light.svg"
          className="shadow-lg rounded-half mx-auto max-w-120-px fill-trueZinc-700 dark:fill-trueZinc-100 border-2 border-solid border-trueZinc-1100 p-2"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-8 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          Managing Partner
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 font-semibold">
          del SOL VENTURES INC.
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/delsolventures"
            target="_blank"
            alt="del SOL | LinkedIn"
          >
            <button
              className="bg-truePurple-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="px-6">
      <Link href="https://4mobeers.nft" target="_blank" alt="4 Mo Beers">
        <Image
          alt="4 Mo Beers"
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-4mobeers.svg"
          className="shadow-lg rounded-full mx-auto max-w-120-px"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          Beer Shark
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          4MB Inc.
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/4mobeers"
            target="_blank"
            alt="4 Mo Beers | LinkedIn"
          >
            <button
              className="bg-truePurple-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="px-6">
      <Link href="https://lasplayas.nft" target="_blank" alt="las Playas">
        <Image
          alt="las Playas"
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-lasplayas.svg"
          className="shadow-lg rounded-full mx-auto max-w-120-px"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          Investor
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          Las Playas Inc.
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/lasplayas"
            target="_blank"
            alt="Las PLayas | LinkedIn"
          >
            <button
              className="bg-truePurple-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="px-6">
      <Link
        href="https://sunsetventures.nft"
        target="_blank"
        alt="Sunset Ventures"
      >
        <Image
          alt="Sunset Ventures"
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-sunset.svg"
          className="shadow-lg rounded-full mx-auto max-w-120-px"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          Investor
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          Sunset Ventures Inc.
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/sunsetventuresinc"
            target="_blank"
            alt="Sunset Ventures| LinkedIn"
          >
            <button
              className="bg-truePurple-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="px-6">
      <Link href="https://savivets.org" target="_blank" alt="SAVI">
        <Image
          alt="SAVI"
          src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-savi.svg"
          className="shadow-lg rounded-half mx-auto max-w-120-px"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          Board Member
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          Strategic Alliance Veteran Integration
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/savivets"
            target="_blank"
            alt="SAVI | LinkedIn"
          >
            <button
              className="bg-truePurple-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
