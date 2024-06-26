import React, { useState } from 'react'
import data from '/public/assets/data.json'

function Technology() {
//   console.log(data.technology[1])
  const [activeData, setactiveData] = useState(data.technology[0])
  const [activeButton, setactiveButton] = useState('1')
  
  function handleactiveData(index) {
    setactiveData(data.technology[index])
  }

  function handleactiveButton(index) {
    setactiveButton(index)
  }
  const buttons = ['1', '2', '3']
  return (
    <main
      className={`
        max-w-[1440px] mx-auto
        bg-[url('https://raw.githubusercontent.com/RaulTindogan/space-tourism-website/main/public/assets/technology/background-technology-mobile.jpg')]
        md:bg-[url('https://github.com/RaulTindogan/space-tourism-website/blob/main/public/assets/technology/background-technology-tablet.jpg')]
        lg:bg-[url('https://raw.githubusercontent.com/RaulTindogan/space-tourism-website/main/public/assets/technology/background-technology-desktop.jpg')]
        bg-cover
        bg-no-repeat
        min-h-[100vh] 
        pt-[8rem]
        pb-10
        text-white
        md:pl-10
        lg:pt-[12rem]
        lg:px-[5rem]
      `}
    >
      <h1 className="
          text-xl text-center mb-10
          md:text-left
          font-barlow
          md:text-[2rem]
          lg:mb-[5rem]
          tracking-widest
        "><span className='text-grayish font-[600] mr-5'>03</span> SPACE LAUCH 101</h1>
      <div className='md:flex md:flex-row-reverse lg:px-[5rem]'>
        <section className='mb-10 md:w-[40%] md:mb-0 md:flex justify-center items-center'>
              <picture className='flex justify-center mb-5 md:mb-0'>
                  <source srcSet={activeData.images.portrait} media='(min-width: 768px)' />
                  <img src={activeData.images.landscape} alt="" className='md:w-[100%]'/>
              </picture>
          </section>
          <section className="px-5 sm:px-10 text-center md:w-[60%] md:flex md:px-0">
              <div className='mb-5 flex justify-center md:flex-col md:items-center md:mb-0'>
                  {
                      buttons.map((button, index)=>(
                          <button key={index} onClick={()=>{handleactiveButton(button), handleactiveData(index)}}className={`font-bellefair border-[1px] border-white py-2 px-4 mx-2 my-2 rounded-[50%] md:py-3 md:px-6 md:text-2xl md:mb-5 ${activeButton==button? ' bg-white text-black' : ' bg-transparent'}`}>{button}</button>
                      ))
                  }
              </div>
              <div className="md:flex flex-col justify-center md:text-left md:px-10">
                <p className='text-parColor lg:text-xl lg:mb-3'>THE TERMINOLOGY...</p>
                <h2 className='font-[800] text-3xl uppercase mt-3 mb-10 md:mb-5 font-bellefair lg:text-[3rem] lg:mb-10'>{activeData.name}</h2>
                <p className='text-parColor sm:px-[5rem] md:px-0 lg:leading-9'>{activeData.description}</p>
              </div>
          </section>
      </div>
    </main>
  )
}

export default Technology