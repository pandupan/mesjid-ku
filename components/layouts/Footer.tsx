import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="hidden lg:flex justify-between items-center w-full h-[200px] container">
      <div className="relative w-[90px] h-[90px]">
        <Link href="/">
          <Image 
            src="/images/logo.png"
            alt="logo"
            fill={true}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div>Copyright Mosques.online 2021. All Rights Reserved</div>
        <div className="flex justify-center items-center text-theme space-x-8">
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="flex gap-6 items-center">
          <FaTwitter size={20} className="text-theme" />
          <FaFacebookF size={20} className="text-theme" />
          <FaInstagram size={20} className="text-theme" />
        </div>
      </div>
    </div>
  )
}

export default Footer
