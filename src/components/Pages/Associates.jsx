import React from "react";
import { Link } from "react-router-dom";

function Associates() {
  return (
    <div className="h-fit w-full bg-gray-100">
      <div className="h-screen w-full">
        <div className="h-3/5 w-full bg-gray-800"></div>
        <div className="flex flex-row h-2/5 w-3/4 m-auto text-gray-900">
          <div className="flex h-full w-1/2">
            <h1 className="flex my-auto  text-6xl font-bold">
              Your Vision, Our Technology Expertise
            </h1>
          </div>
          <div className="flex h-full w-1/2">
            <div className="flex flex-col my-auto gap-5">
              <h1 className="">
                Welcome to Make Me Associates, where creativity meets
                technology. Our team of freelancers is dedicated to bringing
                your ideas to life through exceptional web development, stunning
                photography, and engaging videography.
              </h1>
              <div className="flex flex-row">
                <div className="flex px-8 py-4 border border-gray-900">
                  <p>See More</p>
                </div>
                <div className="flex px-8 py-4">
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full ">
        <div className="h-full w-5/6 m-auto flex flex-row">
          <div className="h-full w-1/3 flex flex-col gap-10 text-gray-900">
            <p>Together </p>
            <h1 className="text-6xl font-bold">Our Team</h1>
            <p>
              Meet the talented freelancers dedicated to bringing your
              technology and event visions to life.
            </p>
            <div className="px-8 py-4 border border-gray-900 w-fit">
              <p>Join Us</p>
            </div>
          </div>

          <div className="h-full w-2/3 flex flex-col gap 10">
            <div className="h-1/3 w-full flex flex-row gap-10">
              <div className="h-full w-1/3 bg-white"></div>
              <div className="flex w-2/3 flex-col my-auto gap-10">
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
