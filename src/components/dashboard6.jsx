import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiTcs } from "react-icons/si";
import { SiSap } from "react-icons/si";
import { SiAccenture } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ReqInterview1 from "./reqInterview1";

function Dashboard6() {
  return (
    <>
      <nav
        x-data="{ isOpen: false }"
        class="relative bg-white shadow dark:bg-white"
      >
        <div class="h-[10vh] p-2">
          <div class="flex flex-col md:flex-row justify-between md:items-center">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <a href="#">
                  <h2 className="ml-[1rem] font-bold text-black text-xl">
                    Dashboard
                  </h2>
                </a>

                <div class="hidden mx-10 md:block">
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        class="w-5 h-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>

                    <input
                      type="text"
                      class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-white-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>

              <div class="flex lg:hidden">
                <button
                  type="button"
                  class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex items-center gap-x-2">
              <div>
                <h1 class="text-xl font-semibold text-black-800 capitalize dark:text-black-800">
                  Ridit Jain
                </h1>
              </div>
              <img
                class="object-cover w-16 h-16 rounded-full"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>

      <div class="space-y-6">
        <div class="mt-6 ml-6 flex items-center gap-x-2">
          <img
            class="object-cover w-16 h-16 rounded"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
            alt=""
          />

          <div>
            <h1 class=" text-xl font-semibold text-black-800 capitalize dark:text-black-800">
              Hi, Ridit!
            </h1>
          </div>
        </div>

        <div>
          <h1 class="mb-4 p-4 text-xl font-semibold text-black-800 bg-[#F2F2F7] capitalize dark:text-black-800">
            Requests |{" "}
            <span class="text-gray-500">
              <Link to="/dashboard4" className="hover:text-black">
                Reports
              </Link>
            </span>
          </h1>
        </div>
      </div>
      <section class="">
        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-black-800">
                  <thead class="bg-white-50 dark:bg-white-800">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3 ml-[4rem]">
                          <span>Role</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button class="flex items-center gap-x-2">
                          <span>Type</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button class="flex items-center gap-x-2">
                          <span>Level</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Deadline
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-300 dark:bg-white-900">
                    <tr className="">
                      <td class="px-4 py-4 text-sm font-medium text-black-700 whitespace-nowrap ">
                        <div class="inline-flex items-center gap-x-3">
                          <div class="flex items-center gap-x-2">
                            <div>
                              <h2 class="font-bold text-black-800 dark:text-black ml-[4rem]">
                                Front End
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center">
                          <h2 class="text-sm font-bold text-black-800">
                            Pair Programming
                          </h2>
                        </div>
                      </td>
                      <td class="font-bold px-4 py-4 text-sm text-red-500 dark:text-red-600 whitespace-nowrap">
                        Hard
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="font-bold text-gray-700 dark:text-black">
                            Jan 2, 2022
                          </h4>
                          <p class="font-bold text-gray-500 dark:text-gray-400">
                            12:00 AM IST
                          </p>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-black-500 font-bold dark:text-black-800 whitespace-nowrap">
                        1 hr
                      </td>
                      <td class="font-bold px-4 py-4 text-sm text-black-500 dark:text-black-800 whitespace-nowrap">
                        Rs. 3600/pp
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <td class="font-bold px-4 py-4 text-xl text-black-500 dark:text-blue-800 whitespace-nowrap">
                          Accepted
                        </td>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium text-black-700 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <div class="flex items-center gap-x-2">
                            <div>
                              <h2 class="font-bold text-black-800 dark:text-black ml-[4rem]">
                                Back End
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center">
                          <h2 class="text-sm font-bold text-black-800">
                            Interview
                          </h2>
                        </div>
                      </td>
                      <td class="font-bold px-4 py-4 text-sm text-red-500 dark:text-orange-400 whitespace-nowrap">
                        Medium
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="font-bold text-gray-700 dark:text-black">
                            Jan 2, 2022
                          </h4>
                          <p class="font-bold text-gray-500 dark:text-gray-400">
                            12:00 AM IST
                          </p>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-black-500 font-bold dark:text-black-800 whitespace-nowrap">
                        2 hr
                      </td>
                      <td class="font-bold px-4 py-4 text-sm text-black-500 dark:text-black-800 whitespace-nowrap">
                        Rs. 2600/pp
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <td class="font-bold px-4 py-4 text-xl text-black-500 dark:text-blue-400 whitespace-nowrap">
                          Accepted
                        </td>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium text-black-700 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <div class="flex items-center gap-x-2">
                            <div>
                              <h2 class="font-bold text-black-800 dark:text-black ml-[4rem]">
                                Back End
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center">
                          <h2 class="text-sm font-bold text-black-800">
                            Pair Programming
                          </h2>
                        </div>
                      </td>
                      <td class="font-bold px-4 py-4 text-sm text-red-500 dark:text-red-600 whitespace-nowrap">
                        Hard
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="font-bold text-gray-700 dark:text-black">
                            Jan 2, 2022
                          </h4>
                          <p class="font-bold text-gray-500 dark:text-gray-400">
                            12:00 AM IST
                          </p>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-black-500 font-bold dark:text-black-800 whitespace-nowrap">
                        1 hr
                      </td>
                      <td class="font-bold px-4 py-4 text-sm text-black-500 dark:text-black-800 whitespace-nowrap">
                        Rs. 1500/pp
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <td class="font-bold px-4 py-4 text-xl text-black-500 dark:text-blue-400 whitespace-nowrap">
                          Accepted
                        </td>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-end w-[93vw]">
                  <Popup
                    trigger={
                      <button class=" mt-2  px-12 py-3 font-medium tracking-wide text-large text-white capitalize transition-colors duration-300 transform bg-[#191064] rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Request Interview
                      </button>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal">
                        <ReqInterview1 />
                        <div>
                          <button
                            onClick={() => close()}
                            className="bg-[#191064] rounded-lg text-white px-12 py-3"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard6;
