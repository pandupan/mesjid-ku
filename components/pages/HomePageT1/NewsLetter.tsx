import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import {GrMail} from "react-icons/gr"
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa6"
import {TfiYoutube} from "react-icons/tfi"
import {GrGooglePlus} from "react-icons/gr"
const NewsLetter = () => {
  return (
    <div className="px-4 sm:px-10 relative overflow-hidden flex flex-col w-full h-[900px]">
      <div className="object-cover aspect-square">
        <Image src="/images/NewsLetter.png" alt="bg-vector" fill={true} />
      </div>
      <div className="absolute container flex flex-col py-12 px-44 x:container">
        <h3 className="text-white text-sm font-semibold">Join Our</h3>
        <h1 className="text-white text-5xl font-bold">News Letter</h1>

        <div className="justify-end flex flex-row gap-8">
          <a
            href=""
            className="w-[300px] h-[44px] bg-white items-center flex justify-center rounded-xl"
          >
            <p className="text-theme-secondary place-self-center">
              Enter Email
            </p>
          </a>
          <a
            href=""
            className="w-[150px] h-[44px] bg-white items-center flex justify-center rounded-xl"
          >
            <p className="text-theme-secondary place-self-center">Go</p>
          </a>
        </div>

        <p className="text-white w-[450px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="flex text-white flex-row gap-32 mt-24">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <div className="flex flex-row gap-3 justify-start">
              <FaLocationPin size={17} />
              <p className="font-light w-[180px] ">12345 ABCDE Ab.#1234 Place, FL 12345</p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start">
              <FaPhoneAlt size={12} />
              <p className="font-light">123-456-9870</p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start">
              <FaPhoneAlt size={12} />
              <p className="font-light">123-456-9870</p>
            </div>
            <div className="flex flex-row gap-3">
              <GrMail size={17} />
              <p className="font-light">info@mosqueonline</p>
            </div>
          </div>
          <div className="flex flex-col w-[179px] gap-2">
            <h1 className="text-2xl font-bold">Quick Links</h1>
            <div className="flex flex-col font-light gap-2">
            <a href="">Home</a>
            <a href="">AboutUs</a>
            <a href="">Pillars of Islam</a>
            <a href="">Event & blog</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
            </div>
          </div>
          <div className="flex flex-col w-[179px] gap-2">
            <h1 className="text-2xl font-bold">Quick Links</h1>
            <div className="flex flex-col font-light gap-2">
            <a href="">Namaz Timings</a>
            <a href="">FAQ</a>
            </div>
          </div>
          <div className="flex flex-col w-[149px]">
            <h1 className="text-2xl font-bold">Follow Us</h1>
            <div className="flex flex-row gap-3 items-center mt-4">
              <a href=" ">
              <FaFacebookF size={15}/> 
              </a>
              <a href=" ">
              <FaTwitter size={15}/>
              </a>
              <a href=" ">
              <FaInstagram size={15}/>
              </a>
              <a href=" ">
              <TfiYoutube size={15}/>
              </a>
              <a href=" ">
              <FaLinkedinIn size={15}/>
              </a>
              <a href="">
              <GrGooglePlus size={20}/>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-white mt-14"></div>
        <div className="text-center items-center justify-center flex flex-col mt-8">
          <h1 className=" text-white font-bold text-xl">
            TERMS & PRIVACY POLICY
          </h1>
          <p className="w-[804px] text-white font-light">
            By accessing this Site, you accept the Mosques.online Terms and
            Conditions of Use. GeoTech acknowledges and honors the privacy of
            users of www.mosque.online and other services offered through this
            domain (the “Website”).
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
