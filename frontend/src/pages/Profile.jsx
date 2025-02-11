import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Profile = () => {
  const [userData, setUserData] = useState({
    name :"Raj Kumar",
    image : assets.profile_pic,
    email: "rajkumar@gmail.com",
    phone: "+91 7787898091",
    address:{
      lin1: "flat no-9, Lavira Park, Kothrud",
      line2: "Pune-411008, India"
    },
    gender:"Male",
    dob:"2004-11-11",
  });
 

  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <div className='max-w-lg flex flex-col  gap-4 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt=""   />
      {
        isUpdate  ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev =>({...prev,name:e.target.value}))}/> : <p className='font-medium text-neutral-800 mt-4 text-3xl' >{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isUpdate ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev =>({...prev,phone:e.target.value}))}/> : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isUpdate ? <p>
              <input className='bg-gray-50' type="text" value={userData.address.lin1} onChange={e => setUserData(prev =>({...prev,address:{...prev.address,lin1:e.target.value}}))}/> 
              <br />
              <input className='bg-gray-50' type="text" value={userData.address.line2} onChange={e => setUserData(prev =>({...prev,address:{...prev.address,line2:e.target.value}}))}/> 
            </p> : <p className='text-gray-500'>{userData.address.lin1} <br />  {userData.address.line2}</p>
          }
         
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isUpdate ? <select className='max-w-20 bg-gray-100 ' name="" id="" onChange={(e)=> setUserData(prev => ({...prev, gender:e.target.value}))} value={userData.gender} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> : <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isUpdate ? <input className='max-w-28 bg-gray-100' type="date" value={userData.dob} onChange={e => setUserData(prev =>({...prev,dob:e.target.value}))}/> : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>
      <div className='mt-10'>
        {
          isUpdate ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500' onClick={() => setIsUpdate(false)}>Save Information</button> : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500' onClick={() => setIsUpdate(true)}>Update</button>
        }
      </div>
    </div>
  )
}

export default Profile
