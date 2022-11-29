import { Fragment } from "react";
import { useUser } from "@auth0/nextjs-auth0";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Portfolio", href: "/portfolio", current: false },
];
const collapsedItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserDropDown() {
  const { user, isLoading } = useUser();
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative mx-3">
                  <div>
                    <Menu.Button className="fill-trueZinc-900 dark:fill-trueZinc-100 flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-trueZinc-00 focus:ring-offset-2 focus:ring-offset-trueZinc-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="rounded-full"
                        src={user.picture}
                        height={40}
                        width={40}
                        alt={user.name}
                      />
                      {/* <FontAwesomeIcon
                        icon={faBars}
                        className="text-trueZinc-600 dark:text-trueZinc-300"
                      />*/}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 min-w-min origin-top-right rounded-md bg-trueZinc-50 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          // eslint-disable-next-line
                          <Link
                            href="/dashboard"
                            className={classNames(
                              active ? "bg-trueZinc-100" : "",
                              "block px-4 py-2 text-sm text-trueZinc-700"
                            )}
                          >
                            <div className="flex-wrap text-right">
                              Dashboard
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          // eslint-disable-next-line
                          <Link
                            href="/portfolio"
                            className={classNames(
                              active ? "bg-trueZinc-100" : "",
                              "block px-4 py-2 text-sm text-trueZinc-700"
                            )}
                          >
                            <div className="flex-wrap text-right">
                              Portfolio
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          // eslint-disable-next-line
                          <Link
                            href="/profile"
                            className={classNames(
                              active ? "bg-trueZinc-100" : "",
                              "block px-4 py-2 text-sm text-trueZinc-700"
                            )}
                          >
                            <div className="flex-wrap text-right">Profile</div>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/api/auth/logout"
                            className={classNames(
                              active ? "bg-trueZinc-100" : "",
                              "block px-4 py-2 text-sm text-trueZinc-700 text-right"
                            )}
                          >
                            Logout
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {collapsedItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-trueBlue-600 text-trueZinc-700 dark:text-trueZinc-100 dark:bg-trueBlue-600"
                      : "text-trueZinc-700 hover:bg-trueBlue-500 dark:text-trueZinc-100 dark:hover:bg-trueBlue-500",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function Brand2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="40"
      viewBox="0 0 200.00000000000003 45.57885426586286"
    >
      <g transform="matrix(1.1394713566465715,0,0,1.1394713566465715,-2.5524161214263077,-11.121240701674834)">
        <path d="M15.68 9.760000000000002 c3.6 0 6.4 2.12 6.4 6.12 l0 18.36 c0 3.52 -2.88 6.04 -6.4 6.04 l-7.04 0 c-3.52 0 -6.4 -2.16 -6.4 -6.04 l0 -18.44 c0 -3.64 2.8 -6.04 6.4 -6.04 l7.04 0 z M4.28 15.8 l0 18.44 c0 0.68 0.2 1.28 0.48 1.88 l12.92 -24 c-0.6 -0.32 -1.28 -0.52 -2 -0.52 l-7.04 0 c-2.32 0 -4.36 1.88 -4.36 4.2 z M20 34.24 l0 -18.44 c0 -0.88 -0.24 -1.68 -0.72 -2.36 l-13.2 24.2 c0.68 0.52 1.64 0.8 2.56 0.8 l7.04 0 c2.32 0 4.32 -1.88 4.32 -4.2 z M37.72 29.96 c0.4 0.2 0.72 0.52 0.92 0.92 l4.68 9.12 l-1.56 0 c-0.24 0 -0.52 -0.16 -0.6 -0.4 l-4.28 -8.36 c-0.08 -0.24 -0.36 -0.4 -0.6 -0.4 l-2.2 0 c-0.24 0 -0.52 0.16 -0.6 0.4 l-4.44 8.36 c-0.08 0.24 -0.36 0.4 -0.6 0.4 l-1.52 0 l4.84 -9.08 c0.2 -0.36 0.52 -0.68 0.92 -0.88 c-0.4 -0.2 -0.72 -0.52 -0.92 -0.92 l-4.88 -9.12 l1.56 0 c0.24 0 0.48 0.16 0.6 0.36 l4.4 8.4 c0.12 0.2 0.4 0.4 0.64 0.4 l2.24 0 c0.24 0 0.52 -0.2 0.6 -0.4 l4.24 -8.4 c0.12 -0.2 0.36 -0.36 0.6 -0.36 l1.56 0 l-4.64 9.04 c-0.2 0.4 -0.56 0.72 -0.96 0.92 z M56.8 19.96 c2.76 0 4.96 2.28 4.96 5.04 l0 14.56 c0 0.24 -0.2 0.44 -0.44 0.44 l-10.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -2.08 c0 -2.8 2.2 -5.04 4.96 -5.04 l8.24 0 c0.24 0 0.4 -0.16 0.44 -0.44 l0 -2.6 c0 -1.76 -1.4 -3.2 -3.16 -3.2 l-8.36 0 c-0.2 0 -0.4 -0.2 -0.4 -0.44 l0 -1.24 l8.76 0 z M51.28 38.24 l8.68 0 l0 -8.84 c-0.08 0.08 -0.2 0.16 -0.32 0.16 l-8.36 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 2.32 c0 1.76 1.4 3.16 3.16 3.16 z M66.52000000000001 39.56 l0 -27.92 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 27.88 l-1.36 0 c-0.24 0 -0.44 -0.16 -0.44 -0.4 z M84.24000000000001 40.28 l-6.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -10.52 c0 -2.76 2.2 -5.04 4.96 -5.04 l6.04 0 c2.72 0 4.92 2.28 4.92 5.04 l0 10.52 c0 2.76 -2.2 5 -4.92 5 z M84.24000000000001 21.4 l-6.04 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 10.84 c0 1.76 1.4 3.16 3.16 3.16 l6.04 0 c1.72 0 3.12 -1.4 3.12 -3.16 l0 -10.84 c0 -1.76 -1.4 -3.2 -3.12 -3.2 z M109.16 20 c0.24 0 0.44 0.16 0.44 0.4 l0 24.32 c0 2.8 -2.2 5.04 -4.96 5.04 l-10 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.4 -0.44 l9.6 0 c1.76 0 3.16 -1.4 3.16 -3.16 l0 -5.52 c-0.16 0.36 -0.56 0.56 -1.08 0.56 l-7.84 0.04 c-3.36 0 -4.92 -2.28 -4.92 -5.04 l0 -14.96 l1.36 0 c0.24 0 0.44 0.16 0.44 0.4 l0 14.6 c0 1.76 0.76 3.32 3.12 3.32 l8.2 0 c0.4 0 0.72 -0.32 0.72 -0.72 l0 -17.6 l1.36 0 z M127.92 33.04 c0 -0.24 -0.2 -0.52 -0.4 -0.56 l-12.48 -4.48 c-0.6 -0.2 -1.08 -0.88 -1.08 -1.52 l0 -2 c0 -2.76 2.2 -4.48 4.96 -4.48 l9.2 0 l0 1.2 c0 0.24 -0.2 0.44 -0.44 0.44 l-8.76 0 c-1.76 0 -3.16 1.12 -3.16 2.88 l0 1.48 c0 0.24 0.2 0.48 0.4 0.56 l12.4 4.48 c0.6 0.2 1.08 0.88 1.08 1.52 l0 3.04 c0 2.8 -2.24 4.4 -4.96 4.4 l-10.76 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.44 -0.44 l10.32 0 c1.72 0 3.24 -0.96 3.24 -2.68 l0 -2.6 z M134.44 39.56 l0 -19.56 l1.36 0 c0.24 0 0.44 0.16 0.44 0.4 l0 19.6 l-1.36 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 z M134.44 13 l0 -1.88 l1.4 0 c0.24 0 0.4 0.2 0.4 0.4 l0 1.88 l-1.4 0 c-0.24 0 -0.4 -0.16 -0.4 -0.4 z M141.84 35 l0 -15.04 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 14.76 c0 1.76 1.4 3.16 3.16 3.16 l6.04 0 c1.72 0 3.12 -1.4 3.12 -3.16 l0 -14.76 c0 -0.24 0.2 -0.44 0.44 -0.44 l1.36 0 l0 15.04 c0 2.76 -2.2 5 -4.92 5 l-6.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 z M176.04000000000002 33.04 c0 -0.24 -0.2 -0.52 -0.4 -0.56 l-12.48 -4.48 c-0.6 -0.2 -1.08 -0.88 -1.08 -1.52 l0 -2 c0 -2.76 2.2 -4.48 4.96 -4.48 l9.2 0 l0 1.2 c0 0.24 -0.2 0.44 -0.44 0.44 l-8.76 0 c-1.76 0 -3.16 1.12 -3.16 2.88 l0 1.48 c0 0.24 0.2 0.48 0.4 0.56 l12.4 4.48 c0.6 0.2 1.08 0.88 1.08 1.52 l0 3.04 c0 2.8 -2.24 4.4 -4.96 4.4 l-10.76 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.44 -0.44 l10.32 0 c1.72 0 3.24 -0.96 3.24 -2.68 l0 -2.6 z" />
      </g>
    </svg>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100.00000000000001 100.00124560768778"
      width="30"
      height="30"
    >
      <g transform="translate(-14.398415463411226, -12.314614829102151) scale(1.246292296582043)">
        <g xmlns="http://www.w3.org/2000/svg">
          <path d="M64.417,23.802c0.129,0.055,0.263,0.081,0.396,0.081c0.387,0,0.756-0.227,0.919-0.604l0.988-2.296   c0.218-0.508-0.017-1.096-0.523-1.314c-0.509-0.215-1.096,0.018-1.314,0.523l-0.988,2.296   C63.676,22.995,63.91,23.583,64.417,23.802z" />
          <path d="M60.84,32.109c0.129,0.055,0.263,0.081,0.396,0.081c0.387,0,0.756-0.227,0.919-0.604l1.788-4.153   c0.218-0.508-0.017-1.096-0.523-1.314c-0.505-0.215-1.096,0.016-1.314,0.523l-1.788,4.153   C60.099,31.303,60.333,31.891,60.84,32.109z" />
          <path d="M26.132,43.039l4.824,2.076c0.129,0.055,0.263,0.081,0.396,0.081c0.387,0,0.756-0.227,0.919-0.604   c0.218-0.508-0.017-1.096-0.523-1.314l-4.824-2.076c-0.506-0.216-1.096,0.016-1.314,0.523   C25.391,42.232,25.625,42.82,26.132,43.039z" />
          <path d="M19.012,39.973l2.296,0.988c0.129,0.055,0.263,0.081,0.396,0.081c0.387,0,0.756-0.227,0.919-0.604   c0.218-0.508-0.017-1.096-0.523-1.314l-2.296-0.988c-0.508-0.215-1.096,0.017-1.314,0.523   C18.271,39.166,18.505,39.754,19.012,39.973z" />
          <path d="M82.317,41.882c0.123,0,0.249-0.022,0.37-0.071l2.322-0.925c0.513-0.204,0.764-0.785,0.559-1.299   c-0.203-0.513-0.786-0.765-1.299-0.559l-2.322,0.925c-0.513,0.204-0.764,0.785-0.559,1.299   C81.544,41.644,81.92,41.882,82.317,41.882z" />
          <path d="M40.443,27.103l1.67,4.194c0.155,0.392,0.531,0.63,0.929,0.63c0.123,0,0.249-0.022,0.37-0.071   c0.513-0.204,0.764-0.785,0.559-1.299l-1.67-4.194c-0.203-0.513-0.787-0.766-1.299-0.559   C40.489,26.008,40.238,26.589,40.443,27.103z" />
          <path d="M38.773,22.906c0.155,0.392,0.531,0.63,0.929,0.63c0.123,0,0.249-0.022,0.37-0.071c0.513-0.204,0.764-0.785,0.559-1.299   l-0.925-2.322c-0.203-0.513-0.786-0.766-1.299-0.559c-0.513,0.204-0.764,0.785-0.559,1.299L38.773,22.906z" />
          <path d="M51.945,23.8c0.553,0,1-0.447,1-1v-6c0-0.553-0.447-1-1-1s-1,0.447-1,1v6C50.945,23.353,51.393,23.8,51.945,23.8z" />
          <path d="M72.668,32.382c0.256,0,0.512-0.098,0.707-0.293l4.242-4.242c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0   l-4.242,4.242c-0.391,0.391-0.391,1.023,0,1.414C72.156,32.284,72.412,32.382,72.668,32.382z" />
          <path d="M30.512,32.089c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414   l-4.243-4.242c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L30.512,32.089z" />
          <path d="M91.428,55.417c0-0.014-0.007-0.024-0.008-0.038c0.237-1.761,0.371-3.554,0.371-5.379   c0-22.122-17.997-40.119-40.119-40.119S11.553,27.878,11.553,50c0,7.219,1.968,14.226,5.543,20.315   c0.041,0.079,0.08,0.158,0.139,0.223c2.441,4.097,5.616,7.768,9.409,10.803c-0.112,0.043-0.228,0.078-0.338,0.126   c-0.334,0.145-0.563,0.459-0.598,0.82c-0.035,0.362,0.129,0.715,0.429,0.921l3.121,2.145l-0.619,3.597   c-0.063,0.362,0.078,0.729,0.367,0.956c0.18,0.141,0.397,0.214,0.618,0.214c0.135,0,0.271-0.027,0.397-0.083   c2.029-0.88,3.408-2.5,4.155-3.934c5.416,2.69,11.146,4.017,17.495,4.017c15.184,0,28.422-8.479,35.234-20.949   c0.002-0.004,0.007-0.005,0.01-0.009c0.009-0.012,0.009-0.026,0.017-0.038c2.249-4.129,3.783-8.697,4.461-13.537   C91.403,55.529,91.428,55.477,91.428,55.417z M51.672,11.881c21.019,0,38.119,17.101,38.119,38.119c0,1.476-0.093,2.93-0.257,4.362   c-1.655-0.192-2.656-0.92-3.871-1.813c-1.723-1.265-3.675-2.699-7.772-2.699c-2.656,0-4.276,0.836-5.598,1.748   c-0.055-1.862-0.343-3.667-0.868-5.372c0.108-0.005,0.218-0.02,0.325-0.063l5.469-2.177c0.513-0.204,0.764-0.785,0.559-1.299   c-0.203-0.513-0.782-0.766-1.299-0.559l-5.469,2.177c-0.088,0.035-0.156,0.094-0.228,0.148c-0.917-2.214-2.225-4.22-3.821-5.959   l0.439-0.434c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-0.447,0.441c-3.379-3.027-7.765-4.932-12.594-5.15v-2.508   c0-0.553-0.447-1-1-1s-1,0.447-1,1v2.516c-4.828,0.255-9.206,2.196-12.565,5.256l-1.03-1.105c-0.391-0.391-1.023-0.391-1.414,0   s-0.391,1.023,0,1.414l1.033,1.108c-2.909,3.223-4.802,7.37-5.168,11.951c-1.028-0.427-2.306-0.721-4.048-0.721   c-3.852,0-5.659,1.37-7.254,2.578c-1.408,1.067-2.624,1.988-5.279,1.988c-0.472,0-0.946-0.037-1.413-0.096   c-0.164-1.428-0.254-2.869-0.254-4.321C13.553,28.981,30.653,11.881,51.672,11.881z M85.732,67.084   c-1.644-1.184-3.606-2.405-7.413-2.405c-0.199,0-0.373,0.013-0.556,0.021l0.09-0.062c0.3-0.206,0.464-0.559,0.429-0.921   c-0.035-0.361-0.264-0.676-0.598-0.82c-1.079-0.469-2.239-0.706-3.448-0.706c-0.804,0-1.602,0.11-2.325,0.316   c-0.736-1.414-2.147-3.047-4.266-3.964c-1.341-0.582-2.736-0.89-4.035-0.89c-2.145,0-3.8,0.864-4.428,2.312   c-0.535,1.236-0.272,2.688,0.741,4.087c0.902,1.245,2.324,2.333,4.006,3.061c1.042,0.453,2.179,0.682,3.378,0.682   c0.851,0,1.696-0.118,2.462-0.341c0.118,0.232,0.259,0.47,0.41,0.709c-1.036,0.598-2.354,1.083-4.477,1.083   c-2.925,0-4.058-0.921-5.37-1.987c-1.487-1.209-3.173-2.579-7.251-2.579c-3.666,0-5.529,1.35-7.173,2.54   c-1.501,1.088-2.797,2.026-5.444,2.026c-3.118,0-4.329-0.962-5.731-2.077c-1.469-1.167-3.134-2.489-6.886-2.489   c-3.873,0-5.691,1.368-7.295,2.576c-0.678,0.51-1.328,0.995-2.113,1.357c-2.121-3.79-3.601-7.93-4.337-12.247   c0.372,0.031,0.745,0.052,1.117,0.052c3.328,0,5.006-1.271,6.487-2.395c1.474-1.117,2.866-2.172,6.046-2.172   c3.03,0,4.22,0.951,5.598,2.054c0.496,0.396,1.012,0.797,1.608,1.165c-1.977,1.908-2.753,4.265-1.765,6.001   c0.675,1.184,2.071,1.862,3.833,1.862c1.506,0,3.187-0.485,4.734-1.366c1.979-1.128,3.196-2.94,3.775-4.465   c0.487,0.088,1.002,0.133,1.523,0.133c1.053,0,2.637-0.188,4.209-1.083c0.319-0.182,0.513-0.524,0.505-0.892   c-0.009-0.367-0.217-0.7-0.544-0.867l-2.808-1.438c1.043-0.611,2.344-1.104,4.397-1.104c3.342,0,4.548,0.986,5.943,2.129   c1.396,1.143,2.979,2.438,6.595,2.438c3.782,0,5.617-1.366,7.236-2.571c1.438-1.07,2.68-1.995,5.296-1.995   c3.442,0,4.971,1.123,6.589,2.312c1.288,0.946,2.622,1.914,4.774,2.179C88.614,60.142,87.411,63.751,85.732,67.084z M71.266,65.872   c-0.09-0.27-0.29-0.487-0.55-0.6c-0.127-0.056-0.263-0.083-0.398-0.083c-0.142,0-0.283,0.03-0.415,0.091   c-0.717,0.326-1.662,0.514-2.595,0.514c-0.924,0-1.792-0.173-2.583-0.517c-1.337-0.579-2.496-1.453-3.181-2.398   c-0.574-0.793-0.766-1.565-0.526-2.119c0.301-0.692,1.271-1.106,2.593-1.106c1.027,0,2.147,0.25,3.24,0.725   c1.88,0.814,3.147,2.448,3.569,3.706c0.091,0.269,0.29,0.486,0.551,0.599c0.26,0.113,0.555,0.111,0.813-0.008   c0.848-0.388,2.038-0.563,3.138-0.449l-1.851,1.271c-0.321,0.222-0.485,0.609-0.419,0.994l0.338,1.962   C72.137,67.655,71.54,66.692,71.266,65.872z M52.022,33.893c10.091,0,18.301,8.211,18.301,18.304c0,0.248,0.1,0.468,0.249,0.643   c-1.252,0.869-2.663,1.578-5.214,1.578c-2.902,0-4.026-0.92-5.328-1.985c-1.479-1.21-3.154-2.581-7.21-2.581   c-2.058,0-3.546,0.437-4.761,1.037l0.081-1.943c0.016-0.363-0.168-0.707-0.479-0.896c-0.313-0.19-0.7-0.194-1.016-0.016   c-1.984,1.13-3.199,2.899-3.774,4.383c-0.433-0.072-0.891-0.109-1.357-0.109c-1.083,0-2.722,0.198-4.377,1.142   c-0.159,0.091-0.311,0.187-0.462,0.282c-0.796-0.373-1.421-0.865-2.076-1.389c-0.271-0.218-0.558-0.439-0.854-0.658   C34.02,41.829,42.103,33.893,52.022,33.893z M38.128,55.187c0.995-0.567,2.198-0.88,3.387-0.88c0.633,0,1.228,0.087,1.721,0.25   c0.27,0.09,0.563,0.061,0.81-0.08s0.421-0.379,0.481-0.655c0.185-0.843,0.702-1.88,1.525-2.777l-0.094,2.24   c-0.017,0.391,0.195,0.754,0.543,0.932l1.778,0.911c-0.457,0.082-0.875,0.107-1.219,0.107c-0.672,0-1.342-0.1-1.888-0.281   c-0.271-0.09-0.563-0.061-0.811,0.08c-0.246,0.141-0.421,0.379-0.481,0.655c-0.295,1.347-1.37,3.148-3.109,4.14   c-1.25,0.712-2.58,1.104-3.744,1.104c-1.022,0-1.786-0.311-2.095-0.853C34.308,58.982,35.466,56.702,38.128,55.187z M27.431,79.414   c1.544,0.229,2.422,0.757,3.298,1.413c-0.321-0.036-0.646-0.066-0.975-0.066c-0.187,0-0.37,0.017-0.555,0.027   C28.595,80.346,28.005,79.889,27.431,79.414z M31,87.023l0.338-1.962c0.066-0.385-0.098-0.773-0.419-0.994l-1.851-1.271   c1.099-0.115,2.289,0.062,3.138,0.449c0.258,0.118,0.554,0.122,0.813,0.008c0.261-0.112,0.46-0.33,0.551-0.599   c0.422-1.258,1.689-2.892,3.569-3.707c1.093-0.474,2.213-0.724,3.24-0.724c1.322,0,2.292,0.414,2.592,1.106   c0.24,0.554,0.049,1.326-0.525,2.119c-0.685,0.945-1.844,1.819-3.181,2.399c-0.791,0.343-1.659,0.517-2.583,0.516   c-0.933,0-1.878-0.188-2.595-0.514c-0.259-0.119-0.555-0.121-0.813-0.008c-0.26,0.112-0.46,0.33-0.55,0.6   C32.45,85.263,31.854,86.226,31,87.023z M39.096,86.023c0.328-0.096,0.652-0.204,0.965-0.34c1.682-0.729,3.104-1.816,4.006-3.062   c0.081-0.112,0.149-0.225,0.221-0.337c0.551-0.326,1.047-0.668,1.517-1.002c1.506-1.071,2.807-1.997,5.92-1.997   c3.515,0,4.842,1.041,6.247,2.143c1.449,1.136,3.092,2.424,6.838,2.424c3.922,0,5.828-1.359,7.51-2.559   c1.052-0.75,2.015-1.422,3.427-1.765c-6.568,5.365-14.95,8.59-24.073,8.59C47.191,88.119,43.041,87.42,39.096,86.023z    M78.188,77.347c-0.096-0.031-0.193-0.061-0.3-0.061c-3.396,0-5.093,1.21-6.732,2.379c-1.576,1.125-3.065,2.188-6.348,2.188   c-3.056,0-4.236-0.926-5.604-1.998c-1.536-1.204-3.276-2.568-7.481-2.568c-3.454,0-5.159,1.021-6.687,2.091   c-0.041-0.288-0.113-0.571-0.23-0.842c-0.627-1.447-2.282-2.312-4.427-2.312c-1.299,0-2.694,0.308-4.035,0.889   c-1.549,0.671-2.716,1.726-3.521,2.796c-0.146-0.109-0.29-0.22-0.431-0.328c-1.463-1.128-2.976-2.294-6.83-2.294   c-0.141,0-0.274,0.03-0.396,0.083c-2.185-2.122-4.094-4.485-5.702-7.035c0.879-0.432,1.598-0.96,2.29-1.481   c1.485-1.118,2.889-2.174,6.093-2.174c3.054,0,4.253,0.952,5.642,2.056c1.481,1.177,3.16,2.511,6.976,2.511   c3.296,0,5.061-1.278,6.617-2.406c1.533-1.111,2.982-2.16,6-2.16c3.368,0,4.642,1.035,5.99,2.132   c1.403,1.141,2.995,2.435,6.631,2.435c2.76,0,4.465-0.722,5.742-1.507c0.688,0.681,1.525,1.295,2.523,1.728   c0.127,0.056,0.263,0.083,0.397,0.083c0.221,0,0.438-0.073,0.618-0.214c0.288-0.227,0.43-0.594,0.367-0.956l-0.478-2.773   c0.866-0.553,1.709-0.927,3.445-0.927c3.341,0,4.892,1.042,6.458,2.182C82.985,71.994,80.764,74.85,78.188,77.347z" />
        </g>
      </g>
    </svg>
  );
}

function Brand() {
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
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="0"
          />
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="0.5"
          />
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="1"
          />
        </linearGradient>
        <linearGradient>
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="0"
          />
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="0.5"
          />
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="1"
          />
        </linearGradient>
        <linearGradient>
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="0"
          />
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="0.5"
          />
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="1"
          />
        </linearGradient>
        <linearGradient>
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="0"
          />
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="0.5"
          />
          <stop
            className="fill-trueZinc-600 dark:fill-trueZinc-300"
            offset="1"
          />
        </linearGradient>
      </defs>
      <g
        featurekey="rootContainer"
        transform="matrix(1.4961996856738697,0,0,1.4961996856738697,0,0)"
        className="fill-trueZinc-600 dark:fill-trueZinc-300"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M100.254 0C44.974 0 0 44.974 0 100.254s44.974 100.254 100.254 100.254c55.28 0 100.254-44.974 100.254-100.254S155.534 0 100.254 0zm0 195.508C47.731 195.508 5 152.777 5 100.254S47.731 5 100.254 5s95.254 42.73 95.254 95.254-42.731 95.254-95.254 95.254z"
          className="fill-trueZinc-600 dark:fill-trueZinc-300"
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
          className="fill-trueZinc-600 dark:fill-trueZinc-300"
        />
      </g>
      <g
        featurekey="nameFeature-0"
        transform="matrix(1.2501561836815474,0,0,1.2501561836815474,47.74971892898531,145.84835875987773)"
        fill='url("#symbol-foil0.3")'
      >
        <path
          d="M12.12 40.28 c-2.76 0 -5.4 -1.04 -7.12 -2.56 c-1.8 -1.56 -2.96 -3.64 -3.2 -5.68 l2.88 -0.8 c0.32 1.72 1.2 3.16 2.64 4.36 c1.4 1.2 3 1.8 4.8 1.8 c1.68 0 3.24 -0.4 4.48 -1.28 c1.24 -0.84 2.04 -2.28 2.04 -4.04 c0 -2.04 -1.08 -3.36 -2.44 -4.16 c-0.96 -0.56 -1.8 -0.8 -2.76 -1 l-3.84 -0.76 c-0.8 -0.16 -1.64 -0.44 -2.56 -0.84 c-0.92 -0.44 -1.72 -0.96 -2.4 -1.64 c-1.36 -1.32 -2.04 -3 -2.04 -5.04 c0 -1.6 0.44 -3.04 1.32 -4.28 c0.88 -1.28 2 -2.2 3.4 -2.88 c1.4 -0.64 2.88 -0.96 4.52 -0.96 c6.28 0 9.04 3.88 9.64 7 l-2.8 0.88 c-0.48 -2.08 -2.36 -5.04 -6.88 -5.04 c-3.12 -0.08 -6.16 2.12 -6.12 5.16 c0 2.24 1.4 4.04 4.24 4.6 l3.68 0.72 c2.48 0.48 4.4 1.32 5.68 2.56 c0.88 0.8 1.52 1.72 1.92 2.68 c0.4 1 0.6 1.88 0.6 2.68 c0.04 5.12 -4.28 8.64 -9.68 8.52 z M47.364 10.84 l3.08 0 l0 17.76 c0 3.68 -1 6.56 -2.88 8.6 c-1.92 2.04 -4.64 3.08 -8.12 3.08 c-3.44 0 -6.16 -1.04 -8.04 -3.12 c-1.92 -2.08 -2.88 -4.84 -2.88 -8.36 l0 -17.96 l3.04 0 l0 17.8 c0 3.08 0.88 5.44 2.32 6.76 c1.48 1.36 3.36 2 5.72 2 c2.48 0 4.4 -0.72 5.76 -2.24 c1.32 -1.52 2 -3.6 2 -6.36 l0 -17.96 z M79.848 10.84 l3 0 l0 29.16 l-3.32 0 l-17.4 -24.8 l0 24.8 l-3.04 0 l0 -29.16 l3.56 0 l17.2 24.52 l0 -24.52 z M100.012 40.28 c-2.76 0 -5.4 -1.04 -7.12 -2.56 c-1.8 -1.56 -2.96 -3.64 -3.2 -5.68 l2.88 -0.8 c0.32 1.72 1.2 3.16 2.64 4.36 c1.4 1.2 3 1.8 4.8 1.8 c1.68 0 3.24 -0.4 4.48 -1.28 c1.24 -0.84 2.04 -2.28 2.04 -4.04 c0 -2.04 -1.08 -3.36 -2.44 -4.16 c-0.96 -0.56 -1.8 -0.8 -2.76 -1 l-3.84 -0.76 c-0.8 -0.16 -1.64 -0.44 -2.56 -0.84 c-0.92 -0.44 -1.72 -0.96 -2.4 -1.64 c-1.36 -1.32 -2.04 -3 -2.04 -5.04 c0 -1.6 0.44 -3.04 1.32 -4.28 c0.88 -1.28 2 -2.2 3.4 -2.88 c1.4 -0.64 2.88 -0.96 4.52 -0.96 c6.28 0 9.04 3.88 9.64 7 l-2.8 0.88 c-0.48 -2.08 -2.36 -5.04 -6.88 -5.04 c-3.12 -0.08 -6.16 2.12 -6.12 5.16 c0 2.24 1.4 4.04 4.24 4.6 l3.68 0.72 c2.48 0.48 4.4 1.32 5.68 2.56 c0.88 0.8 1.52 1.72 1.92 2.68 c0.4 1 0.6 1.88 0.6 2.68 c0.04 5.12 -4.28 8.64 -9.68 8.52 z M116.776 40 l0 -29.16 l18.24 0 l0 2.84 l-15.16 0 l0 10.08 l13.88 0 l0 2.84 l-13.88 0 l0 10.56 l15.32 0 l0 2.84 l-18.4 0 z M152.01999999999998 13.719999999999999 l0 26.28 l-3.04 0 l0 -26.28 l-9.76 0 l0 -2.88 l22.56 0 l0 2.88 l-9.76 0 z"
          className="fill-trueZinc-600 dark:fill-trueZinc-300"
        />
      </g>
      <g
        featurekey="nameFeature-1"
        transform="matrix(0.9183229787989525,0,0,0.9183229787989525,49.19187742512528,196.33924359422218)"
        fill='url("#symbol-foil0.4")'
      >
        <path
          d="M27.72 10.84 l-11.72 29.16 l-3.4 0 l-11.72 -29.16 l3.36 0 l10.08 25.72 l10.12 -25.72 l3.28 0 z M33.604 40 l0 -29.16 l18.24 0 l0 2.84 l-15.16 0 l0 10.08 l13.88 0 l0 2.84 l-13.88 0 l0 10.56 l15.32 0 l0 2.84 l-18.4 0 z M80.048 10.84 l3 0 l0 29.16 l-3.32 0 l-17.4 -24.8 l0 24.8 l-3.04 0 l0 -29.16 l3.56 0 l17.2 24.52 l0 -24.52 z M101.692 13.719999999999999 l0 26.28 l-3.04 0 l0 -26.28 l-9.76 0 l0 -2.88 l22.56 0 l0 2.88 l-9.76 0 z M135.736 10.84 l3.08 0 l0 17.76 c0 3.68 -1 6.56 -2.88 8.6 c-1.92 2.04 -4.64 3.08 -8.12 3.08 c-3.44 0 -6.16 -1.04 -8.04 -3.12 c-1.92 -2.08 -2.88 -4.84 -2.88 -8.36 l0 -17.96 l3.04 0 l0 17.8 c0 3.08 0.88 5.44 2.32 6.76 c1.48 1.36 3.36 2 5.72 2 c2.48 0 4.4 -0.72 5.76 -2.24 c1.32 -1.52 2 -3.6 2 -6.36 l0 -17.96 z M168.82 40 l-3.72 0 l-8.64 -11.8 l-5.92 0 l0 11.8 l-3.08 0 l0 -29.16 l10.12 0 c3.44 0 6.2 0.96 7.8 2.56 s2.44 3.6 2.44 5.96 c0 4.92 -3.68 7.76 -8 8.32 z M150.54 13.719999999999999 l0 11.68 l6.76 0 c2.56 0 4.56 -0.72 5.72 -1.88 c1.12 -1.12 1.68 -2.52 1.68 -4.08 c0 -2.88 -1.76 -5.72 -7.32 -5.72 l-6.84 0 z M175.224 40 l0 -29.16 l18.24 0 l0 2.84 l-15.16 0 l0 10.08 l13.88 0 l0 2.84 l-13.88 0 l0 10.56 l15.32 0 l0 2.84 l-18.4 0 z M208.988 40.28 c-2.76 0 -5.4 -1.04 -7.12 -2.56 c-1.8 -1.56 -2.96 -3.64 -3.2 -5.68 l2.88 -0.8 c0.32 1.72 1.2 3.16 2.64 4.36 c1.4 1.2 3 1.8 4.8 1.8 c1.68 0 3.24 -0.4 4.48 -1.28 c1.24 -0.84 2.04 -2.28 2.04 -4.04 c0 -2.04 -1.08 -3.36 -2.44 -4.16 c-0.96 -0.56 -1.8 -0.8 -2.76 -1 l-3.84 -0.76 c-0.8 -0.16 -1.64 -0.44 -2.56 -0.84 c-0.92 -0.44 -1.72 -0.96 -2.4 -1.64 c-1.36 -1.32 -2.04 -3 -2.04 -5.04 c0 -1.6 0.44 -3.04 1.32 -4.28 c0.88 -1.28 2 -2.2 3.4 -2.88 c1.4 -0.64 2.88 -0.96 4.52 -0.96 c6.28 0 9.04 3.88 9.64 7 l-2.8 0.88 c-0.48 -2.08 -2.36 -5.04 -6.88 -5.04 c-3.12 -0.08 -6.16 2.12 -6.12 5.16 c0 2.24 1.4 4.04 4.24 4.6 l3.68 0.72 c2.48 0.48 4.4 1.32 5.68 2.56 c0.88 0.8 1.52 1.72 1.92 2.68 c0.4 1 0.6 1.88 0.6 2.68 c0.04 5.12 -4.28 8.64 -9.68 8.52 z"
          className="fill-trueZinc-600 dark:fill-trueZinc-300"
        />
      </g>
    </svg>
  );
}
