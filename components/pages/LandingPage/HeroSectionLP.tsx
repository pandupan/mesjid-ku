import Image from "next/image";

const HeroSectionLP = () => {
  return (
    <div className="relative lg:mt-0 mt-[125px] h-[558px] px-4 sm:px-10 xl:container flex flex-col gap-2 bg-theme-secondary drop-shadow-lg py-20 justify-center">
      <div className="object-cover">
      <Image 
                  src="/images/HeroLP.png" 
                  alt="bg-vector" 
                  fill={true} />
      </div>
      <div className="absolute">
      <h1 className="text-white text-7xl font-bold w-[765px]">
        DO NOT LOSE HOPE, NOR BE SAD
      </h1>
      <h3 className="text-white text-2xl font-bold">Quran 3:129</h3>
      <p className="text-white w-[680px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <button className="bg-[#1DBBB4] w-[154px] h-[48px] rounded-xl mt-4">
        <a className="place-self-center">Read more</a>
      </button>
      </div>
    </div>
  );
};

export default HeroSectionLP;
