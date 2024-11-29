import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="h-fit bg-gray-100">
        <div className="md:w-3/4 w-10/11 md:m-auto">
          <div className="md:w-2/3 w-full md:px-0 px-8">
            <div className="text-gray-900 md:text-6xl text-5xl font-bold md:pt-24 pt-10">
              Transforming Ideas into Reality: Your Alpas Tech Service Team
            </div>
            <div className="pt-10 text-gray-900 md:text-xl text-lg">
              We specialize in web development, photography, videography, and
              themed experiences to elevate your events.
            </div>
            <div className="flex flex-row gap-4 mt-10">
              <div className="bg-gray-900 cursor-pointer shadow-md md:text-base text-sm md:py-4 py-2 md:px-8 px-4 text-gray-100 font-semibold hover:bg-white border hover:text-gray-900 hover:border border-gray-700 duration-300">
                <p>See More</p>
              </div>
              <div className="bg-white cursor-pointer shadow-md md:text-base text-sm md:py-4 py-2 md:px-8 px-4 text-gray-900 font-semibold border border-gray-700 hover:bg-gray-900 hover:text-gray-100 duration-300">
                <p>Contact</p>
              </div>
            </div>
          </div>

          <div className="flex h-96 md:w-full w-11/12 m-auto bg-white rounded-lg mt-10 border border-blue-100 shadow-md transform hover:scale-105 hover:shadow-xl duration-300">
            <div className="flex m-auto text-gray-200 text-8xl font-bold">
              Image
            </div>
          </div>

          <div className="flex md:flex-row flex-col w-full mt-20 my-auto">
            <div className="flex flex-col h-full md:w-1/2 w-11/12 md:pb-0 pb-10 m-auto">
              <h1 className="text-gray-900 font-bold text-4xl">
                Transform Your Ideas into Powerful Web Applications
              </h1>
              <p className="text-gray-900 text-base md:w-3/4 w-11/12 my-10">
                Our Web App Development services are designed to bring your
                vision to life with cutting-edge technology and user-friendly
                interfaces. Whether you're looking to build a new platform or
                enhance an existing one, our team of experts is here to deliver
                tailored solutions that meet your specific needs.
              </p>
              <div className="flex flex-row gap-4">
                <div className="py-2 px-4 border border-gray-700">See More</div>
                <div className="py-2 px-4 flex flex-row gap-2 cursor-pointer">
                  <p>Contact Us</p>{" "}
                  <p className="text-3xl -mt-2 hover:translate-x-4 duration-300 pl-24 -ml-24">
                    ›
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-96 md:w-1/2 w-11/12 m-auto bg-white rounded-lg border border-blue-100 shadow-md hover:scale-105 hover:shadow-xl ease-in-out duration-300">
              <div className="text-gray-200 font-bold text-4xl flex m-auto ">
                Image
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col fit-96 w-full mt-20 my-auto">
            <div className="flex flex-col h-full md:w-1/2 w-11/12 md:pb-0 pb-10 m-auto">
              <h1 className="text-gray-900 md:w-11/12 font-bold text-4xl">
                Capture Unforgettable Moments with Our Professional Event
                Photography Services
              </h1>
              <p className="text-gray-900 text-base md:w-3/4 w-11/12 my-10">
                Our event photography services are designed to immortalize your
                special occasions. With a keen eye for detail, we ensure every
                moment is beautifully captured.
              </p>
              <div className="flex flex-row gap-4 w-11/12">
                <div className="flex flex-col">
                  <p className="font-bold text-gray-900 text-lg">
                    Expert Coverage
                  </p>
                  <p className="text-gray-900">
                    We provide comprehensive coverage for weddings, parties,
                    corporate events, and more.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-gray-900 text-lg">
                    Tailored Packages
                  </p>
                  <p className="text-gray-900">
                    Choose from customizable packages that fit your event needs
                    and budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-96 md:w-1/2 w-11/12 m-auto bg-white rounded-lg border border-blue-100 shadow-md hover:scale-105 hover:shadow-xl ease-in-out duration-300">
              <div className="text-gray-200 font-bold text-4xl flex m-auto">
                Image
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col fit-96 w-full mt-20 my-auto">
            <div className="flex flex-col h-full md:w-1/2 w-11/12 md:pb-0 pb-10 m-auto">
              <h2 className="mb-4">Capture</h2>
              <h1 className="text-gray-900 font-bold text-4xl">
                Unforgettable Event Videography Services for You
              </h1>
              <p className="text-gray-900 text-base md:w-3/4 w-11/12 my-10">
                Our event videography services are designed to immortalize your
                special moments with stunning clarity and creativity. Let us
                tell your story through captivating visuals that you can cherish
                forever.
              </p>
              <div className="flex flex-row gap-4">
                <div className="py-2 px-4 border border-gray-700">See More</div>
                <div className="py-2 px-4 flex flex-row gap-2">
                  <p>Contact Us</p>{" "}
                  <p className="text-3xl -mt-2 hover:translate-x-4 duration-300 pl-24 -ml-24">
                    ›
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-96 md:w-1/2 w-11/12 m-auto bg-white rounded-lg border border-blue-100 shadow-md hover:scale-105 hover:shadow-xl ease-in-out duration-300">
              <div className="text-gray-200 font-bold text-4xl flex m-auto">
                Image
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col fit-96 w-full mt-20 my-auto">
            <div className="flex h-96 md:w-1/2 w-11/12 m-auto bg-white rounded-lg border border-blue-100 shadow-md hover:scale-105 hover:shadow-xl ease-in-out duration-300">
              <div className="text-gray-200 font-bold text-4xl flex m-auto">
                Image
              </div>
            </div>
            <div className="flex flex-col h-full md:w-1/2 md:ml-10 mt-10 w-11/12 md:pb-0 pb-10 md:m-auto m-auto">
              <h2 className="mb-4">Fun</h2>
              <h1 className="text-gray-900 font-bold text-4xl">
                Capture Memories with Our Theme Photobooth
              </h1>
              <p className="text-gray-900 text-base md:w-3/4 w-11/12 my-10">
                Our Theme Photobooth service adds a unique touch to any event,
                providing guests with memorable keepsakes. With customizable
                backdrops and props, we ensure every snapshot reflects your
                event's spirit.
              </p>
              <div className="flex flex-row gap-4">
                <div className="py-2 px-4 border border-gray-700">See More</div>
                <div className="py-2 px-4 flex flex-row gap-2">
                  <p>Contact Us</p>{" "}
                  <p className="text-3xl -mt-2 hover:translate-x-4 duration-300 pl-24 -ml-24">
                    ›
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-fit md:mt-28 mt-10">
            <div className="flex md:flex-row flex-col gap-10">
              <div className="md:w-1/2 w-11/12 m-auto">
                <h1 className="text-gray-900 text-3xl font-bold">
                  Discover the Unique Benefits of Our Comprehensive Technology
                  Services
                </h1>
              </div>
              <div className="md:w-1/2 w-11/12 m-auto">
                <p className="text-gray-900">
                  Our services are tailored to meet your specific needs,
                  ensuring a seamless experience. With a focus on quality and
                  creativity, we deliver exceptional results that elevate your
                  projects. Choose us for innovative solutions that stand out in
                  today's competitive landscape.
                </p>
              </div>
            </div>
            <div className="flex my-10">
              <div className="flex md:flex-row flex-col gap-8">
                <div className="flex flex-col md:w-1/3 w-11/12 h-fit md:gap-8 gap-2 m-auto">
                  <div className="h-64 w-full bg-white rounded-lg border border-blue-100 shadow-md hover:scale-105 hover:shadow-xl duration-300"></div>
                  <p className="text-gray-900 font-bold text-xl">
                    Expert Web App Development to Bring Your Ideas to Life
                  </p>
                  <p className="text-gray-900 text-base">
                    Transform your vision into a dynamic web application with
                    our expert team.
                  </p>
                  <div className="flex flex-row gap-2 text-gray-900 text-base">
                    <p>See More</p>{" "}
                    <p className="text-3xl -mt-2 hover:translate-x-4 duration-300 pl-24 -ml-24">
                      ›
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:w-1/3 w-11/12 h-fit md:gap-8 gap-2 m-auto">
                  <div className="h-64 w-full bg-white rounded-lg border border-blue-100 shadow-md hover:scale-105 hover:shadow-xl duration-300"></div>
                  <p className="text-gray-900 font-bold text-xl">
                    Capture Unforgettable Moments with Our Professional Event
                    Photography Services
                  </p>
                  <p className="text-gray-900 text-base">
                    Our photographers specialize in capturing the essence of
                    your events beautifully.
                  </p>
                  <div className="flex flex-row gap-2 text-gray-900 text-base">
                    <p>See More</p>{" "}
                    <p className="text-3xl -mt-2 hover:translate-x-4 duration-300 pl-24 -ml-24">
                      ›
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:w-1/3 w-11/12 h-fit md:gap-8 gap-2 m-auto">
                  <div className="h-64 w-full bg-white rounded-lg border border-blue-100 shadow-md hover:scale-105 hover:shadow-xl duration-300"></div>
                  <p className="text-gray-900 font-bold text-xl">
                    Stunning Event Videography That Tells Your Story in Motion
                  </p>
                  <p className="text-gray-900 text-base">
                    Let us create a captivating video that preserves your
                    event's memories.
                  </p>
                  <div className="flex flex-row gap-2 text-gray-900 text-base">
                    <p>See More</p>{" "}
                    <p className="text-3xl -mt-2 hover:translate-x-4 duration-300 pl-24 -ml-24">
                      ›
                    </p>
                  </div>
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
