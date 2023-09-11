"use client";
import SectionTitle from "./sectionTitle";
export default function Faq() {
  return (
    <div className="mx-auto my-2 flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl bg-primary-100 p-8 text-primary-700 lg:flex-nowrap lg:px-12 lg:py-12">
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Interested in knowing more about Sunset Ventures?
      </SectionTitle>
      <div className="mx-auto w-full rounded-2xl">
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-neutral text-neutral-content focus:bg-secondary focus:text-neutral-content my-2 rounded-md"
        >
          <div className="collapse-title">
            What products & services does Sunset Ventures offer?
          </div>
          <div className="collapse-content text-xs">
            <p>
              We have several retail products and commercially licensed trading
              strategies & algorithms to grow your own trading portfolio. We
              build custom algorithms and AI/ML engines per your specifications.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow bg-neutral text-neutral-content focus:bg-secondary focus:text-neutral-content my-2 rounded-md"
        >
          <div className="collapse-title">
            What commercial services does Sunset Ventures offer?
          </div>
          <div className="collapse-content text-xs">
            <p>
              We offer a white label service for our prioprietary or custom
              developed products.
            </p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-arrow bg-neutral text-neutral-content focus:bg-secondary focus:text-neutral-content my-2 rounded-md"
        >
          <div className="collapse-title">Is Sunset Ventures hiring?</div>
          <div className="collapse-content text-xs">
            <p>
              We have openings for data scientists and experienced traders. Book
              a meeting to discuss new possibilities.
            </p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-arrow bg-neutral text-neutral-content focus:bg-secondary focus:text-neutral-content my-2 rounded-md"
        >
          <div className="collapse-title">Who is Sunset Ventures?</div>
          <div className="collapse-content text-xs">
            <p>
              We are a team of investors who have build a trading platform using
              our prioprietary AI driven algorithms.
            </p>
          </div>
        </div>
        <div
          tabIndex={4}
          className="collapse collapse-arrow bg-neutral text-neutral-content focus:bg-secondary focus:text-neutral-content my-2 rounded-md"
        >
          <div className="collapse-title">Partnerships</div>
          <div className="collapse-content text-xs">
            <p>How do I work with Sunset Ventures?</p>
            <p>Let's accelerate together! Send us a message.</p>
          </div>
        </div>
        <div
          tabIndex={5}
          className="collapse collapse-arrow bg-neutral text-neutral-content focus:bg-secondary focus:text-neutral-content my-2 rounded-md"
        >
          <div className="collapse-title">Is Sunset Ventures hiring?</div>
          <div className="collapse-content text-xs">
            <p>Yes, we are!</p>
            <p>Send us a messsage.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
