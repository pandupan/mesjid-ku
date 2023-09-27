import Image from "next/image";
import {FaCalendarAlt, FaUser} from "react-icons/fa"

const EventsBlog = () => {
  return (
    <div className="px-4 sm:px-10 items-center flex flex-col py-8 bg-[#e7f8f7]">
      <div className="flex flex-col items-center gap-2 my-10">
        <h3 className="text-[#004B48] font-bold">Events & Blog</h3>
        <h1 className="text-[#004B48] text-6xl font-bold">Our Events & Blog</h1>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center bg-white w-[714px] h-[247px] shadow-md">
            <div className="flex flex-row">
              <div className="w-[298px] h-[247px] bg-[#b6c9c3]"></div>
              <div className="flex flex-col gap-4 p-8">
                <h1 className="text-xl text-theme-secondary font-bold">
                  Is Islam Old Philosophy?
                </h1>
                <div className="flex flex-row gap-10">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#13bbb4]">
                      <FaCalendarAlt size={17}/>
                    </div>
                    <h3 className="place-self-center">Jan 6, 2022</h3>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#13bbb4]">
                      <FaUser size={17}/>
                    </div>
                    <h3 className="place-self-center">Imam Ullah</h3>
                  </div>
                </div>
                <p className="w-[324px] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a href="" className="text-theme-secondary text-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center bg-white w-[714px] h-[247px] shadow-md">
            <div className="flex flex-row">
              <div className="w-[298px] h-[247px] bg-[#b6c9c3]"></div>
              <div className="flex flex-col gap-4 p-8">
                <h1 className="text-xl text-theme-secondary font-bold">
                  Importance Of Namaz
                </h1>
                <div className="flex flex-row gap-10">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#13bbb4]">
                      <FaCalendarAlt size={17}/>
                    </div>
                    <h3 className="place-self-center">Jan 8, 2022</h3>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#13bbb4]">
                      <FaUser size={17}/>
                    </div>
                    <h3 className="place-self-center">Imam Ullah</h3>
                  </div>
                </div>
                <p className="w-[324px] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a href="" className="text-theme-secondary text-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row w-[422px] h-[149px] bg-white py-8 px-4 gap-4">
            <div className="flex flex-col">
              <h1 className="text-6xl text-theme-secondary font-bold">15</h1>
              <h3 className="text-3xl text-theme-secondary font-bold">Jan</h3>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xl text-theme-secondary font-bold">
                  Is Islam Old Philosophy?
                </h1>
                <div className="flex flex-row gap-10">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#13bbb4]">
                      <FaCalendarAlt size={17}/>
                    </div>
                    <h3 className="place-self-center">Jan 6, 2022</h3>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#13bbb4]">
                      <FaUser size={17}/>
                    </div>
                    <h3 className="place-self-center">Imam Ullah</h3>
                  </div>
                </div>
                <a href="" className="text-theme-secondary text-sm">
                  View Details
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsBlog;
