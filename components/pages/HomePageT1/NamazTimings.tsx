import React from "react";

const NamazTimings = () => {
  return (
    <div className="px-4 sm:px-10 xl:container flex flex-col pb-20 ">
      <div className="flex flex-col items-center my-10">
        <h3 className="font-bold">Associated Mosque</h3>
        <h1 className="text-theme-secondary text-6xl font-bold">
          Namaz Timings
        </h1>
      </div>
      <div className="w-[363px] bg-[#1DBBB4] place-self-center flex justify-center items-center mt-6">
        <h3>
          Next In: <a className="text-white"> 5 hours 47 minutes 25 seconds </a>
        </h3>
      </div>
      <div className="flex flex-col items-center w-full ">
        <div>
          <div className="flex flex-row">
            <div className="bg-[#EFFFFE] py-6 px-10 flex flex-col gap-2">
              <h1 className="text-2xl font-bold">FAJR</h1>
              <div>
                <p className="font-bold">begins: 6:10 AM</p>
                <p className="font-bold">Iqamah: 7:00 AM</p>
              </div>
            </div>
            <div className="bg-white py-6 px-10 flex flex-col gap-2">
              <h1 className="text-2xl font-bold">ZUHR</h1>
              <div>
                <p className="font-bold">begins: 11:58 AM</p>
                <p className="font-bold">Iqamah: 1:30 AM</p>
              </div>
            </div>
            <div className="bg-[#EFFFFE] py-6 px-10 flex flex-col gap-2">
              <h1 className="text-2xl font-bold">ASR</h1>
              <div>
                <p className="font-bold">begins: 2:10 AM</p>
                <p className="font-bold">Iqamah: 3:00 AM</p>
              </div>
            </div>
            <div className="bg-white py-6 px-10 flex flex-col gap-2">
              <h1 className="text-2xl font-bold">FAJR</h1>
              <div>
                <p className="font-bold">begins: 3:55 AM</p>
                <p className="font-bold">Iqamah: 3:55 AM</p>
              </div>
            </div>
            <div className="bg-[#EFFFFE] py-6 px-10 flex flex-col gap-2">
              <h1 className="text-2xl font-bold">ISHA</h1>
              <div>
                <p className="font-bold">begins: 5:31 AM</p>
                <p className="font-bold">Iqamah: 8:00 AM</p>
              </div>
            </div>
            <div className="bg-[#1DBBB4] text-white py-6 px-10 flex flex-col gap-2">
              <h1 className="text-2xl font-bold">JUMMAH</h1>
              <div>
                <p className="font-bold">begins: 12:20 AM</p>
                <p className="font-bold">Iqamah: 61:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamazTimings;