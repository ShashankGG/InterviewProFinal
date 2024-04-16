import React from "react";
import { Link } from "react-router-dom";
import { PiStack } from "react-icons/pi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GoFileCode } from "react-icons/go";
import { TbDatabaseCog } from "react-icons/tb";
import { TbDeviceMobileCode } from "react-icons/tb";

function reqInterview2() {
  return (
    <section>
      <div className="pl-[36rem] pr-[36rem] bg-white">
        <h4 className="ml-4 font-bold text-2xl mt-[3rem] text-[#043C90]">
          Frontend Fundamentals
        </h4>
        <h4 className="ml-4 font-bold text-xl  mb-[1rem] text-[#606079]">
          HTML,CSS,Javascript, React, Angular etc
        </h4>
        <hr></hr>
        <div>
          <h1 class="mt-4 mb-4 ml-4  text-xl font-semibold text-black-800 capitalize dark:text-black-800">
            Rubrics | <span class="text-gray-500">Criteria</span>
          </h1>
          <hr></hr>
        </div>
        <h4 className="ml-4 font-bold text-2xl mt-[1rem] text-[#043C90]">
          Difficulty Level
        </h4>

        <button class="mt-4 ml-4 mr-4 px-6 py-2 font-medium tracking-wide text-[#09005F] bg-[#d9dadd] border border-lg border-[#09005F]  capitalize transition-colors duration-300 transform rounded-lg hover:bg-[#09005F] hover:text-white focus:outline-none  focus:ring-opacity-80">
          Easy
        </button>

        <button class="mt-4 px-6 py-2 mr-4 font-medium tracking-wide text-[#09005F] bg-[#d9dadd] border border-lg border-[#09005F]  capitalize transition-colors duration-300 transform rounded-lg hover:bg-[#09005F] hover:text-white focus:outline-none  focus:ring-opacity-80">
          Medium
        </button>

        <button class="mt-4 px-6 py-2 font-medium tracking-wide text-[#09005F] bg-[#d9dadd] border border-lg border-[#09005F]  capitalize transition-colors duration-300 transform rounded-lg hover:bg-[#09005F] hover:text-white focus:outline-none  focus:ring-opacity-80">
          Difficult
        </button>

        <br></br>

        <h4 className="ml-4 font-bold text-2xl mt-[1rem] text-[#043C90]">
          Notes for Interviewer
        </h4>

        <div>
          <textarea
            placeholder="Add a comment"
            class="block m-4 w-[45rem] rounded-2xl h-11 bg-[#d9dadd] text-[#09005F]"
          ></textarea>
        </div>

        <h4 className="ml-4 font-bold text-2xl mt-[1rem] text-[#043C90]">
          Skill Rubric
        </h4>

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
            <strong class="font-bold"> Angular JS </strong>
          </div>
        </label>

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
            <strong class="font-bold"> Browser Knowledge </strong>
          </div>
        </label>

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
            <strong class="font-bold"> HTML/CSS </strong>
          </div>
        </label>

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
            <strong class="font-bold"> Data Structures and Algorithms  </strong>
          </div>
        </label>

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
            <strong class="font-bold"> React JS </strong>
          </div>
        </label>

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
            <strong class="font-bold"> Node JS </strong>
          </div>
        </label>

        

        <button class="ml-[15rem] mt-2 mb-6 px-14 py-3 font-medium tracking-wide text-xl text-white capitalize transition-colors duration-300 transform bg-[#191064] rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Next
        </button>
      </div>
    </section>
  );
}
export default reqInterview2;
