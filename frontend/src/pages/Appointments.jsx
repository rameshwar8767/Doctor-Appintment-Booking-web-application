import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/Context';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets';

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(""); // Add state to track selected time

  // Fetch doctor info
  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  // Get available time slots
  const getAvilableSlots = async () => {
    setDocSlot([]); // Reset the slots first

    let today = new Date();
    let allSlots = []; // Create a new array to accumulate the slots

    for (let i = 0; i < 7; i++) {
      let currDate = new Date(today); // Create a new Date object for each iteration
      currDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currDate.getDate()) {
        currDate.setHours(currDate.getHours() > 10 ? currDate.getHours() + 1 : 10);
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currDate.setHours(0);
        currDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currDate < endTime) {
        let formattedTime = currDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currDate),
          time: formattedTime
        });

        currDate.setMinutes(currDate.getMinutes() + 30); // Increment by 30 minutes
      }

      allSlots.push(timeSlots); // Add the new timeSlots to the accumulator array
    }

    setDocSlot(allSlots); // Update the state once at the end
  };

  // Fetch doctor info when component is mounted or doctors data changes
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  // Get available slots when docInfo changes
  useEffect(() => {
    if (docInfo) {
      getAvilableSlots(); // Properly call the function
    }
  }, [docInfo]);

  // Debugging: Log available slots
  useEffect(() => {
    console.log(docSlot);
  }, [docSlot]);

  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full '>{docInfo.experience}</button>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Slots Section */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlot.length > 0 ? docSlot.map((slot, index) => (
              <div 
                onClick={() => setSlotIndex(index)} 
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} 
                key={index}
              >
                {/* Display the day of the week */}
                <p>{daysOfWeek[slot[0].datetime.getDay()]}</p>
                {/* Display the date */}
                <p>{slot[0].datetime.getDate()}</p>
              </div>
            )) : <p>No available slots</p>
          }
        </div>

        {/* Display time slots for the selected day */}
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlot.length && docSlot[slotIndex] && docSlot[slotIndex].map((item, index) => (
              <p 
                onClick={() => setSlotTime(item.time)} 
                className={`text-sm font-light flex-shrink-0 px-5 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white ' : 'text-gray-400 border border-gray-300'}`} 
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 '>Book an appointment</button>
      </div>
    </div>
  );
};

export default Appointments;
