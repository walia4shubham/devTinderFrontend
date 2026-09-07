import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { acceptedConnection } from '../Utilites/AcceptedConnections.js';
import { useNavigate } from 'react-router';

const RoughWork = () => {
  const navigate = useNavigate()
 const dispatch = useDispatch();
 const acceptedSelector = useSelector((store) => store.acceptedConnection);
    const getFeed = async () => {
    try {
      const connection = await axios.get( `${import.meta.env.VITE_API_URL}/user/cooneections`, { withCredentials: true });
      console.log(connection.data.data,'connection')
     dispatch(acceptedConnection(connection?.data?.data))
    } catch (e) {
      console.log(e,'error')
      toast.error(
        e.response?.data?.message || "Something went wrong"
      );
    }
  }
  useEffect(() => {
 
    getFeed()

  }, [])

  console.log(acceptedSelector,'acceptedSelector')
  return (
    <div>
      {acceptedSelector && acceptedSelector.length ?  acceptedSelector.map((user) =>{
      return <div
            key={user._id}
            className="bg-base-300 rounded-lg shadow-md p-5
                       flex items-center gap-5"
                       onClick={() =>navigate(`/chat/${user._id}`)}
          >

            {/* Profile Image */}
            <div className="avatar">
              <div className="w-16 h-16 rounded-full">
                <img
                  src={
                    user.fromUserId.photoUrl ||
                    "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                  }
                  alt={user.fromUserId.firstName}
                />
              </div>
            </div>

            {/* User Details */}
            <div className="flex-1">
              <h2 className="text-lg font-bold">
                {user.fromUserId.firstName} {user.fromUserId.lastName}
              </h2>

              <p className="text-sm opacity-70">
                {user.fromUserId.description}
              </p>
              
            </div>
          </div>
      })   :  'No recored Found'}
      
    </div>
  )
}

export default RoughWork
