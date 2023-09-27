import Image from "next/image"

const HeroSectionHP = () => {
  return (
    <div className="relative lg:mt-0 mt-[135px] h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[558px] px-4 sm:px-10 xl:container flex flex-col gap-8 bg-theme-secondary drop-shadow-lg xl:py-28 justify-center items-center">
      <div className='object-cover'>
      <Image 
          src="/images/heroHP.png" 
          alt="bg-vector" 
          fill={true} />
      </div>
      <div className="absolute flex flex-col justify-center items-center place-self-center">
      <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-center font-bold lg:w-[900px]">
        Indeed, Allah defends those who have believed
      </h1>
      <h3 className="text-white text-sm sm:text-md lg:text-lg xl:text-xl font-bold mt-10">QURAN (22:38)</h3>
      </div>
    </div>
  )
}

export default HeroSectionHP
