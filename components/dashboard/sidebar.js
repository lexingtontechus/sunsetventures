import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

//import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import products from "./products";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 bg-trueBlue-400 dark:bg-trueBlue-900">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-trueZinc-700 dark:text-trueZinc-100 opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() =>
              setCollapseShow(
                "bg-trueBlue-400 dark:bg-trueBlue-900 m-2 py-3 px-6"
              )
            }
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-trueAmber-600 dark:text-trueAmber-300"
            />
          </button>
          {/* Brand */}
          <Link
            href="/"
            className="md:block text-left md:pb-2 text-trueZinc-700 dark:text-trueZinc-100 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            Sunset Ventures
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative"></li>
            <li className="inline-block relative"></li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-trueZinc-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <Link
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-trueZinc-700 dark:text-trueZinc-100 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Sunset Ventures
                    </Link>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-trueZinc-700 dark:text-trueZinc-100 opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-trueAmber-600 dark:text-trueAmber-300"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-trueZinc-700 dark:text-trueZinc-100 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Dashboard
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  href="/dashboard"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-trueZinc-700 hover:text-trueZinc-700 dark:text-trueZinc-100")
                  }
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (router.pathname.indexOf("/products") !== -1
                        ? "opacity-75"
                        : "text-trueZinc-300")
                    }
                  ></i>{" "}
                  Products
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/settings"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-trueZinc-700 hover:text-trueZinc-700 dark:text-trueZinc-100")
                  }
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (router.pathname.indexOf("/settings") !== -1
                        ? "opacity-75"
                        : "text-trueZinc-300")
                    }
                  ></i>{" "}
                  Settings
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/tables"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-trueZinc-700 hover:text-trueZinc-700 dark:text-trueZinc-100")
                  }
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (router.pathname.indexOf("/tables") !== -1
                        ? "opacity-75"
                        : "text-trueZinc-300")
                    }
                  ></i>{" "}
                  Tables
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/maps"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-trueZinc-700 hover:text-trueZinc-700 dark:text-trueZinc-100")
                  }
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (router.pathname.indexOf("/maps") !== -1
                        ? "opacity-75"
                        : "text-trueZinc-300")
                    }
                  ></i>{" "}
                  Maps
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-trueZinc-700 dark:text-trueZinc-100 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              My Account
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  href="/profile"
                  className="text-trueZinc-700 hover:text-trueZinc-700 dark:text-trueZinc-100 text-xs uppercase py-3 font-bold block"
                >
                  <i className="fas fa-fingerprint text-trueZinc-400 mr-2 text-sm"></i>{" "}
                  Profile
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/subscriptions"
                  className="text-trueZinc-700 hover:text-trueZinc-700 dark:text-trueZinc-100 text-xs uppercase py-3 font-bold block"
                >
                  <i className="fas fa-fingerprint text-trueZinc-400 mr-2 text-sm"></i>{" "}
                  Subscrption Plan
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/auth/settings"
                  className="text-trueZinc-700 hover:text-trueZinc-700 dark:text-trueZinc-100 text-xs uppercase py-3 font-bold block"
                >
                  <i className="fas fa-clipboard-list text-trueZinc-300 mr-2 text-sm"></i>{" "}
                  Settings
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/api/auth/logout"
                  className="text-trueZinc-700 hover:text-trueZinc-700 dark:text-trueZinc-100 text-xs uppercase py-3 font-bold block"
                >
                  <i className="fas fa-fingerprint text-trueZinc-400 mr-2 text-sm"></i>{" "}
                  Logout
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-trueZinc-700 dark:text-trueZinc-100 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Resources
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <Link
                  href="#"
                  target="_blank"
                  className="text-trueZinc-700 hover:text-trueZinc-700 dark:text-trueZinc-100 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-paint-brush mr-2 text-trueZinc-300 text-base"></i>
                  Trading 101
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  href="#"
                  target="_blank"
                  className="text-trueZinc-700 hover:text-trueZinc-700 dark:text-trueZinc-100 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-css3-alt mr-2 text-trueZinc-300 text-base"></i>
                  Signals 101
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
