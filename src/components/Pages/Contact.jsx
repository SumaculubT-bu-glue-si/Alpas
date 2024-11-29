import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center outline-none">
        <form className=" bg-white p-8 rounded-lg shadow-md w-full max-w-3xl ">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>

          <div className="py-3">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              placeholder="Enter your Name"
              type="text"
              id="name"
              className="border w-full px-4 py-2  border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div className="py-3">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email address:
            </label>
            <input
              id="email"
              className="border w-full px-4 py-2  border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your Email"
              type="email"
            />
          </div>

          <div className="py-3">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="topic"
            >
              Topic:
            </label>
            <input
              id="topic"
              className="border placeholder-opacity-5 w-full px-4 py-2  border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:placeholder-opacity-100"
              placeholder="Enter the Topic"
              type="text"
            />
          </div>

          <div className="py-3">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              id="message"
              className="h-28 border placeholder-opacity-5 w-full px-4 py-2  border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:placeholder-opacity-100 "
              placeholder="Enter the Message"
              type="text"
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium py-3 px-6 text-lg rounded-md hover:opacity-90"
            type="reset"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="bg-gray-800 text-white">
        <div>
          <h1 className="text-left ml-40 text-3xl py-10">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="pb-10 my-0 flex flex-wrap justify-between">
          <div className="my-0  w-full sm:w-1/2">
            <h1 className="mx-40 text-green-700 text-2xl pb-3">
              Lorem, ipsum dolor?
            </h1>
            <p className="mx-40 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              tempore ullam praesentium corporis natus sunt suscipit quae earum
              eum nemo. Veritatis voluptate pariatur officiis molestias esse
              recusandae voluptatum repellat distinctio omnis, fugiat dolor
              nihil quas, vitae corrupti non quisquam dolore?
            </p>
          </div>
          <div className=" w-full sm:w-1/2 mt-4 sm:mt-0">
            <h1 className="mr-40 text-2xl pb-3 text-green-700">
              Lorem, ipsum dolor?
            </h1>
            <p className="mr-60 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatem non, modi tempora nostrum, odit dolorum labore porro
              esse totam quas similique necessitatibus sequi magnam error unde
              excepturi voluptates. Nesciunt exercitationem sit quasi unde
              inventore ipsa dignissimos modi nam numquam..
            </p>
          </div>
        </div>

        <div className="pb-10 my-0 flex flex-wrap justify-between">
          <div className="my-0  w-full sm:w-1/2">
            <h1 className="mx-40 text-green-700 text-2xl pb-3">
              Lorem, ipsum dolor?
            </h1>
            <p className="mx-40 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              tempore ullam praesentium corporis natus sunt suscipit quae earum
              eum nemo. Veritatis voluptate pariatur officiis molestias esse
              recusandae voluptatum repellat distinctio omnis, fugiat dolor
              nihil quas, vitae corrupti non quisquam dolore?
            </p>
          </div>
          <div className=" w-full sm:w-1/2 mt-4 sm:mt-0">
            <h1 className="mr-40 text-2xl pb-3 text-green-700">
              Lorem, ipsum dolor?
            </h1>
            <p className="mr-60 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatem non, modi tempora nostrum, odit dolorum labore porro
              esse totam quas similique necessitatibus sequi magnam error unde
              excepturi voluptates. Nesciunt exercitationem sit quasi unde
              inventore ipsa dignissimos modi nam numquam..
            </p>
          </div>
        </div>

        <div className="pb-10 my-0 flex flex-wrap justify-between">
          <div className="my-0  w-full sm:w-1/2">
            <h1 className="mx-40 text-green-700 text-2xl pb-3">
              Lorem, ipsum dolor?
            </h1>
            <p className="mx-40 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              tempore ullam praesentium corporis natus sunt suscipit quae earum
              eum nemo. Veritatis voluptate pariatur officiis molestias esse
              recusandae voluptatum repellat distinctio omnis, fugiat dolor
              nihil quas, vitae corrupti non quisquam dolore?
            </p>
          </div>
          <div className=" w-full sm:w-1/2 mt-4 sm:mt-0">
            <h1 className="mr-40 text-2xl pb-3 text-green-700">
              Lorem, ipsum dolor?
            </h1>
            <p className="mr-60 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatem non, modi tempora nostrum, odit dolorum labore porro
              esse totam quas similique necessitatibus sequi magnam error unde
              excepturi voluptates. Nesciunt exercitationem sit quasi unde
              inventore ipsa dignissimos modi nam numquam..
            </p>
          </div>
        </div>

        <div className="pb-10 my-0 flex flex-wrap justify-between">
          <div className="my-0  w-full sm:w-1/2">
            <h1 className="mx-40 text-green-700 text-2xl pb-3">
              Lorem, ipsum dolor?
            </h1>
            <p className="mx-40 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              tempore ullam praesentium corporis natus sunt suscipit quae earum
              eum nemo. Veritatis voluptate pariatur officiis molestias esse
              recusandae voluptatum repellat distinctio omnis, fugiat dolor
              nihil quas, vitae corrupti non quisquam dolore?
            </p>
          </div>
          <div className=" w-full sm:w-1/2 mt-4 sm:mt-0">
            <h1 className="mr-40 text-2xl pb-3 text-green-700">
              Lorem, ipsum dolor?
            </h1>
            <p className="mr-60 text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatem non, modi tempora nostrum, odit dolorum labore porro
              esse totam quas similique necessitatibus sequi magnam error unde
              excepturi voluptates. Nesciunt exercitationem sit quasi unde
              inventore ipsa dignissimos modi nam numquam..
            </p>
          </div>
        </div>
      </div>

      <div class="h-1/2 pt-20 flex justify-center items-center outline-none">
        <div class="text-center max-w-lg">
          <h1 class="text-2xl text-left text-green-700">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-lg text-left pt-4 text-gray-7-900">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ad
            accusamus quaerat? Quia cumque et maxime voluptatum nostrum
            asperiores nesciunt exercitationem in voluptatibus voluptates
            adipisci inventore officia, necessitatibus ipsam expedita hic error
            deleniti a. Non sint vel ex odit maxime?
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
