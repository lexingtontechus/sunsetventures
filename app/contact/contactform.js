"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function PopupForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Joe Bucks",
  });

  const onSubmit = async (data, e) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <div className="justif-between h-full min-h-[250px] w-full flex-col overflow-hidden rounded-md">
      <div className="flex flex-col items-center justify-center p-5">
        <h3 className="text-lg">How can we help?</h3>
        <Player
          autoplay
          loop
          src="/json/contact.json"
          style={{ height: "250px", width: "250px" }}
        ></Player>

        <p className="opacity-50">We usually respond in a few hours.</p>
      </div>
      <div className="h-full max-w-xl overflow-auto p-8 mx-auto">
        {!isSubmitSuccessful && (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input
              type="hidden"
              value="e808fa95-79c8-42bc-8456-267681b87e7d"
              {...register("apikey")}
            />
            <input
              type="hidden"
              value={`${userName} sent a message`}
              {...register("subject")}
            />
            <input
              type="hidden"
              value="Sunset Ventures Inc."
              {...register("from_name")}
            />
            <input
              type="checkbox"
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            ></input>

            <div className="mb-4">
              <label htmlFor="full_name" className="mb-2 block text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                placeholder="Joe Bucks"
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
                className={`w-full rounded-md border border-accent bg-neutral px-3 py-2 placeholder-netural focus:outline-none focus:ring   ${
                  errors.name
                    ? "border-error ring-error focus:border-error"
                    : "border-accent ring-base-200 focus:border-base-200"
                }`}
              />
              {errors.name && (
                <div className="invalid-feedback mt-1 text-sm text-error">
                  {errors.name.message}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="joe@bucks.com"
                className={`w-full rounded-md border border-accent bg-neutral px-3 py-2 placeholder-netural focus:outline-none focus:ring   ${
                  errors.email
                    ? "border-error ring-error focus:border-error"
                    : "border-accent ring-base-200 focus:border-base-200"
                }`}
              />

              {errors.email && (
                <div className="invalid-feedback mt-1 text-sm text-error">
                  {errors.email.message}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="mb-2 block text-sm">
                Your Message
              </label>

              <textarea
                rows="4"
                id="message"
                {...register("message", {
                  required: "Enter your Message",
                })}
                placeholder="Your Message"
                className={`h-28 w-full rounded-md border border-accent bg-neutral px-3 py-2 placeholder-netural focus:outline-none focus:ring   ${
                  errors.message
                    ? "border-error ring-error focus:border-error"
                    : "border-accent ring-base-200 focus:border-base-200"
                }`}
                required
              ></textarea>
              {errors.message && (
                <div className="invalid-feedback mt-1 text-sm text-error">
                  {errors.message.message}
                </div>
              )}
            </div>
            <div className="mb-3 inline-block w-full rounded-md py-2 text-center">
              <button
                type="submit"
                className="btn btn-accent mt-6 rounded-md p-2 focus:outline-none"
              >
                {isSubmitting ? (
                  <svg
                    className="mx-auto h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "SEND MESSAGE"
                )}
              </button>
            </div>
          </form>
        )}

        {isSubmitSuccessful && isSuccess && (
          <>
            <div className="flex h-full flex-col items-center justify-center rounded-md text-center">
              <Player
                autoplay
                loop
                src="/json/contactsuccess.json"
                style={{ height: "100px", width: "100px" }}
              ></Player>
              <h3 className="py-5 text-xl text-success">
                Message sent successfully
              </h3>
              <h2 className="py-5 text-xl">
                <Link
                  href="https://discord.gg/d6KnD7V2gs"
                  alt="Discord"
                  target="_blank"
                >
                  Join Our Discord Channel
                </Link>
              </h2>

              <p className="md:px-3">{Message}</p>
              <button
                className="btn btn-accent mt-6 rounded-md p-2 focus:outline-none"
                onClick={() => reset()}
              >
                Go back
              </button>
            </div>
          </>
        )}

        {isSubmitSuccessful && !isSuccess && (
          <div className="flex h-full flex-col items-center justify-center rounded-md text-center">
            <Player
              autoplay
              loop
              src="/json/error404.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>

            <h3 className="py-7 text-xl text-error">
              Oops, Something went wrong!
            </h3>
            <p className="md:px-3">{Message}</p>
            <button
              auto
              className="btn btn-accent mt-6 rounded-md p-2 focus:outline-none"
              onClick={() => reset()}
            >
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
