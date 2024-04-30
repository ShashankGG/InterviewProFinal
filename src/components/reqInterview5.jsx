import React from "react";
import { Link } from "react-router-dom";
import { PiStack } from "react-icons/pi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GoFileCode } from "react-icons/go";
import { TbDatabaseCog } from "react-icons/tb";
import { TbDeviceMobileCode } from "react-icons/tb";

function reqInterview5() {
  return (
    <section>
      <div className="bg-white">
        <h3 className="ml-4 font-bold text-xl mt-[0.6rem] mb-4 text-[#043C90]">
          Add Candidate
        </h3>
        <hr></hr>

        <h4 className="m-4 font-bold text-large  text-[#043C90]">
          Candidate Name
        </h4>

        <input type="text" placeholder="Full Name" class="block m-4 w-[45rem] rounded-2xl h-11 bg-[#d9dadd] text-[#09005F]" />

        <h4 className="m-4 font-bold text-large  text-[#043C90]">
          Phone Number
        </h4>

        <input type="text" placeholder="Phone Number" class="block m-4 w-[45rem] rounded-2xl h-11 bg-[#d9dadd] text-[#09005F]" />

        <h4 className="m-4 font-bold text-large  text-[#043C90]">
          Email Address 
        </h4>

        <input type="email" placeholder="Email Address" class="block m-4 w-[45rem] rounded-2xl h-11 bg-[#d9dadd] text-[#09005F]" />

        <h4 className="m-4 font-bold text-large  text-[#043C90]">
          Resume
        </h4>

        <input type="file" class="block w-[45rem] px-3 py-2 m-4 text-[#09005F] bg-white border border-[#09005F] rounded-2xl file:bg-[#d9dadd] file:text-[#09005F] file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-[#09005F] dark:file:text-gray-200 dark:text-[#09005F]placeholder-[#d9dadd] dark:placeholder-[#d9dadd] focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-[#d9dadd] dark:focus:border-blue-300" />

        <h4 className="m-3 font-bold text-large text-center text-[#043C90]">
          OR
        </h4>

        <h4 className="ml-4 mb-4 font-bold text-large  text-[#043C90]">
          Add Candidate in bulk
        </h4>

        <label for="dropzone-file" class="flex flex-col items-center w-full max-w-lg p-4 mx-auto mt-2 mb-4 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-[#d9dadd] dark:border-gray-700 rounded-xl shadow-sm transition hover:shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-[#09005F]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>

        <h2 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-[#09005F]">Upload CSV File</h2>

        <input id="dropzone-file" type="file" class="hidden" />
    </label>
    


        

        <button class="ml-[19rem] mt-2 mb-6 px-14 py-3 font-medium tracking-wide text-large text-white capitalize transition-colors duration-300 transform bg-[#191064] rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Done
        </button>
      </div>
    </section>
  );
}
export default reqInterview5;
