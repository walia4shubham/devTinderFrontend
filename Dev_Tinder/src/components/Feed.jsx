import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addfeed } from '../Utilites/feedSlice';
import CardComponent from './CardComponent';
const Feed = () => {
 const dispatch = useDispatch();
 const feedSelector = useSelector((store) => store.feed);
  const getFeed = async () => {
    try {
      const feed = await axios.get( `${import.meta.env.VITE_API_URL}/feed`, { withCredentials: true });
     dispatch(addfeed(feed?.data?.message))
    } catch (e) {
      toast.error(
        e.response?.data?.message || "Something went wrong"
      );
    }
  }
    const reviewing =async (type,id)=>{
    console.log(type,id,'rammm',feedSelector)

    // return null

      const requestConnection = await axios.post( `${import.meta.env.VITE_API_URL}/request/send/${type}/${id}`,{}, { withCredentials: true });
      let filter = feedSelector.filter((data) =>{ return  data._id != id
      })
   dispatch(addfeed(filter))
    console.log(requestConnection,'connection')

  }
  useEffect(() => {
    if(!feedSelector){
      getFeed()
    }

  }, [])

  return (
    <div>
      <ToastContainer />
      <CardComponent feedSelector={feedSelector} reviewing={reviewing}/>
    </div>
  )
}

export default Feed
