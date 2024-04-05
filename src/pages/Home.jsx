import React from 'react'

function Home() {
  return (
    <main 
    className="
      max-w-[1440px] mx-auto
      flex flex-col items-center pt-[8rem] pb-10 px-5 
      bg-[url('https://github.com/RaulTindogan/space-tourism-website/blob/main/public/assets/home/background-home-mobile.jpg?raw=true')] 
      min-h-[100vh] text-white bg-no-repeat bg-cover bg-center
      md:bg-[url('https://github.com/RaulTindogan/space-tourism-website/blob/main/public/assets/home/background-home-tablet.jpg?raw=true')] 
      md:pt-[12rem]
      lg:bg-[url('https://raw.githubusercontent.com/RaulTindogan/space-tourism-website/main/public/assets/home/background-home-desktop.jpg')] 
      lg:px-[3.5rem]
      lg:flex-row
      lg:pb-[8rem]
      lg:items-end
      ">
        <div className='text-center lg:text-justify lg:pl-[4rem] lg:pr-[6rem] lg:w-1/2'>
          <p className='text-parColor font-barlow text-2xl md:text-2xl'>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className='text-[5rem] font-bellefair mb-5 md:text-[10rem]'>SPACE</h1>
          <p className='text-parColor mb-[6rem] md:px-[5rem] md:text-xl md:mb-[15rem] lg:px-0 lg:mb-0'> 
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className='lg:flex justify-center items-center lg:w-1/2'>
          <button className='font-bellefair p-10 bg-white text-black rounded-[50%] text-xl md:text-4xl md:px-[6rem] md:py-[8rem] lg:px-[3rem] lg:py-[5rem]'>EXPLORE</button>
        </div>
    </main>
    
  )
}

export default Home