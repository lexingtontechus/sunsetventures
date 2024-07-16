"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ProductRegistration() {
  const [state, handleSubmit] = useForm("xjkbvlkp");
  if (state.succeeded) {
    return <p>Registration successful. We will be in touch soon.</p>;
  }
  return (
    <div className="justify-between h-full min-h-[250px] w-full flex-col overflow-hidden rounded-md">
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="uppercase text-3xl">Register Your Interest</h2>

        <p className="opacity-50">We usually respond in a few hours.</p>
        <div className="pr-8 w-full">
          <form onSubmit={handleSubmit}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <div className="indicator w-full">
                <span className="indicator-item badge text-xs badge-warning">
                  Required
                </span>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="Sunny"
                  required=""
                  className="input input-bordered input-accent text-secondary w-full"
                />
              </div>
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <div className="indicator w-full">
                <span className="indicator-item badge text-xs badge-warning">
                  Required
                </span>
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Ventures"
                  required=""
                  className="input input-bordered input-accent text-secondary w-full"
                />
              </div>

              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <div className="indicator w-full">
                <span className="indicator-item badge text-xs badge-warning">
                  Required
                </span>
                <input
                  id="email"
                  type="email"
                  required=""
                  placeholder="daisy@sunsetventures.nft"
                  className="input input-bordered input-accent text-secondary w-full"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="label">
                <span className="label-text">Contact Phone</span>
              </div>
              <div className="indicator w-full">
                <span className="indicator-item badge text-xs badge-warning">
                  Required
                </span>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  required=""
                  placeholder="xxx-xxx-xxxx"
                  className="input input-bordered input-accent text-secondary w-full"
                />
              </div>
              <div className="label">
                <span className="label-text">Select A Product</span>
              </div>

              <select
                name="product"
                required=""
                className="select select-bordered select-accent flex w-full text-secondary px-4"
              >
                <option disabled selected></option>
                <option value="Apollo">Apollo</option>
                <option value="Aurora">Aurora</option>
                <option value="Crescent">Crescent</option>
                <option value="Vesper">Vesper</option>
              </select>
            </label>

            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-accent uppercase w-full mt-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
