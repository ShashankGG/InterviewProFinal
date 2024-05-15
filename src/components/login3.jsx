import React from "react";
import {useNavigate} from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import logo from "../assets/logo.png";
import abstraction from "../assets/Abstraction.png";

function Login3(){
    const navigate = useNavigate();
    return (
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
  
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
  
            <img
              alt=""
              src={abstraction}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
  
            <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/home">
              <span className="sr-only">Home</span>
              <img src={logo} alt="Logo" className="h-12 w-100" />
            </a>
  
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to InterviewPro
              </h2>
  
              {/* <p className="mt-4 leading-relaxed text-white/90">
                Signup as a Candidate
              </p> */}
            </div>
          </section>
  
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
              <a className="block text-white" href="/home">
              <span className="sr-only">Home</span>
              <img src={logo} alt="Logo" className="h-12 w-100" />
            </a>
              </div>
              
              <h2 className="mt-0 text-2xl font-bold text-[#09005F] sm:text-3xl md:text-4xl">
                Sign up as an Interviewer
              </h2>
  
              <h2 className="mt-6 text-lg font-bold text-black sm:text-3xl md:text-4xl">
                Create an Account
              </h2>
  
              <div className="flex justify-between ">
                <a
                  href="#"
                  class="flex items-center justify-center mt-4 mr-5 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text--200 hover:bg-white-500 dark:hover:bg-blue-600"
                >
                  <div class="px-4 py-2">
                    <svg class="w-6 h-6" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>
  
                  <span class="w-5/6 px-4 py-3 font-bold text-center">
                    Sign in with Google
                  </span>
                </a>
                <a
                  href="#"
                  class="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text--200 hover:bg-white-500 dark:hover:bg-gray-600"
                >
                  <div class="px-4 py-2">
                    <img
                      class="w-6 h-6"
                      viewBox="0 0 40 40"
                      src={linkedin}
                      alt="linkedin"
                    />
                  </div>
  
                  <span class="w-5/6 px-4 py-3 font-bold text-center">
                    Sign in with LinkedIn
                  </span>
                </a>
              </div>
  
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
  
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
  
                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email Address
                  </label>
  
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
  
                <div className="col-span-6">
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Contact Number{" "}
                  </label>
  
                  <input
                    type="text"
                    id="Contact"
                    name="Contact"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Organization Name{" "}
                  </label>
  
                  <input
                    type="text"
                    id="Organization"
                    name="Organization"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Experience{" "}
                  </label>
  
                  <input
                    type="text"
                    id="Experience"
                    name="Experience"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    LinkedIn Profile
                  </label>
  
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
  
                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
  
                {/* <div className="col-span-6">
              <label htmlFor="MarketingAccept" className="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                />
  
                <span className="text-sm text-gray-700">
                  I want to receive emails about events, product updates and company announcements.
                </span>
              </label>
            </div> */}
  
                {/* <div className="col-span-6">
              <p className="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                and
                <a href="#" className="text-gray-700 underline">privacy policy</a>.
              </p>
            </div> */}
  
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-[#032d6c]"
                    onClick={navigate("/home")}
                  >
                    Create an account
                  </button>
  
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="#" className="text-gray-700 underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    );
}

export default Login3;