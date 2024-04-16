import React from "react";
import { Link } from "react-router-dom";
import { PiStack } from "react-icons/pi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GoFileCode } from "react-icons/go";
import { TbDatabaseCog } from "react-icons/tb";
import { TbDeviceMobileCode } from "react-icons/tb";

function reqInterview1() {
  return (
    <section>
      <div className="pl-[36rem] pr-[36rem] bg-white">
        <h3 className="text-5xl text-[#032D6C] font-bold text-center w-full mt-16 mb-10">
          Request Interview
        </h3>
        <hr></hr>
        <h4 className="pl-[11rem] text-2xl mt-[2rem] mb-[2rem] text-[#043C90]">
          Select the role for the Interview
        </h4>
        <div className="ml-auto w-full grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-2">
          <article className="h-[6rem] w-[6rem] mb-4 mx-auto rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <div className="mt-1">
              <LiaLaptopCodeSolid className="h-12 w-12" />
            </div>
          </article>

          <span className="text-2xl font-semibold text-[#09005F] my-auto">
            Frontend
          </span>
        </div>

        <div className="ml-auto w-full grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-2">
          <article className="h-[6rem] w-[6rem] mb-4 mx-auto rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <div className="mt-1">
              <GoFileCode  className="h-12 w-12" />
            </div>
          </article>

          <span className="text-2xl font-semibold text-[#09005F] my-auto">
            Backend
          </span>
        </div>

        <div className="ml-auto w-full grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-2">
          <article className="h-[6rem] w-[6rem] mb-4 mx-auto rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <div className="mt-1">
              <PiStack className="h-12 w-12" />
            </div>
          </article>

          <span className="text-2xl font-semibold text-[#09005F] my-auto">
            Full Stack
          </span>
        </div>

        <div className="ml-auto w-full grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-2">
          <article className="h-[6rem] w-[6rem] mb-4 mx-auto rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <div className="mt-1">
              <TbDatabaseCog className="h-12 w-12" />
            </div>
          </article>

          <span className="text-2xl font-semibold text-[#09005F] my-auto">
            Data Science
          </span>
        </div>

        <div className="ml-auto w-full grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-2">
          <article className="h-[6rem] w-[6rem] mb-4 mx-auto rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
            <div className="mt-1">
              <TbDeviceMobileCode className="h-12 w-12" />
            </div>
          </article>

          <span className="text-2xl font-semibold text-[#09005F] my-auto">
            App Dev
          </span>
        </div>

        <button class="ml-[15rem] mt-6 px-14 py-3 font-medium tracking-wide text-xl text-white capitalize transition-colors duration-300 transform bg-[#191064] rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Next
                          </button>

      </div>
    </section>
  );
}
export default reqInterview1;
