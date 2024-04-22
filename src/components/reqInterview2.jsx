import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiStack } from "react-icons/pi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GoFileCode } from "react-icons/go";
import { TbDatabaseCog } from "react-icons/tb";
import { TbDeviceMobileCode } from "react-icons/tb";

function ReqInterview2() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="pl-[36rem] pr-[36rem] bg-white">
        <h3 className="text-5xl text-[#032D6C] font-bold text-center w-full mt-16 mb-10">
          Request Interview
        </h3>
        <hr></hr>
        <h4 className="pl-[11rem] text-2xl mt-[2rem] mb-[2rem] text-[#043C90]">
          Select experience for the role
        </h4>
        <article class="ml-6 mr-6 mb-6 rounded-3xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="text-3xl font-bold text-[#09005F] my-auto">
            Internship
          </span>

              <p class="mt-1 text-xl text-gray-700">
                0 years of experience
              </p>
        </article>

        <article class="ml-6 mr-6 mb-6 rounded-3xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="text-3xl font-bold text-[#09005F] my-auto">
            Entry Level
          </span>

              <p class="mt-1 text-xl text-gray-700">
                0-1 years of experience
              </p>
        </article>

        <article class="ml-6 mr-6 mb-6 rounded-3xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="text-3xl font-bold text-[#09005F] my-auto">
            Intermediate
          </span>

              <p class="mt-1 text-xl text-gray-700">
                1-3 years of experience
              </p>
        </article>

        <article class="ml-6 mr-6 mb-6 rounded-3xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="text-3xl font-bold text-[#09005F] my-auto">
            Mid Senior
          </span>

              <p class="mt-1 text-xl text-gray-700">
                3-5 years of experience
              </p>
        </article>

        <article class="ml-6 mr-6 mb-6 rounded-3xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="text-3xl font-bold text-[#09005F] my-auto">
            Senior
          </span>

              <p class="mt-1 text-xl text-gray-700">
                5-8 years of experience
              </p>
        </article>

        <article class="ml-6 mr-6 mb-6 rounded-3xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 shadow-sm transition hover:shadow-lg sm:p-6">
            <span className="text-3xl font-bold text-[#09005F] my-auto">
            Senior+
          </span>

              <p class="mt-1 text-xl text-gray-700">
                8+ years of experience
              </p>
        </article>

        

        <button class="ml-[15rem] mt-2 mb-6 px-14 py-3 font-medium tracking-wide text-xl text-white capitalize transition-colors duration-300 transform bg-[#191064] rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        onClick={()=>navigate("/reqinterview3")}>
          Next
        </button>
      </div>
    </section>
  );
}
export default ReqInterview2;
