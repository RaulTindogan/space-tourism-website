import React, { useState } from 'react'
import data from '../assets/data.json'

function Crew() {
  console.log(data.crew)
  const [activeCrew, setactiveCrew] = useState(data.crew[0])
  const [activeButton, setactiveButton] = useState('')
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
        bg-[url('src/assets/crew/background-crew-mobile.jpg')]
        bg-cover
        bg-no-repeat
        min-h-[100vh] 
        pt-[8rem]
        pb-10
        text-white
        px-5
        sm:px-10
      `}
    >
      <h1 className="
          text-xl text-center mb-10
          md:text-left
      "><span>02</span> MEET YOUR CREW</h1>
      <section className='flex flex-col items-center mb-10'>
        <div className='mb-3'>
          <picture className='flex justify-center'>
            <img src={activeCrew.images.webp} alt="" />
          </picture>
        </div>
        <div>
          {
            buttons.map((index, button)=> (
                <button key={index} onClick={()=>{assignActiveCrew(index), handleactiveButton(button)}} className={`bg-white p-2 mx-2 rounded-full ${activeButton==button? ' bg-[red]': ''}`}></button>
            ))
          }
          
          {/* <button className='bg-white p-2 mx-2 rounded-full'></button>
          <button className='bg-white p-2 mx-2 rounded-full'></button>
          <button className='bg-white p-2 mx-2 rounded-full'></button>
          <button className='bg-white p-2 mx-2 rounded-full'></button> */}
        </div>
      </section>
      <section className='text-center'>
        <p className='text-xl mb-2'>{activeCrew.role}</p>
        <h2 className='text-3xl mb-5'>{activeCrew.name}</h2>
        <p className='px-10 sm:px-[5rem]'>{activeCrew.bio}</p>
      </section>
    </main>
  )
}

export default Crew