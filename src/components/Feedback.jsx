import React from "react";
import "./dashboard.css";


function Feedback() {
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
                  <h2 className="ml-[1rem] font-bold text-black text-xl">Feedback</h2>
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
            <h1 class=" text-xl font-semibold text-black-800 dark:text-black-800">
              Please provide us with your valuable feedback!
            </h1>
          </div>
        </div>
      </div>

      <main className="px-8 py-2">
        <div className="max-w-xl lg:max-w-3xl flex">
          <div>
            <h2 className="ml-2 mt-4 text-xl font-bold text-[#09005F]">
              Seniority
            </h2>

            <article class="mr-[14rem] mt-2 mb-4 rounded-3xl bg-[#09005F] p-4  ">
              <span className="text-xl font-bold text-white  my-auto">
                Intermediate
              </span>

              <p class="mt-1 text-large text-white">1-3 years of experience</p>
            </article>
          </div>

          <div>
            <h2 className="mt-4 mb-4 text-2xl font-bold text-[#09005F]">
              Difficulty Level
            </h2>

            <article class="mr-[6rem] mt-4 mb-4 rounded-3xl bg-[#09005F] p-4 ">
              <span className="text-xl font-bold text-white my-auto">
                Hard
              </span>
            </article>
          </div>

        </div>
      </main>

      <section>
        <div className="pl-[36rem] pr-[36rem] bg-white">

          <label
            for="Option1"
            class=" flex cursor-pointer text-[#043C90] hover:text-white bg-[#d9dadd] items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-[#09005F] has-[:checked]:bg-[#09005F] rounded-xl m-4"
          >
            <div class="flex items-center">
              &#8203;
              <input
                type="checkbox"
                class="size-4 rounded border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong class="font-bold"> Question Asked </strong>
            </div>
          </label>

          <label
            for="Option2"
            class=" flex cursor-pointer text-[#043C90] hover:text-white bg-[#d9dadd] items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-[#09005F] has-[:checked]:bg-[#09005F] rounded-xl m-4"
          >
            <div class="flex items-center">
              &#8203;
              <input
                type="checkbox"
                class="size-4 rounded border-gray-300"
                id="Option2"
              />
            </div>

            <div>
              <strong class="font-bold"> Overall Feedback </strong>
            </div>
          </label>

        </div>
      </section>

      <section>
        <div className="pl-[36rem] pr-[36rem] bg-white">

          <h4 className="ml-4 font-bold text-2xl mt-[1rem] text-[#043C90]">
            Skill Rubric
          </h4>

          <label
            for="Option3"
            class=" flex cursor-pointer text-[#043C90] hover:text-white bg-[#d9dadd] items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-[#09005F] has-[:checked]:bg-[#09005F] rounded-xl m-4"
          >
            <div class="flex items-center">
              &#8203;
              <input
                type="checkbox"
                class="size-4 rounded border-gray-300"
                id="Option3"
              />
            </div>

            <div>
              <strong class="font-bold"> React </strong>
            </div>
          </label>

          <label
            for="Option4"
            class=" flex cursor-pointer text-[#043C90] hover:text-white bg-[#d9dadd] items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-[#09005F] has-[:checked]:bg-[#09005F] rounded-xl m-4"
          >
            <div class="flex items-center">
              &#8203;
              <input
                type="checkbox"
                class="size-4 rounded border-gray-300"
                id="Option4"
              />
            </div>

            <div>
              <strong class="font-bold"> Data Structures and Algorithms </strong>
            </div>
          </label>

          <label
            for="Option5"
            class=" flex cursor-pointer text-[#043C90] hover:text-white bg-[#d9dadd] items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-[#09005F] has-[:checked]:bg-[#09005F] rounded-xl m-4"
          >
            <div class="flex items-center">
              &#8203;
              <input
                type="checkbox"
                class="size-4 rounded border-gray-300"
                id="Option5"
              />
            </div>

            <div>
              <strong class="font-bold"> HTML/CSS </strong>
            </div>
          </label>

          <label
            for="Option6"
            class=" flex cursor-pointer text-[#043C90] hover:text-white bg-[#d9dadd] items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-[#09005F] has-[:checked]:bg-[#09005F] rounded-xl m-4"
          >
            <div class="flex items-center">
              &#8203;
              <input
                type="checkbox"
                class="size-4 rounded border-gray-300"
                id="Option6"
              />
            </div>

            <div>
              <strong class="font-bold"> JavaScript </strong>
            </div>
          </label>

          <label
            for="Option7"
            class=" flex cursor-pointer text-[#043C90] hover:text-white bg-[#d9dadd] items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-[#09005F] has-[:checked]:bg-[#09005F] rounded-xl m-4"
          >
            <div class="flex items-center">
              &#8203;
              <input
                type="checkbox"
                class="size-4 rounded border-gray-300"
                id="Option7"
              />
            </div>

            <div>
              <strong class="font-bold"> Node JS </strong>
            </div>
          </label>

          <button class="ml-[15rem] mt-2 mb-6 px-14 py-3 font-medium tracking-wide text-xl text-white capitalize transition-colors duration-300 transform bg-[#191064] rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Submit Feedback
          </button>
        </div>
      </section>
    </>
  );
}

export default Feedback;