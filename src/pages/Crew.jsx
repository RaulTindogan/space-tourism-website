import React from 'react'

function Crew() {
  return (
    <main
      className={`
        bg-[url('src/assets/crew/background-crew-mobile.jpg')]
        bg-cover
        bg-no-repeat
        min-h-[100vh] 
        pt-[10rem]
        pb-10
        text-white
        px-5
        sm:px-[10rem]
      `}
    >
      <h1 className="text-xl text-center mb-10"><span>02</span> MEET YOUR CREW</h1>
      <section>
        <div>
          <picture>
            <img src="./src/assets/crew/image-douglas-hurley.webp" alt="" />
          </picture>
        </div>
        <div>
          <button className='bg-white p-2 mx-5 rounded-full'></button>
          <button className='bg-white p-2 mx-5 rounded-full'></button>
          <button className='bg-white p-2 mx-5 rounded-full'></button>
          <button className='bg-white p-2 mx-5 rounded-full'></button>
        </div>
      </section>
      <section>
        <p>Commander</p>
        <h2>Douglas Hurley</h2>
        <p> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
            and former NASA astronaut. He launched into space for the third time as 
            commander of Crew Dragon Demo-2.
        </p>
      </section>
    </main>
  )
}

export default Crew