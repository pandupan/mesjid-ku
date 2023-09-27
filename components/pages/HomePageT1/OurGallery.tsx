import Image from "next/image";
const OurGallery = () => {
  return (
    <div className="relative px-4 sm:px-10 xl:container flex flex-col py-8 overflow-hidden ">
          <div className="absolute -top-80 -right-8 z-0">
      <div className="relative aspect-square w-[310px] h-[670px]">
        <Image 
          src="/images/bg-vector-3-4.png" 
          alt="bg-vector" 
          fill={true} />
      </div>
    </div>
      <div className="flex flex-col items-center my-10">
        <h3 className="text-[#004B48] font-bold">Associated Mosque</h3>
        <h1 className="text-[#004B48] text-6xl font-bold">Our Gallery</h1>
      </div>
      <p className="text-center w-[750px] place-self-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      </p>
      <div className="flex flex-row gap-8 mt-12 justify-center">
        <div className="bg-[#b6c9c3] w-[728px] h-[580px]">

        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[346px] h-[277px] bg-[#b6c9c3]">

          </div>
          <div className="w-[346px] h-[277px] bg-[#b6c9c3]">

          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center ">
      <button className="bg-[#1DBBB4] w-[154px] h-[43px] rounded-xl mt-2 place-self-center">
      <a className="place-self-center">View More</a>
    </button>
      </div>
    </div>
  );
};

export default OurGallery;
