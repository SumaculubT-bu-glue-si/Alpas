import React from "react";
import Servicehero from "../../assets/Servicehero.webp";

import Image1 from "../../assets/Webdevelopment.webp";
import Image2 from "../../assets/Webdesigning.webp";
import Image3 from "../../assets/Photobooth.webp";
import Image4 from "../../assets/Photography.webp";
import Image5 from "../../assets/Videography.webp";
import Slider from "react-slick";

import { Link } from "react-router-dom";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Website/System Development",
    description:
      "Lorem ipsum dolor sit amet. Eos cumque assumenda qui Quis fuga qui aspernatur dolor. Est porro neque qui rerum facere aut pariatur sint ut placeat fuga ex reiciendis eligendi aut magni alias sit voluptas minus.",
  },
  {
    id: 2,
    img: Image2,
    title: "UI/UX Designing",
    description:
      "Lorem ipsum dolor sit amet. Eos cumque assumenda qui Quis fuga qui aspernatur dolor. Est porro neque qui rerum facere aut pariatur sint ut placeat fuga ex reiciendis eligendi aut magni alias sit voluptas minus.",
  },
  {
    id: 3,
    img: Image3,
    title: "Theme Photobooth",
    description:
      "Lorem ipsum dolor sit amet. Eos cumque assumenda qui Quis fuga qui aspernatur dolor. Est porro neque qui rerum facere aut pariatur sint ut placeat fuga ex reiciendis eligendi aut magni alias sit voluptas minus.",
  },
  {
    id: 4,
    img: Image4,
    title: "Events Photography",
    description:
      "Lorem ipsum dolor sit amet. Eos cumque assumenda qui Quis fuga qui aspernatur dolor. Est porro neque qui rerum facere aut pariatur sint ut placeat fuga ex reiciendis eligendi aut magni alias sit voluptas minus.",
  },
  {
    id: 5,
    img: Image5,
    title: "Events Videography",
    description:
      "Lorem ipsum dolor sit amet. Eos cumque assumenda qui Quis fuga qui aspernatur dolor. Est porro neque qui rerum facere aut pariatur sint ut placeat fuga ex reiciendis eligendi aut magni alias sit voluptas minus.",
  },
];

const ReviewList = [
  {
    id: 1,
    comment:
      "The team exceeded our expectations! Their professionalism and creativity made our event unforgettable.",
    fromName: "Emily Johnson",
    position: "Event Planner, ABC Events",
    location: "Century Mall Manager",
  },
  {
    id: 2,
    comment:
      "The team exceeded our expectations! Their professionalism and creativity made our event unforgettable.",
    fromName: "Emily Johnson",
    position: "Event Planner, ABC Events",
    location: "Century Mall Manager",
  },
  {
    id: 3,
    comment:
      "The team exceeded our expectations! Their professionalism and creativity made our event unforgettable.",
    fromName: "Emily Johnson",
    position: "Event Planner, ABC Events",
    location: "Century Mall Manager",
  },
];

function Services() {
  var reviewsettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  var setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="h-fit w-full bg-gray-100 pb-20">
        <div className="flex flex-col h-2/3 w-full">
          <img
            src={Servicehero}
            className="w-full h-96 md:h-full object-cover"
            alt=""
            srcSet=""
          />

          <div className="md:-mt-[550px] -mt-[450px] md:w-3/5 w-11/12 m-auto">
            <Slider {...setting}>
              {ImageList.map((data) => (
                <>
                  <div className="flex md:flex-row flex-col md:gap-10 gap-20 text-gray-100">
                    <div className="flex flex-col md:w-1/2 w-11/12 gap-8 mt-20 m-auto">
                      <h1 className="py-4 md:w-full md:m-0 m-auto md:text-5xl text-4xl md:font-semibold font-bold  md:text-start text-center">
                        {data.title}
                      </h1>
                      <p className="md:text-start text-center">
                        {data.description}
                      </p>
                      <div className="py-4 px-8 md:m-0 m-auto bg-yellow-600 w-fit rounded-xl shadow-md font-semibold hover:bg-yellow-700 duration-300">
                        <a href="#webapp">Contact Us</a>
                      </div>
                    </div>
                    <div className="flex flex-col md:w-1/2 w-11/12 m-auto">
                      <img src={data.img} alt="" srcset="" />
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>

        <div className="md:w-3/4 w-11/12 mt-20 h-fit flex md:flex-row flex-col scroll m-auto pb-10 gap-10">
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
          <div className="md:w-1/2 w-full md:my-0 my-4 h-56 bg-white rounded-md border border-blue-100 shadow-md hover:scale-105 hover:shadow-xl ease-in-out duration-300"></div>
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
          <div className="h-96 w-full bg-white border border-blue-100 rounded-lg shadow-md my-10 hover:scale-105 hover:shadow-xl ease-in-out duration-300"></div>
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
              <div className="h-96 bg-white rounded-lg shadow-md border border-blue-100 hover:scale-105 hover:shadow-xl ease-in-out duration-300"></div>
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
              <div className="h-96 bg-white rounded-lg shadow-md border border-blue-100 hover:scale-105 hover:shadow-xl ease-in-out duration-300"></div>
              <h1 className="font-bold text-lg">
                Create Lasting Memories with Our Themed Photobooth Experience
              </h1>
              <p>
                Our photobooth adds fun and excitement to any event, ensuring
                memorable keepsakes.
              </p>
            </div>

            <div className="flex flex-col md:w-1/3 w-full gap-4">
              <div className="h-96 bg-white rounded-lg shadow-md border border-blue-100 hover:scale-105 hover:shadow-xl ease-in-out duration-300"></div>
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

        <Slider {...reviewsettings}>
          {ReviewList.map((review) => (
            <>
              <div
                id="webapp"
                className="flex md:flex-row flex-col h-fit md:w-3/4 w-full m-auto mt-20 gap-10 py-10"
              >
                <div className="h-96 md:w-1/2 w-11/12 bg-white rounded-lg m-auto shadow-md border border-blue-100 hover:scale-105 hover:shadow-xl ease-in-out duration-300"></div>
                <div className="flex md:w-1/2 w-11/12 m-auto text-gray-900">
                  <div className="flex flex-col my-auto gap-10">
                    <div className="flex justify-between">
                      <p>Review</p>
                      <p className="font-bold text-3xl -mt-4">...</p>
                    </div>

                    <h1 className="md:text-3xl text-2xl font-semibold">
                      {review.comment}
                    </h1>
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <p className="font-bold">{review.fromName}</p>
                        <p>{review.position}</p>
                      </div>
                      <div className="border-l-2 border-gray-900 mx-10"></div>
                      <div className="flex my-auto">
                        <p className="text-lg font-bold">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Services;
