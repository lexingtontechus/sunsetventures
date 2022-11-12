import Image from "next/image";
import Link from "next/link";
import Container from "./container";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-trueGray-700 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-trueGray-100">
              WEB3 & Sustainable Ecosystems
            </h1>
            <div className="pt-8 text-xl leading-normal text-trueGray-700 lg:text-xl xl:text-2xl dark:text-trueGray-100">
              Transitioning to a world of new protocols, digital ownership and
              systems powering new technologies.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="visible lg:block">
            <Image
              src="https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/hero.png"
              width="400"
              height="400"
              alt="0xhero"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl text-center text-trueGray-700 dark:text-trueGray-100">
            Building diverse companies in Southern California.
          </h2>
        </div>
      </Container>
    </>
  );
}
