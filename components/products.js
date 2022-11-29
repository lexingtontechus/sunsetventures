import Image from "next/image";
import React from "react";
import Container from "./container";

export default function SmartFXs(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={data.image}
              width={500}
              height={500}
              priority="true"
              alt="SmartFX"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-trueZinc-700 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-trueZinc-700 lg:text-xl xl:text-xl dark:text-trueZinc-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <SmartFX key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </SmartFX>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function SmartFX(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-trueZinc-600 dark:bg-trueZinc-400 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-trueZinc-100",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-trueZinc-700 dark:text-trueZinc-100">
            {props.title}
          </h4>
          <p className="mt-1 text-trueZinc-700 dark:text-trueZinc-100">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
