
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addfeed } from '../Utilites/feedSlice';
import CardComponent from './CardComponent';
import { requestConnectionsUser } from '../Utilites/requestConnectionSlice';

const RequestConnections = () => {
const dispatch = useDispatch();
 const requestSelector = useSelector((store) => store.requestConnetions);
    const getFeed = async () => {
    try {
      const requestConnection = await axios.get( `${import.meta.env.VITE_API_URL}/user/request`, { withCredentials: true });
     dispatch(requestConnectionsUser(requestConnection?.data?.data))
    console.log(requestConnection,'connection')
    } catch (e) {
      toast.error(
        e.response?.data?.message || "Something went wrong"
      );
    }
  }
  console.log(requestSelector,'requestSelector')
  useEffect(() => {
    if(true){
      getFeed()
    }

  }, [])

  const reviewing =async (type,id)=>{
    console.log(type,id,'rammm')

    // return null

      const requestConnection = await axios.patch( `${import.meta.env.VITE_API_URL}/request/review/${type}/${id}`,{}, { withCredentials: true });
      let filter = requestSelector.filter((data) =>{ return  data._id != id
      })
     dispatch(requestConnectionsUser(filter))
    console.log(requestConnection,'connection')

  }
  return (
     <div className="min-h-screen bg-base-200 py-10 px-4">

      <h1 className="text-3xl font-bold text-center mb-8">
        Connection Requests
      </h1>

      {requestSelector && requestSelector.length?  requestSelector.map((user) =>{
      return <div
            key={user._id}
            className="bg-base-300 rounded-lg shadow-md p-5
                       flex items-center gap-5"
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

            {/* Buttons */}
            <div className="flex gap-3">

              <button onClick={() =>reviewing('rejected',user?._id)} className="btn btn-primary">
                Reject
              </button>

              <button onClick={() =>reviewing('accepted',user?._id)} className="btn btn-secondary">
                Accept
              </button>

            </div>

          </div>
      })   : <>No record Found</>}

      <div className="max-w-3xl mx-auto space-y-4">

    

      </div>
    </div>
  );
};


export default RequestConnections
