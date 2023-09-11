"use client";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Link from "next/link";
//import ThemeSwitch from "./themeSwitch";

const Navbar = () => (
  <div className="navbar flex justify-between py-2 px-4 whitespace-normal">
    <div className="flex flex-1 items-start justify-start">
      <Link href="/" className="h-content inline-flex w-auto stroke-2">
        <Logo />
      </Link>
    </div>
    <div className="navbar-end flex-none">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-square btn-ghost">
          <Menu />
        </label>
        <SignedOut>
          <ul
            tabIndex={0}
            className="mt-2 p-0 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
          >
            <li>
              <SignInButton
                mode="modal"
                afterSignInUrl="/dashboard"
                afterSignUpUrl="dashboard"
              >
                <button className="hover:text-secondary-focus block px-4 py-2 text-sm">
                  Sign in
                </button>
              </SignInButton>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                Contact
              </Link>
            </li>
          </ul>
        </SignedOut>
        <SignedIn>
          <ul
            tabIndex={0}
            className="overlay mt-3 p-2 menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
          >
            <li className="px-2 py-2 text-sm">
              <UserButton afterSignOutUrl="/" />
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/subscriptions"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                Subscriptions
              </Link>
            </li>
            <li>
              <SignOutButton
                afterSignOutUrl="/"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              />
            </li>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider"></div>
            </div>
            <li>
              <Link
                href="/products"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                Contact
              </Link>
            </li>
          </ul>
        </SignedIn>
      </div>
    </div>
  </div>
);

export default Navbar;

function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block w-5 h-5 stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
}
function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
      width="50"
      height="50"
    >
      <defs>
        <linearGradient>
          <stop className="fill-accent" offset="0" />
          <stop className="fill-accent" offset="0.5" />
          <stop className="fill-accent" offset="1" />
        </linearGradient>
        <linearGradient>
          <stop className="fill-accent" offset="0" />
          <stop className="fill-accent" offset="0.5" />
          <stop className="fill-accent" offset="1" />
        </linearGradient>
        <linearGradient>
          <stop className="fill-accent" offset="0" />
          <stop className="fill-accent" offset="0.5" />
          <stop className="fill-accent" offset="1" />
        </linearGradient>
        <linearGradient>
          <stop className="fill-accent" offset="0" />
          <stop className="fill-accent" offset="0.5" />
          <stop className="fill-accent" offset="1" />
        </linearGradient>
      </defs>
      <g
        featurekey="rootContainer"
        transform="matrix(1.4961996856738697,0,0,1.4961996856738697,0,0)"
        className="fill-accent"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M100.254 0C44.974 0 0 44.974 0 100.254s44.974 100.254 100.254 100.254c55.28 0 100.254-44.974 100.254-100.254S155.534 0 100.254 0zm0 195.508C47.731 195.508 5 152.777 5 100.254S47.731 5 100.254 5s95.254 42.73 95.254 95.254-42.731 95.254-95.254 95.254z"
          className="fill-accent"
        />
      </g>
      <g
        featurekey="symbolFeature-0"
        transform="matrix(0.8000088841047345,0,0,0.8000088841047345,109.99995557947634,62.99995557947633)"
        fill='url("#symbol-foil0.4")'
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M93.999,59.44c0.318-1.492,0.564-3.012,0.731-4.555c0.004-0.035,0.01-0.07,0.014-0.106c0.073-0.692,0.127-1.391,0.168-2.093  c0.006-0.1,0.018-0.198,0.022-0.298c0.042-0.791,0.064-1.588,0.064-2.389s-0.022-1.598-0.064-2.389  c-0.005-0.101-0.017-0.201-0.022-0.301c-0.041-0.701-0.095-1.398-0.168-2.09c-0.004-0.036-0.01-0.072-0.014-0.108  c-0.167-1.542-0.413-3.061-0.731-4.552c0,0,0-0.001,0-0.001l0,0c-0.125-0.584-0.255-1.166-0.402-1.741h0.001  c-0.001-0.003-0.002-0.007-0.003-0.011c-0.161-0.628-0.34-1.248-0.526-1.865c-0.006-0.016-0.01-0.033-0.015-0.05l0,0  c-1.508-4.958-3.846-9.552-6.856-13.622c-0.046-0.063-0.089-0.129-0.136-0.191l0,0c-4.348-5.814-10.069-10.539-16.682-13.7l0,0  c-0.323-0.154-0.653-0.298-0.981-0.443c-2.128-0.955-4.341-1.751-6.628-2.37c0,0,0,0,0,0c-0.003-0.001-0.006-0.001-0.009-0.002  c-0.428-0.116-0.858-0.223-1.291-0.326c-0.004-0.001-0.008-0.002-0.012-0.003l0,0C60.12,6.154,59.781,6.073,59.44,6l0,0h-0.001  c-1.492-0.319-3.011-0.565-4.554-0.731c-0.035-0.004-0.07-0.01-0.106-0.014c-0.692-0.073-1.391-0.127-2.093-0.168  c-0.1-0.006-0.198-0.018-0.298-0.023C51.598,5.022,50.801,5,50,5s-1.598,0.022-2.389,0.064C47.51,5.069,47.41,5.081,47.31,5.087  c-0.701,0.042-1.398,0.095-2.09,0.168c-0.036,0.004-0.071,0.01-0.106,0.014C24.166,7.531,7.531,24.166,5.269,45.114  c-0.004,0.035-0.01,0.07-0.014,0.106c-0.073,0.696-0.127,1.397-0.169,2.102c-0.006,0.096-0.017,0.191-0.021,0.288  C5.023,48.401,5,49.198,5,50c0,0.802,0.023,1.598,0.064,2.39c0.005,0.096,0.016,0.189,0.021,0.284  c0.042,0.706,0.096,1.409,0.169,2.105c0.004,0.036,0.01,0.07,0.014,0.106C5.435,56.429,5.681,57.947,6,59.439v0.001l0,0  c2.168,10.151,7.755,19.035,15.503,25.384l0,0c0.02,0.016,0.04,0.03,0.06,0.047C29.314,91.199,39.212,94.999,50,94.999  C71.613,94.999,89.66,79.759,93.999,59.44L93.999,59.44L93.999,59.44z M22.802,15.451c0.033,0.118,0.084,0.232,0.162,0.335  l4.544,5.974c0.197,0.259,0.495,0.395,0.797,0.395c0.21,0,0.423-0.066,0.604-0.204c0.439-0.334,0.524-0.961,0.19-1.401l-4.544-5.975  c-0.077-0.102-0.172-0.179-0.275-0.242c1.632-1.18,3.344-2.253,5.133-3.204c0.015,0.11,0.038,0.22,0.092,0.324l3.436,6.672  c0.178,0.344,0.527,0.542,0.891,0.542c0.153,0,0.311-0.036,0.457-0.111c0.49-0.253,0.684-0.856,0.431-1.347l-3.437-6.672  c-0.052-0.101-0.126-0.18-0.204-0.254c1.801-0.861,3.669-1.601,5.594-2.214c0.003,0.084,0,0.168,0.025,0.252l2.223,7.155  c0.133,0.429,0.527,0.704,0.954,0.704c0.099,0,0.198-0.015,0.297-0.045c0.528-0.164,0.822-0.724,0.659-1.251l-2.223-7.155  c-0.023-0.074-0.069-0.131-0.107-0.195c1.895-0.514,3.841-0.899,5.827-1.156c0,0.036-0.007,0.07-0.003,0.108l0.947,7.446  c0.064,0.505,0.495,0.874,0.991,0.874c0.042,0,0.085-0.003,0.128-0.008c0.548-0.07,0.935-0.57,0.865-1.118L46.31,6.234  c-0.003-0.024-0.016-0.043-0.022-0.066C47.513,6.065,48.748,6,50,6c0.723,0,1.442,0.02,2.157,0.055l-0.357,7.441  c-0.027,0.552,0.399,1.02,0.951,1.047c0.018,0.001,0.032,0.001,0.049,0.001c0.53,0,0.973-0.417,0.998-0.952l0.354-7.39  c1.956,0.184,3.873,0.502,5.747,0.935l-1.6,7.072c-0.123,0.539,0.217,1.074,0.754,1.196c0.074,0.017,0.148,0.024,0.223,0.024  c0.457,0,0.869-0.315,0.975-0.779l1.587-7.019c1.872,0.523,3.697,1.16,5.46,1.917l-2.717,6.474  c-0.214,0.509,0.025,1.095,0.535,1.309c0.126,0.053,0.257,0.079,0.387,0.079c0.391,0,0.762-0.23,0.922-0.614l2.693-6.42  c1.731,0.839,3.395,1.794,4.99,2.844l-3.668,5.702c-0.297,0.465-0.164,1.083,0.301,1.382c0.167,0.108,0.354,0.159,0.539,0.159  c0.33,0,0.652-0.162,0.843-0.459l3.632-5.646c1.542,1.117,3.008,2.332,4.391,3.635l-4.432,4.794  c-0.375,0.404-0.35,1.037,0.057,1.412c0.191,0.178,0.436,0.266,0.679,0.266c0.269,0,0.536-0.108,0.733-0.321l4.388-4.747  c1.313,1.354,2.549,2.785,3.681,4.298l-5.012,3.812c-0.439,0.333-0.524,0.961-0.19,1.4c0.196,0.259,0.495,0.395,0.798,0.395  c0.211,0,0.424-0.066,0.604-0.204l4.961-3.773c1.05,1.545,1.996,3.165,2.847,4.841l-5.383,2.773  c-0.491,0.252-0.685,0.855-0.431,1.347c0.177,0.344,0.527,0.542,0.89,0.542c0.153,0,0.312-0.036,0.457-0.111l5.33-2.746  c0.762,1.687,1.425,3.426,1.972,5.218l-5.568,1.729c-0.527,0.163-0.822,0.724-0.658,1.251c0.133,0.429,0.527,0.704,0.955,0.704  c0.098,0,0.197-0.014,0.297-0.045l5.518-1.713c0.493,1.933,0.852,3.917,1.079,5.941C92.863,45.021,92.168,45,91,45  c-2.57,0-5.118,0.102-7.639,0.285c-2.797-15.344-16.221-26.98-32.371-26.98c-18.18,0-32.916,14.737-32.916,32.916  c0,1.354,0.104,2.684,0.264,3.995C15.905,55.077,13.456,55,11,55c-1.421,0-2.731,0.018-3.686,0.037  c-0.401,0.009-0.723,0.02-1.012,0.035C6.109,53.406,6,51.716,6,50c0-0.053,0.004-0.105,0.004-0.159l7.491,0.36  c0.016,0.001,0.032,0.001,0.049,0.001c0.53,0,0.972-0.416,0.998-0.952c0.027-0.552-0.399-1.02-0.951-1.047L6.1,47.843  c-0.016,0-0.031,0.004-0.045,0.008c0.096-1.995,0.336-3.953,0.691-5.87c0.049,0.02,0.09,0.052,0.144,0.064l7.32,1.656  c0.074,0.017,0.148,0.024,0.222,0.024c0.457,0,0.869-0.315,0.975-0.779c0.122-0.539-0.216-1.074-0.755-1.196l-7.32-1.656  c-0.065-0.015-0.127-0.002-0.192-0.004c0.454-1.961,1.035-3.873,1.742-5.725c0.072,0.059,0.143,0.12,0.233,0.158l6.909,2.896  c0.126,0.053,0.257,0.078,0.386,0.078c0.391,0,0.762-0.231,0.923-0.614c0.213-0.51-0.026-1.096-0.536-1.309l-6.909-2.896  c-0.099-0.041-0.2-0.051-0.3-0.06c0.802-1.858,1.725-3.653,2.765-5.369c0.07,0.095,0.153,0.183,0.258,0.251l6.313,4.06  c0.167,0.107,0.355,0.159,0.54,0.159c0.329,0,0.651-0.162,0.842-0.459c0.298-0.465,0.164-1.083-0.3-1.382l-6.313-4.06  c-0.107-0.068-0.223-0.108-0.339-0.132c1.123-1.687,2.361-3.289,3.7-4.802c0.053,0.112,0.125,0.218,0.222,0.308l5.513,5.094  c0.192,0.178,0.436,0.266,0.679,0.266c0.269,0,0.537-0.108,0.734-0.321c0.375-0.406,0.35-1.038-0.056-1.413l-5.513-5.095  c-0.097-0.089-0.208-0.153-0.323-0.197C19.711,18.066,21.212,16.706,22.802,15.451z M6.573,57.056C7.458,57.031,9.105,57,11,57  c9.802,0,19.532,1.126,28.287,3.266c-8.379,6.223-14.567,14.502-17.452,23.507C13.879,77.126,8.302,67.729,6.573,57.056z M50,93.999  c-9.936,0-19.109-3.313-26.483-8.89c2.819-9.521,9.517-18.268,18.671-24.448C55.232,51.852,72.568,47,91,47  c1.247,0,1.93,0.022,2.891,0.067c0.064,0.97,0.108,1.946,0.108,2.933C93.999,74.261,74.261,93.999,50,93.999z"
          className="fill-accent"
        />
      </g>
      <g
        featurekey="nameFeature-0"
        transform="matrix(1.2501561836815474,0,0,1.2501561836815474,47.74971892898531,145.84835875987773)"
        fill='url("#symbol-foil0.3")'
      >
        <path
          d="M12.12 40.28 c-2.76 0 -5.4 -1.04 -7.12 -2.56 c-1.8 -1.56 -2.96 -3.64 -3.2 -5.68 l2.88 -0.8 c0.32 1.72 1.2 3.16 2.64 4.36 c1.4 1.2 3 1.8 4.8 1.8 c1.68 0 3.24 -0.4 4.48 -1.28 c1.24 -0.84 2.04 -2.28 2.04 -4.04 c0 -2.04 -1.08 -3.36 -2.44 -4.16 c-0.96 -0.56 -1.8 -0.8 -2.76 -1 l-3.84 -0.76 c-0.8 -0.16 -1.64 -0.44 -2.56 -0.84 c-0.92 -0.44 -1.72 -0.96 -2.4 -1.64 c-1.36 -1.32 -2.04 -3 -2.04 -5.04 c0 -1.6 0.44 -3.04 1.32 -4.28 c0.88 -1.28 2 -2.2 3.4 -2.88 c1.4 -0.64 2.88 -0.96 4.52 -0.96 c6.28 0 9.04 3.88 9.64 7 l-2.8 0.88 c-0.48 -2.08 -2.36 -5.04 -6.88 -5.04 c-3.12 -0.08 -6.16 2.12 -6.12 5.16 c0 2.24 1.4 4.04 4.24 4.6 l3.68 0.72 c2.48 0.48 4.4 1.32 5.68 2.56 c0.88 0.8 1.52 1.72 1.92 2.68 c0.4 1 0.6 1.88 0.6 2.68 c0.04 5.12 -4.28 8.64 -9.68 8.52 z M47.364 10.84 l3.08 0 l0 17.76 c0 3.68 -1 6.56 -2.88 8.6 c-1.92 2.04 -4.64 3.08 -8.12 3.08 c-3.44 0 -6.16 -1.04 -8.04 -3.12 c-1.92 -2.08 -2.88 -4.84 -2.88 -8.36 l0 -17.96 l3.04 0 l0 17.8 c0 3.08 0.88 5.44 2.32 6.76 c1.48 1.36 3.36 2 5.72 2 c2.48 0 4.4 -0.72 5.76 -2.24 c1.32 -1.52 2 -3.6 2 -6.36 l0 -17.96 z M79.848 10.84 l3 0 l0 29.16 l-3.32 0 l-17.4 -24.8 l0 24.8 l-3.04 0 l0 -29.16 l3.56 0 l17.2 24.52 l0 -24.52 z M100.012 40.28 c-2.76 0 -5.4 -1.04 -7.12 -2.56 c-1.8 -1.56 -2.96 -3.64 -3.2 -5.68 l2.88 -0.8 c0.32 1.72 1.2 3.16 2.64 4.36 c1.4 1.2 3 1.8 4.8 1.8 c1.68 0 3.24 -0.4 4.48 -1.28 c1.24 -0.84 2.04 -2.28 2.04 -4.04 c0 -2.04 -1.08 -3.36 -2.44 -4.16 c-0.96 -0.56 -1.8 -0.8 -2.76 -1 l-3.84 -0.76 c-0.8 -0.16 -1.64 -0.44 -2.56 -0.84 c-0.92 -0.44 -1.72 -0.96 -2.4 -1.64 c-1.36 -1.32 -2.04 -3 -2.04 -5.04 c0 -1.6 0.44 -3.04 1.32 -4.28 c0.88 -1.28 2 -2.2 3.4 -2.88 c1.4 -0.64 2.88 -0.96 4.52 -0.96 c6.28 0 9.04 3.88 9.64 7 l-2.8 0.88 c-0.48 -2.08 -2.36 -5.04 -6.88 -5.04 c-3.12 -0.08 -6.16 2.12 -6.12 5.16 c0 2.24 1.4 4.04 4.24 4.6 l3.68 0.72 c2.48 0.48 4.4 1.32 5.68 2.56 c0.88 0.8 1.52 1.72 1.92 2.68 c0.4 1 0.6 1.88 0.6 2.68 c0.04 5.12 -4.28 8.64 -9.68 8.52 z M116.776 40 l0 -29.16 l18.24 0 l0 2.84 l-15.16 0 l0 10.08 l13.88 0 l0 2.84 l-13.88 0 l0 10.56 l15.32 0 l0 2.84 l-18.4 0 z M152.01999999999998 13.719999999999999 l0 26.28 l-3.04 0 l0 -26.28 l-9.76 0 l0 -2.88 l22.56 0 l0 2.88 l-9.76 0 z"
          className="fill-accent"
        />
      </g>
      <g
        featurekey="nameFeature-1"
        transform="matrix(0.9183229787989525,0,0,0.9183229787989525,49.19187742512528,196.33924359422218)"
        fill='url("#symbol-foil0.4")'
      >
        <path
          d="M27.72 10.84 l-11.72 29.16 l-3.4 0 l-11.72 -29.16 l3.36 0 l10.08 25.72 l10.12 -25.72 l3.28 0 z M33.604 40 l0 -29.16 l18.24 0 l0 2.84 l-15.16 0 l0 10.08 l13.88 0 l0 2.84 l-13.88 0 l0 10.56 l15.32 0 l0 2.84 l-18.4 0 z M80.048 10.84 l3 0 l0 29.16 l-3.32 0 l-17.4 -24.8 l0 24.8 l-3.04 0 l0 -29.16 l3.56 0 l17.2 24.52 l0 -24.52 z M101.692 13.719999999999999 l0 26.28 l-3.04 0 l0 -26.28 l-9.76 0 l0 -2.88 l22.56 0 l0 2.88 l-9.76 0 z M135.736 10.84 l3.08 0 l0 17.76 c0 3.68 -1 6.56 -2.88 8.6 c-1.92 2.04 -4.64 3.08 -8.12 3.08 c-3.44 0 -6.16 -1.04 -8.04 -3.12 c-1.92 -2.08 -2.88 -4.84 -2.88 -8.36 l0 -17.96 l3.04 0 l0 17.8 c0 3.08 0.88 5.44 2.32 6.76 c1.48 1.36 3.36 2 5.72 2 c2.48 0 4.4 -0.72 5.76 -2.24 c1.32 -1.52 2 -3.6 2 -6.36 l0 -17.96 z M168.82 40 l-3.72 0 l-8.64 -11.8 l-5.92 0 l0 11.8 l-3.08 0 l0 -29.16 l10.12 0 c3.44 0 6.2 0.96 7.8 2.56 s2.44 3.6 2.44 5.96 c0 4.92 -3.68 7.76 -8 8.32 z M150.54 13.719999999999999 l0 11.68 l6.76 0 c2.56 0 4.56 -0.72 5.72 -1.88 c1.12 -1.12 1.68 -2.52 1.68 -4.08 c0 -2.88 -1.76 -5.72 -7.32 -5.72 l-6.84 0 z M175.224 40 l0 -29.16 l18.24 0 l0 2.84 l-15.16 0 l0 10.08 l13.88 0 l0 2.84 l-13.88 0 l0 10.56 l15.32 0 l0 2.84 l-18.4 0 z M208.988 40.28 c-2.76 0 -5.4 -1.04 -7.12 -2.56 c-1.8 -1.56 -2.96 -3.64 -3.2 -5.68 l2.88 -0.8 c0.32 1.72 1.2 3.16 2.64 4.36 c1.4 1.2 3 1.8 4.8 1.8 c1.68 0 3.24 -0.4 4.48 -1.28 c1.24 -0.84 2.04 -2.28 2.04 -4.04 c0 -2.04 -1.08 -3.36 -2.44 -4.16 c-0.96 -0.56 -1.8 -0.8 -2.76 -1 l-3.84 -0.76 c-0.8 -0.16 -1.64 -0.44 -2.56 -0.84 c-0.92 -0.44 -1.72 -0.96 -2.4 -1.64 c-1.36 -1.32 -2.04 -3 -2.04 -5.04 c0 -1.6 0.44 -3.04 1.32 -4.28 c0.88 -1.28 2 -2.2 3.4 -2.88 c1.4 -0.64 2.88 -0.96 4.52 -0.96 c6.28 0 9.04 3.88 9.64 7 l-2.8 0.88 c-0.48 -2.08 -2.36 -5.04 -6.88 -5.04 c-3.12 -0.08 -6.16 2.12 -6.12 5.16 c0 2.24 1.4 4.04 4.24 4.6 l3.68 0.72 c2.48 0.48 4.4 1.32 5.68 2.56 c0.88 0.8 1.52 1.72 1.92 2.68 c0.4 1 0.6 1.88 0.6 2.68 c0.04 5.12 -4.28 8.64 -9.68 8.52 z"
          className="fill-accent"
        />
      </g>
    </svg>
  );
}
