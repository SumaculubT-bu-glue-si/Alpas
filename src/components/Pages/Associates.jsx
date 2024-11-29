import React from "react";
import { Link } from "react-router-dom";

function Associates() {
  return (
    <div className="h-fit w-full bg-gray-100">
      <div className="h-fit w-full pb-28">
        <div className="h-96 w-full bg-gray-800"></div>
        <div className="flex md:py-10 py-10 md:flex-row flex-col h-2/5 md:w-3/4 w-11/12 m-auto text-gray-900 gap-10">
          <div className="flex h-full md:w-1/2 w-full">
            <h1 className="flex my-auto  md:text-6xl text-4xl md:text-start text-center font-bold">
              Your Vision, Our Technology Expertise
            </h1>
          </div>
          <div className="flex h-full md:w-1/2 w-11/12 m-auto">
            <div className="flex flex-col my-auto gap-5 md:text-start text-center">
              <h1 className="">
                Welcome to Make Me Associates, where creativity meets
                technology. Our team of freelancers is dedicated to bringing
                your ideas to life through exceptional web development, stunning
                photography, and engaging videography.
              </h1>
              <div className="flex flex-row md:m-0 m-auto">
                <div className="flex md:px-8 px-4 md:py-4 py-2 border border-gray-900">
                  <p className="md:text-base text-sm">See More</p>
                </div>
                <div className="flex md:px-8 px-4 md:py-4 py-2">
                  <p className="md:text-base text-sm">Contact Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit w-full text-gray-900">
        <div className="h-full md:w-3/4 w-11/12 m-auto flex md:flex-row flex-col gap-10 pb-28">
          <div className="h-full md:w-2/5 w-full flex flex-col md:gap-10 gap-5">
            <p>Together </p>
            <h1 className="md:text-6xl text-4xl font-bold">Our Team</h1>
            <p>
              Meet the talented freelancers dedicated to bringing your
              technology and event visions to life.
            </p>
            <div className="md:px-8 px-4 md:py-4 py-2 border border-gray-900 w-fit">
              <p className="md:text-base text-sm">Join Us</p>
            </div>
          </div>

          <div className="h-full md:w-3/5 w-11/12 flex flex-col gap-10 m-auto">
            <div className="h-1/3 w-full flex md:flex-row flex-col gap-10">
              <div className="h-72 md:w-2/5 w-full bg-white rounded-lg shadow-md border border-blue-100 hover:scale-105 ease-in-out duration-300"></div>
              <div className="flex md:w-3/5 w-full flex-col my-auto gap-10">
                <div>
                  <h1 className="font-semibold text-2xl">Alex Johnson</h1>
                  <p>Web Developer</p>
                </div>
                <div>
                  <p>
                    Crafting seamless web applications tailored to your unique
                    business needs and goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-1/3 w-full flex md:flex-row flex-col gap-10">
              <div className="h-72 md:w-2/5 w-full bg-white rounded-lg shadow-md border border-blue-100 hover:scale-105 ease-in-out duration-300"></div>
              <div className="flex md:w-3/5 w-full flex-col my-auto gap-10">
                <div>
                  <h1 className="font-semibold text-2xl">Alex Johnson</h1>
                  <p>Web Developer</p>
                </div>
                <div>
                  <p>
                    Crafting seamless web applications tailored to your unique
                    business needs and goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-1/3 w-full flex md:flex-row flex-col gap-10">
              <div className="h-72 md:w-2/5 w-full bg-white rounded-lg shadow-md border border-blue-100 hover:scale-105 ease-in-out duration-300"></div>
              <div className="flex md:w-3/5 w-full flex-col my-auto gap-10">
                <div>
                  <h1 className="font-semibold text-2xl">Alex Johnson</h1>
                  <p>Web Developer</p>
                </div>
                <div>
                  <p>
                    Crafting seamless web applications tailored to your unique
                    business needs and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Associates;
