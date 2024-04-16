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
          <h1 class="mt-4 mb-4 ml-4  text-xl font-semibold text-gray-500 ">
            Rubrics <span class="text-[#043C90]">| Criteria</span>
          </h1>
          <hr></hr>

          <article class="ml-6 mr-6 mb-6 rounded-3xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 shadow-sm transition hover:shadow-lg sm:p-6">
            <p class="mt-1 text-xl text-gray-700">0 years of experience</p>
          </article>
        </div>

        <button class="ml-[15rem] mt-2 mb-6 px-14 py-3 font-medium tracking-wide text-xl text-white capitalize transition-colors duration-300 transform bg-[#191064] rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Add Candidate
        </button>
      </div>
    </section>
  );
}
export default reqInterview2;
