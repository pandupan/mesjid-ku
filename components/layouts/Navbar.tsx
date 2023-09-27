import Image from "next/image"
import Link from "next/link"
import Button from "../core/Button"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-[135px] container">
      <div className="relative w-[90px] h-[90px]">
        <Image 
          src="/images/logo.png"
          alt="logo"
          fill={true}
        />
      </div>
      <div className="flex items-center gap-12">
        <div className="flex gap-6 text-lg">
          <Link href="/home">Home</Link>
          <Link href="#theme">Themes</Link>
          <Link href="#about">About Us</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="flex gap-6">
          <Button title="Login"/>
          <Button title="Register"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
