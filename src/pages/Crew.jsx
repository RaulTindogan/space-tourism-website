import React, { useState } from 'react'
import data from '../assets/data.json'

function Crew() {
  console.log(data.crew)
  const [activeCrew, setactiveCrew] = useState(data.crew[0])
  const [activeButton, setactiveButton] = useState('0')
  function assignActiveCrew(index) {
    setactiveCrew(data.crew[index])
  }

  function handleactiveButton (index) {
    setactiveButton(index)
  }

  const buttons = ['0', '1', '2', '3']
  return (
    <main
      className={`
        max-w-[1440px] mx-auto
        bg-[url('src/assets/crew/background-crew-mobile.jpg')]
        md:bg-[url('src/assets/crew/background-crew-tablet.jpg')]
        lg:bg-[url('src/assets/crew/background-crew-desktop.jpg')]
        bg-cover
        bg-no-repeat
        min-h-[100vh] 
        pt-[8rem]
        lg:pt-[10rem]
        pb-10
        text-white
        px-5
        sm:px-10
        lg:pb-0
      `}
    >
      <h1 className="
          tracking-widest text-2xl text-center mb-10 md:text-left md:text-[2rem] md:mb-[5rem] lg:mb-[5rem] lg:mt-[2rem]
      "><span className="font-[600] text-grayish mr-3">02</span> MEET YOUR CREW</h1>
      <div className="lg:flex lg:flex-row-reverse lg:px-[5rem]">
        <section className='flex flex-col items-center mb-3 lg:w-[50%] lg:mb-0'>
          <div>
            <picture className='flex justify-center'>
              <source media="(min-width: 768px)" srcSet={activeCrew.images.webp} />
              <img src={activeCrew.images.png} alt="" className='max-w-[60%] lg:max-w-full'/>
            </picture>
          </div>
        </section>
        <section className='text-center lg:flex lg:flex-col-reverse lg:justify-center lg:w-[50%] lg:text-left lg:pr-10'>
          <div className='mb-10 lg:mb-0 lg:mt-[7rem]'>
              {
                buttons.map((index, button)=> (
                    <button key={index} onClick={()=>{assignActiveCrew(index), handleactiveButton(button)}} className={`p-2 mx-2 rounded-full ${activeButton==button? ' bg-white': 'bg-grayish'}`}></button>
                ))
              }
          </div>
         <div>
          <p className='text-xl text-grayish mb-2 uppercase font-bellefair lg:mb-5 lg:text-3xl'>{activeCrew.role}</p>
          <h2 className='font-[800] text-2xl mb-5 font-bellefair uppercase lg:text-[3rem] lg:leading-[3rem] lg:mb-[3rem]'>{activeCrew.name}</h2>
          <p className='text-parColor font-[400] px-2 sm:px-[5rem] lg:px-0 lg:text-[1.5rem] lg:leading-[2rem]'>{activeCrew.bio}</p>
         </div>
        </section>
      </div>
      
    </main>
  )
}

export default Crew