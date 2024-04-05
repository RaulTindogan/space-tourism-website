import { useState } from 'react'
import data from '../assets/data.json'

function Destination() {
  const [displayData, setdisplayData] = useState(data.destinations[0])
  const activeData = (index) => {
    setdisplayData(data.destinations[index])
  }

  const [activeItem, setactiveItem] = useState('MOON')

  const handleActiveItem = (item) => {
    setactiveItem(item)
  }

  const destinationLinks = ['MOON', 'MARS', 'EUROPA', 'TITAN']
  return (
    <main 
        className={`
            max-w-[1440px] mx-auto
            bg-[url('src/assets/destination/background-destination-mobile.jpg')]
            bg-cover
            bg-no-repeat
            min-h-[100vh] 
            pt-[7rem]
            pb-10
            text-white
            px-5
            sm:px-10
            md:bg-[url('src/assets/destination/background-destination-desktop.jpg')]
            md:pt-[10rem]
            lg:flex
            lg:pt-[12rem]
            `}
    >
      <section className='flex flex-col justify-center mb-10 lg:w-[40%] lg:justify-start'>
        <h1 className="tracking-widest text-2xl text-center mb-10 md:text-left md:text-[2rem] md:mb-[6rem]"><span className='font-[600] text-grayish mr-5'>01</span> PICK YOUR DESTINATION</h1>
        <div className='flex justify-center items-center'>
          <img src={displayData.images.webp} alt="Moon" className='w-3/4 h-3/4 sm:w-1/2 sm:h-1/2 lg:w-full lg:h-full'/>
        </div>
      </section>
      <section className='sm:px-[5rem] lg:w-[60%] lg:pt-[5rem] lg:pl-[10rem]'>
        <nav>
          <ul className='flex gap-x-5 justify-center lg:justify-start lg:gap-x-[3rem]'>
            {
              destinationLinks.map((link, index)=>(
                <li key={index} onClick={()=>{activeData(index), handleActiveItem(link)}} className={`cursor-pointer pb-2 lg:text-2xl${activeItem===link? ' border-b-2 border-white' : ' text-parColor'}`}>{link}</li>
              ))
            }
          </ul>
        </nav>
        <div>
          <div className='text-center lg:text-left'>
            <h2 className='font-bellefair uppercase text-[5rem] my-5 lg:text-[7rem]'>{displayData.name}</h2>
            <p className='text-parColor lg:text-2xl lg:leading-10'>{displayData.description}</p>
          </div>
         <hr className='my-10'/>
         <div className='text-center lg:flex lg:gap-[5rem] lg:text-left'>
          <div className='mb-5'>
            <p className='text-parColor'>Avg. distance</p>
            <h3 className='text-3xl uppercase font-bellefair'>{displayData.distance}</h3>
          </div>
          <div>
            <p className='text-parColor'>Est. travel time</p>
            <h3 className='text-3xl uppercase font-bellefair'>{displayData.travel}</h3>
          </div>
         </div>
        </div>
      </section>
    </main> 
  )
}

export default Destination