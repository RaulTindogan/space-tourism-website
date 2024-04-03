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
            bg-[url('src/assets/destination/background-destination-mobile.jpg')]
            bg-cover
            bg-no-repeat
            min-h-[100vh] 
            pt-[7rem]
            pb-10
            text-white
            px-5
            sm:px-10
            lg:pt-[10rem]
            lg:flex
            `}
    >
      <section className='flex flex-col justify-center mb-10 lg:w-[40%] lg:justify-start'>
        <h1 className="text-2xl text-center mb-10 md:text-left"><span>01</span> Pick your destination</h1>
        <div className='flex justify-center items-center'>
          <img src={displayData.images.webp} alt="Moon" className='w-3/4 h-3/4 sm:w-1/2 sm:h-1/2 lg:w-full lg:h-full'/>
        </div>
      </section>
      <section className='sm:px-[5rem] lg:w-[60%] lg:pt-[5rem]'>
        <nav>
          <ul className='flex gap-x-5 justify-center lg:justify-start lg:gap-x-10'>
            {
              destinationLinks.map((link, index)=>(
                <li key={index} onClick={()=>{activeData(index), handleActiveItem(link)}} className={`cursor-pointer ${activeItem===link? ' text-[red]' : ''}`}>{link}</li>
              ))
            }
          </ul>
        </nav>
        <div>
          <div className='text-center lg:text-left'>
            <h2 className='font-bellefair uppercase text-[5rem] my-5'>{displayData.name}</h2>
            <p className=''>{displayData.description}</p>
          </div>
         <hr className='my-10'/>
         <div className='text-center lg:flex lg:gap-[5rem]'>
          <div className='mb-5'>
            <p>Avg. distance</p>
            <h3 className='text-3xl'>{displayData.distance}</h3>
          </div>
          <div>
            <p>Est. travel time</p>
            <h3 className='text-3xl'>{displayData.travel}</h3>
          </div>
         </div>
        </div>
      </section>
    </main> 
  )
}

export default Destination