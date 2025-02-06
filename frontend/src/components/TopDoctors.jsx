import React from 'react'
import { doctors } from '../assets/assets_frontend/assets'

const TopDoctors = () => {
  return (
    <div className=''>
      <h1>Top Doctors to Book</h1>
      <p>Simpy browse through our extensive list of trusted doctors.</p>
      <div>
        {doctors.slice(0,10).map((item,index)=>(
            <div>
                <img src={item.image} alt="" />
                <div>
                    <p></p><p>Available</p>
                </div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>

            </div>

        ))}
      </div>
      <button>more</button>
    </div>
  )
}

export default TopDoctors
