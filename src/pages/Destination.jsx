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
            pt-[10rem]
            pb-10
            text-white
            px-5
            sm:px-[10rem]
            `}
    >
      <section className='flex flex-col justify-center mb-5 bg-no'>
        <h1 className="text-xl text-center mb-10"><span>01</span> Pick your destination</h1>
        <div className='flex justify-center items-center'>
          <img src={displayData.images.webp} alt="Moon" className='w-3/4 h-3/4'/>
        </div>
      </section>
      <section>
        <nav>
          <ul className='flex gap-x-5 justify-center'>
            {
              destinationLinks.map((link, index)=>(
                <li key={index} onClick={()=>{activeData(index), handleActiveItem(link)}} className={`cursor-pointer ${activeItem===link? ' text-[red]' : ''}`}>{link}</li>
              ))
            }
          </ul>
        </nav>
        <div>
          <div className='text-center'>
            <h2 className='text-[5rem] my-5'>{displayData.name}</h2>
            <p>{displayData.description}</p>
          </div>
         <hr className='my-10'/>
         <div className='text-center'>
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