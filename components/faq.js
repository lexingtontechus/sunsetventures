import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-trueZinc-700 rounded-lg bg-trueZinc-50 hover:bg-trueZinc-100 focus:outline-none focus-visible:ring focus-visible:ring-truePurple-100 focus-visible:ring-opacity-75 dark:bg-trueZinc-800 dark:text-trueZinc-100">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-trueZinc-900 dark:text-trueZinc-50`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-trueZinc-700 dark:text-trueZinc-100">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What products & services does Sunset Ventures offer?",
    answer:
      "We have several retail products and commercially licensed trading strategies & algorithms to grow your own trading portfolio. We build custom algorithms and AI/ML engines per your specifications.",
  },
   {
    question: "What commercial services does Sunset Ventures offer?",
    answer:
      "We offer a white label service for our prioprietary or custom developed products.",
  },
  {
    question: "Is Sunset Ventures hiring?",
    answer:
      "We have openings for data scientists and experienced traders. Book a meeting to discuss new possibilities.",
  },
  {
    question: "Who is Sunset Ventures?",
    answer:
      "We are a team of investors who have build a trading platform using our prioprietary AI driven algorithms.",
  },
];
