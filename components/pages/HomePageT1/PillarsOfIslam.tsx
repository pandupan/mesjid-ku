import Image from "next/image"

const PillarsOfIslam = () => {
  return (
    <div className="relative px-4 sm:px-10 h-[632px] xl:container flex flex-col gap-8 bg-[#24643c]  pt-20 pb-28 drop-shadow-lg justify-center items-center ">
            <div className='object-cover'>
      <Image 
          src="/images/Pillars.png" 
          alt="bg-vector" 
          fill={true} />
      </div>
      <div className="absolute">
      <div className="flex flex-col items-center my-10">
        <h3 className="text-white font-bold">Associated Mosque</h3>
        <h1 className="text-white text-6xl font-bold">
          Pillars Of Islam
        </h1>
      </div>
      <div className='flex flex-row gap-14 mt-16 mb-6 items-center'>
        <div className='flex flex-col text-center items-center w-[200px]'>
          <div className='relative rounded-full w-[170px] h-[170px]'>
            <div className='absolute w-[200px] h-[200px] -left-4 -top-4 rounded-full flex justify-center items-center place-self-center border-2 border-[#03716D80]'>
              <div className=" absolute rounded-full w-[170px] h-[170px] bg-[#03716D80]">

              </div>
              <div className='relative rounded-full w-[85px] h-[100px]'>
                <div className="object-cover w-[60px] h-[70px]">
                <Image 
                  src="/images/pillars-03.png" 
                  alt="bg-vector" 
                  fill={true} />
                </div>
              </div>
            </div>
          </div>
          <h1 className='text-white font-bold text-3xl mt-8'>
            Shahadah
          </h1>
          <h2 className='text-white font-bold text-3xl'>
            (Faith)
          </h2>
        </div>
        <div className='flex flex-col text-center items-center  w-[200px]'>
        <div className='relative rounded-full w-[170px] h-[170px]'>
            <div className='absolute w-[200px] h-[200px] -left-4 -top-4 rounded-full flex justify-center items-center place-self-center border-2 border-[#03716D80]'>
              <div className=" absolute rounded-full w-[170px] h-[170px] bg-[#03716D80]">

              </div>
              <div className='relative rounded-full w-[100px] h-[60px]'>
                <div className="object-cover w-[60px] h-[70px]">
                <Image 
                  src="/images/pillars-05.png" 
                  alt="bg-vector" 
                  fill={true} />
                </div>
              </div>
            </div>
          </div>
          <h1 className='text-white font-bold text-3xl mt-8'>
            Salah
          </h1>
          <h2 className='text-white font-bold text-3xl'>
            (Prayer)
          </h2>
        </div>
        <div className='flex flex-col text-center items-center  w-[200px]'>
        <div className='relative rounded-full w-[170px] h-[170px]'>
            <div className='absolute w-[200px] h-[200px] -left-4 -top-4 rounded-full flex justify-center items-center place-self-center border-2 border-[#03716D80]'>
              <div className=" absolute rounded-full w-[170px] h-[170px] bg-[#03716D80]">

              </div>
              <div className='relative rounded-full w-[100px] h-[90px]'>
                <div className="object-cover w-[60px] h-[70px]">
                <Image 
                  src="/images/pillars-04.png" 
                  alt="bg-vector" 
                  fill={true} />
                </div>
              </div>
            </div>
          </div>
          <h1 className='text-white font-bold text-3xl mt-8'>
            Sawm
          </h1>
          <h2 className='text-white font-bold text-3xl'>
            (Fasting)
          </h2>
        </div>
        <div className='flex flex-col text-center items-center  w-[200px]'>
        <div className='relative rounded-full w-[170px] h-[170px]'>
            <div className='absolute w-[200px] h-[200px] -left-4 -top-4 rounded-full flex justify-center items-center place-self-center border-2 border-[#03716D80]'>
              <div className=" absolute rounded-full w-[170px] h-[170px] bg-[#03716D80]">

              </div>
              <div className='relative rounded-full w-[100px] h-[100px]'>
                <div className="object-cover w-[60px] h-[70px]">
                <Image 
                  src="/images/pillars-02.png" 
                  alt="bg-vector" 
                  fill={true} />
                </div>
              </div>
            </div>
          </div>
          <h1 className='text-white font-bold text-3xl mt-8'>
            Zakat
          </h1>
          <h2 className='text-white font-bold text-3xl'>
            (Almsgiving)
          </h2>
        </div>
        <div className='flex flex-col  items-center  w-[200px]'>
        <div className='relative rounded-full w-[170px] h-[170px]'>
            <div className='absolute w-[200px] h-[200px] -left-4 -top-4 rounded-full flex justify-center items-center place-self-center border-2 border-[#03716D80]'>
              <div className=" absolute rounded-full w-[170px] h-[170px] bg-[#03716D80]">

              </div>
              <div className='relative rounded-full w-[100px] h-[100px]'>
                <div className="object-cover w-[60px] h-[70px]">
                <Image 
                  src="/images/pillars-01.png" 
                  alt="bg-vector" 
                  fill={true} />
                </div>
              </div>
            </div>
          </div>
          <h1 className='text-white font-bold text-3xl mt-8 text-center'>
            Pilgrimage
          </h1>
          <h2 className='text-white font-bold text-3xl text-center'>
            (Pilgrimage)
          </h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PillarsOfIslam
