import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-[65%] min-h-[200px] md:pl-[75px] mx-auto md:mx-0 py-8 md:py-0">
      <div className="relative w-[90px] h-[90px] my-4 md:my-0">
        <Link href="/">
          <Image 
            src="/images/logo.png"
            alt="logo"
            fill={true}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 text-center md:text-left">
        <div>©Copyright Mosques.online 2021. All Rights Reserved</div>
        <div className="flex justify-center items-center text-theme space-x-8">
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="flex gap-6 items-center my-4 md:my-0">
          <FaTwitter size={20} className="text-theme" />
          <FaFacebookF size={20} className="text-theme" />
          <FaInstagram size={20} className="text-theme" />
        </div>
      </div>
    </div>
  )
}

export default Footer
