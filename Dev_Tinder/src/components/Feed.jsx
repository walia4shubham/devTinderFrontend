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
      const feed = await axios.get('http://localhost:3000/feed', { withCredentials: true });
     dispatch(addfeed(feed?.data?.message))
    } catch (e) {
      toast.error(
        e.response?.data?.message || "Something went wrong"
      );
    }
  }
  useEffect(() => {
    if(!feedSelector){
      getFeed()
    }

  }, [])

  return (
    <div>
      <ToastContainer />
      <CardComponent feedSelector={feedSelector} />
    </div>
  )
}

export default Feed
