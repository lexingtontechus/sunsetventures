"use client";
import PopupForm from "./popupForm";

export default function PopupWidget() {
  return (
    <div className="fixed z-40 flex items-center justify-center transition duration-300 bg-accent rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-neutral focus:bg-accent ease">
      <button
        className="btn btn-circle"
        onClick={() => window.contact.showModal()}
      >
        <Message />
      </button>
      <dialog id="contact" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center">How can we help?</h3>
          <p className="py-2 text-center">We usually respond in a few hours</p>
          <PopupForm />
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-accent btn-sm">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

function Message() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      viewBox="0 0 512 512"
      className="fill-accent"
    >
      <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
    </svg>
  );
}
