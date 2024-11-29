import React from "react";
import Logo from "../../assets/Logo.jpg";

function Footer() {
  return (
    <>
      <div className="h-fit bg-white md:py-14 py-8 border-t border-blue-100">
        <div className="flex md:flex-row flex-col  md:w-3/4 w-11/12 h-full m-auto ">
          <div className="md:w-1/6 w-full h-full flex m-auto md:mb-0 mb-8">
            <img src={Logo} alt="logo" className="md:h-28 h-16" />
          </div>
          <div className="md:w-1/6 md:mb-0 mb-8 text-gray-900 text-base gap-4 flex flex-col">
            <div>
              <p className="font-semibold md:mb-4 mb-0 md:text-start">
                Connect With
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Home Page</p>
              <p>Services Page</p>
              <p>Associates</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="md:w-1/6 w-full md:mb-0 mb-8 text-gray-900 text-base gap-4 flex flex-col">
            <div>
              <p className="font-semibold md:mb-4 mb-0 md:text-start">
                Follow Us
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Facebook Page</p>
              <p>Instagram Feed</p>
              <p>Twitter Profile</p>
              <p>Youtube Channel</p>
            </div>
          </div>
          <div className="md:w-1/6 w-full md:mb-0 mb-8 text-gray-900 text-base gap-4 flex flex-col">
            <div>
              <p className="font-semibold md:mb-4 mb-0 md:text-start">
                Stay Update
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p>Email Updates</p>
              <p>Latest News</p>
              <p>Event Updates</p>
              <p>Feedback Form</p>
            </div>
          </div>
          <div className="md:w-2/6 w-full m-auto md:mb-0 mb-8 md:mt-0 mt-8 h-full text-gray-900 text-base gap-4 flex flex-col">
            <p className="font-semibold md:mb-4 mb-0">Require and Email Us</p>
            <p>
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <input
              type="text"
              className="py-2 px-2 w-full border rounded-md border-blue-100 shadow-md"
              placeholder="Email"
            />
            <p>
              By emailing us, you agree to our Privacy Policy and receive
              updates.
            </p>
          </div>
        </div>
        <div className="flex md:w-3/5 w-11/12 m-auto border-b-2 border-blue-100 shadow-lg md:mt-16 mt-4 mb-4"></div>
        <div className="flex md:flex-row flex-col md:gap-8 gap-2 md:w-3/5 w-11/12 m-auto">
          <p>© 2024 Your Company. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Settings</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
