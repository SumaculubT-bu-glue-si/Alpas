import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="h-fit w-full bg-gray-100 py-20">
        <div className="flex h-fit w-full m-auto bg-gray-700">
          <div className="flex m-auto flex-col gap-10 md:py-40 py-20">
            <h1 className="text-gray-100 font-bold md:text-6xl text-4xl md:w-2/3 w-11/12 text-center m-auto">
              Your Vision, Our Expertise in Technology Services
            </h1>
            <p className="text-gray-100 md:text-lg text-base w-4/5 text-center m-auto">
              We are a dynamic team of freelancers specializing in web app
              development, event photography, and videography. Let us bring your
              ideas to life with our innovative solutions.
            </p>
            <div className="flex flex-row m-auto md:text-base text-sm">
              <div className="border border-white text-white md:px-8 px-4 md:py-4 py-2">
                See More
              </div>
              <div className=" text-white md:px-8 px-4 md:py-4 py-2">
                Get Started
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-3/4 w-11/12 h-fit flex md:flex-row flex-col m-auto md:mt-20 mt-10 ">
          <div className="md:w-1/2 w-full h-full text-gray-900 flex m-auto flex-col">
            <div className="m-auto">
              <h1 className="font-bold md:text-4xl text-3xl pb-10">
                Unlock Exceptional Technology Solutions with Our Expert
                Freelance Team
              </h1>
              <p>
                Our diverse skill set ensures you receive top-notch web app
                development, stunning event photography, and engaging
                videography. Partnering with us means personalized service,
                creative solutions, and a commitment to bringing your vision to
                life.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full md:my-0 my-4 h-56 bg-white rounded-md border border-blue-200 shadow-md hover:scale-105 ease-in-out duration-300"></div>
        </div>

        <div className="flex flex-col h-fit md:w-3/4 w-11/12 m-auto mt-20">
          <div className="flex md:flex-row flex-col text-gray-900 gap-4">
            <h1 className="md:text-4xl text-3xl font-bold md:w-1/2 w-11/12">
              Transforming Ideas into Reality: Our Premier Technology Services
              for You
            </h1>
            <p className="text-base md:w-1/2 w-11/12">
              Our Web App Development service crafts user-friendly applications
              tailored to your needs, ensuring seamless functionality and an
              engaging user experience. Capture unforgettable moments with our
              Event Photography, where we focus on storytelling through stunning
              visuals. Additionally, our Event Videography service brings your
              events to life with high-quality video production, preserving
              every detail for you to cherish.
            </p>
          </div>
          <div className="h-96 w-full bg-white border border-blue-200 rounded-lg shadow-md my-10 hover:scale-105 ease-in-out duration-300"></div>
        </div>

        <div className="flex flex-col h-fit md:w-3/4 w-11/12 m-auto text-gray-900">
          <div className="text-gray-900 md:w-3/5 w-full ">
            <h1 className="md:text-4xl text-3xl font-bold my-10">
              Explore Our Unique Technology Services for Unforgettable Events
              and Experiences
            </h1>
          </div>
          <div className="flex md:flex-row flex-col w-full gap-8 ">
            <div className="flex flex-col md:w-1/3 w-full gap-4">
              <div className="h-96 bg-white rounded-lg shadow-md border border-blue-200 hover:scale-105 ease-in-out duration-300"></div>
              <h1 className="font-bold text-lg">
                Enhance Your Event with Our Professional Photography and
                Videography Services
              </h1>
              <p>
                Our team specializes in capturing the essence of your special
                moments.
              </p>
            </div>

            <div className="flex flex-col md:w-1/3 w-full gap-4">
              <div className="h-96 bg-white rounded-lg shadow-md border border-blue-200 hover:scale-105 ease-in-out duration-300"></div>
              <h1 className="font-bold text-lg">
                Create Lasting Memories with Our Themed Photobooth Experience
              </h1>
              <p>
                Our photobooth adds fun and excitement to any event, ensuring
                memorable keepsakes.
              </p>
            </div>

            <div className="flex flex-col md:w-1/3 w-full gap-4">
              <div className="h-96 bg-white rounded-lg shadow-md border border-blue-200 hover:scale-105 ease-in-out duration-300"></div>
              <h1 className="font-bold text-lg">
                Comprehensive Event Solutions Tailored to Your Unique Needs and
                Vision
              </h1>
              <p>
                From web app development to event enhancements, we cover all
                your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="h-fit w-full bg-gray-800 mt-20">
          <div className="flex w-3/4 py-20 shadow-md h-full m-auto text-gray-100">
            <div className="flex flex-col my-auto gap-5">
              <h1 className="md:text-6xl text-4xl font-bold">
                Let's Bring Your Vision to Life
              </h1>
              <p>
                Contact us today for a personalized consultation or to book our
                exceptional services.
              </p>
              <div className="flex flex-row">
                <div className="flex border border-gray-100 px-8 py-4">
                  <p>Get Started</p>
                </div>
                <div className="flex     px-8 py-4">
                  <p>Inquire</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col h-fit md:w-3/4 w-full m-auto mt-20 gap-10">
          <div className="h-96 md:w-1/2 w-11/12 bg-white rounded-lg m-auto shadow-md border border-blue-200 hover:scale-105 ease-in-out duration-300"></div>
          <div className="flex md:w-1/2 w-11/12 m-auto text-gray-900">
            <div className="flex flex-col my-auto gap-10">
              <div className="flex justify-between">
                <p>Review</p>
                <p className="font-bold text-3xl -mt-4">...</p>
              </div>

              <h1 className="md:text-3xl text-2xl font-semibold">
                "The team exceeded our expectations! Their professionalism and
                creativity made our event unforgettable."
              </h1>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <p className="font-bold">Emily Johnson</p>
                  <p>Event Planner, ABC Events</p>
                </div>
                <div className="border-l-2 border-gray-900 mx-10"></div>
                <div className="flex my-auto">
                  <p className="text-lg font-bold">Century Mall Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
