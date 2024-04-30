import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiStack } from "react-icons/pi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GoFileCode } from "react-icons/go";
import { TbDatabaseCog } from "react-icons/tb";
import { TbDeviceMobileCode } from "react-icons/tb";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ReqInterview3 from "./reqInterview3";

function ReqInterview2() {
  const navigate = useNavigate();
  return (
    <section>
      <div className=" bg-white">
        <h3 className="text-2xl text-[#032D6C] font-bold text-center w-full mt-7 mb-7">
          Request Interview
        </h3>
        <hr></hr>
        <h4 className="text-center text-xl mt-[1.2rem] mb-[1.2rem] text-[#043C90]">
          Select experience for the role
        </h4>
        <article class="ml-10 mr-10 mb-4 rounded-3xl bg-white p-2 ring ring-indigo-50 sm:p-3 lg:p-4 shadow-sm transition hover:shadow-lg sm:p-3">
          <span className="text-xl font-bold text-[#09005F] my-auto">
            Internship
          </span>

          <p class="text-sm text-gray-700">0 years of experience</p>
        </article>

        <article class="ml-10 mr-10 mb-4 rounded-3xl bg-white p-2 ring ring-indigo-50 sm:p-3 lg:p-4 shadow-sm transition hover:shadow-lg sm:p-3">
          <span className="text-xl font-bold text-[#09005F] my-auto">
            Entry Level
          </span>

          <p class="text-sm text-gray-700">0-1 years of experience</p>
        </article>

        <article class="ml-10 mr-10 mb-4 rounded-3xl bg-white p-2 ring ring-indigo-50 sm:p-3 lg:p-4 shadow-sm transition hover:shadow-lg sm:p-3">
          <span className="text-xl font-bold text-[#09005F] my-auto">
            Intermediate
          </span>

          <p class="text-sm text-gray-700">1-3 years of experience</p>
        </article>

        <article class="ml-10 mr-10 mb-4 rounded-3xl bg-white p-2 ring ring-indigo-50 sm:p-3 lg:p-4 shadow-sm transition hover:shadow-lg sm:p-3">
          <span className="text-xl font-bold text-[#09005F] my-auto">
            Mid Senior
          </span>

          <p class="text-sm text-gray-700">3-5 years of experience</p>
        </article>

        <article class="ml-10 mr-10 mb-4 rounded-3xl bg-white p-2 ring ring-indigo-50 sm:p-3 lg:p-4 shadow-sm transition hover:shadow-lg sm:p-3">
          <span className="text-xl font-bold text-[#09005F] my-auto">
            Senior
          </span>

          <p class="text-sm text-gray-700">5+ years of experience</p>
        </article>

        <Popup
          trigger={
            <div className="flex justify-center">
              <button class="mt-4 px-10 py-2 font-medium tracking-wide text-xl text-white capitalize transition-colors duration-300 transform bg-[#191064] rounded-full hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Next
              </button>
            </div>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <ReqInterview3 />
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
    </section>
  );
}
export default ReqInterview2;
