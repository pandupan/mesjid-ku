import Image from "next/image";
const AboutUs = () => {
  return (
    <section id="about">
      <div className="relative flex px-4 sm:px-10 xl:container flex-col-reverse lg:flex-row justify-center items-center gap-12 py-20">

        <div className="flex flex-col gap-4 bg-white z-[1]">
          <h1 className="text-[#0C7C95] text-4xl md:text-6xl xl:text-7xl font-bold">About Us</h1>
          <p className="w-[394px] text-sm xl:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu.
          </p>
          <button className="bg-[#1DBBB4] w-[154px] h-[43px] rounded-xl">
            <a className="place-self-center">Learn More</a>
          </button>
        </div>

        <div className="relative border-4 border-[#0C7C95] w-[295px] h-[277px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px] bg-white z-[1]">
          <div>
            <div className="absolute -top-10 -left-10 z-0">
              <div className="relative aspect-square w-[295px] h-[277px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px]">
                <Image src="/images/mosque1.png" alt="bg-vector" fill={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 -left-12 z-0">
          <div className="relative aspect-square w-[608px] h-[656px]">
            <Image
              src="/images/bg-vector-3-2.png"
              alt="bg-vector"
              fill={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
