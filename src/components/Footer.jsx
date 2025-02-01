import React from "react";
import { BiMessage, BiPhone } from "react-icons/bi";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";

const cardData = [
  {
    header: "LUCKNOW ASHRAM",
    phoneNo: "+91-9956578080",
    email: "info@swamiabhayanand.com",
    nav: "#",
    img: "https://swamiabhyanand.com/images/pic9.png",
  },
  {
    header: "LUCKNOW ASHRAM",
    phoneNo: "+91-9956578080",
    email: "info@swamiabhayanand.com",
    nav: "#",
    img: "https://swamiabhyanand.com/images/pic9.png",
  },
  {
    header: "LUCKNOW ASHRAM",
    phoneNo: "+91-9956578080",
    email: "info@swamiabhayanand.com",
    nav: "#",
    img: "https://swamiabhyanand.com/images/pic9.png",
  },
  {
    header: "LUCKNOW ASHRAM",
    phoneNo: "+91-9956578080",
    email: "info@swamiabhayanand.com",
    nav: "#",
    img: "https://swamiabhyanand.com/images/pic9.png",
  },
];

const Footer = () => {
  return (
    <div className="px-6 bg-amber-50">
       <div className="w-full h-0.5 bg-gray-500 "></div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 text-center">
        <div className="bg-orange-400 p-6 shadow-md text-white flex flex-col gap-6 items-center">
          <img
            src="https://swamiabhyanand.com/images/about-icon1.png"
            alt="Logo"
            className="w-14 h-14 rounded-full"
          />
          <h2 className="text-xl font-bold">ABOUT</h2>
          <p>About Swami Abhyanand Ji</p>
        </div>
        <div className="bg-orange-600 p-6 shadow-md text-white flex flex-col gap-6 items-center">
          <img
            src="https://swamiabhyanand.com/images/media-icon2.png"
            alt="Logo"
            className="w-14 h-14 rounded-full"
          />
          <h2 className="text-xl font-bold">EVENTS</h2>
          <p>Swami Abhyanand Ji Events</p>
        </div>
        <div className="bg-orange-400 p-6 shadow-md text-white flex flex-col gap-6 items-center">
          <img
            src="https://swamiabhyanand.com/images/blog-icon3.png"
            alt="Logo"
            className="w-14 h-14 rounded-full"
          />
          <h2 className="text-xl font-bold">BLOG</h2>
          <p>Swami Abhyanand Ji Blog</p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full md:w-[30%] flex items-center justify-center flex-col text-center gap-4 shadow-[1px_1px_9px_1px_orange] p-4">
          <img
            src="https://swamiabhyanand.com/images/cropped-logo.png"
            alt=""
          />
          <p className="font-semibold text-sm">
            आचार्य महामंडलेश्वर स्वामी श्री अभयानंद सरस्वती जी
          </p>
          <p className="font-semibold text-sm">
            ॥श्री गुरूवे नमः॥ (परम् पूज्य महामंडलेश्वर स्वामी श्री अभयानन्द
            सरस्वती जी महराज) कुलं पवित्रं जननी कृतार्था वसुन्धरा पुण्यवती च
            तेन। अपारसंवित्सुखसागरेऽस्मिन् लीनं परे ब्रह्मणि यस्य चेतः॥
            (स्कंन्दपुराणम्)
          </p>
        </div>
        <div className="w-full lg:w-[70%] flex flex-col md:flex-row ">
          {cardData?.map((item, idx) => {
            return (
              <div
                key={idx}
                className="lg:w-[25%] shadow-[1px_1px_9px_1px_orange] flex items-center justify-start py-2 flex-col"
              >
                <p className="text-base font-semibold">{item?.header}</p>
                <div className="flex w-full justify-center items-center gap-10 px-4 mt-6 relative">
                  <BiPhone className="text-[#e44e08] absolute left-4 text-2xl" />

                  <p className="text-sm font-semibold">{item?.phoneNo}</p>
                </div>
                <div className="flex w-full justify-center items-center gap-10 px-4 mt-6 relative">
                  <BiMessage className="text-[#e44e08] absolute left-4 text-2xl" />

                  <p className="text-sm font-semibold">{item?.email}</p>
                </div>
                <div className="flex flex-col md:flex-row mt-10 justify-center items-center w-full px-4 gap-4">
                  <button className="bg-[#dc3545] px-4 py-1 text-white rounded-sm h-8">
                    Click Here
                  </button>
                  <img src={item?.img} alt="" className="md:h-12 h-60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#e44e08] md:h-40 flex justify-center items-center gap-16 flex-col md:flex-row p-6">
        <p className="text-2xl text-white w-full md:w-[40%] text-center">
          ©2022 परम् पूज्य परमादर्श आचार्य महामंडलेश्वर स्वामी श्री अभयानंद
          सरस्वती जी | ALL RIGHTS RESERVED
        </p>
        <div className="flex gap-6">
          <FaFacebook className="text-white text-2xl" />
          <FaTwitter className="text-white text-2xl" />
          <FaLinkedin className="text-white text-2xl" />
          <FaGoogle className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
