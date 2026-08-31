import React, { useState,useRef, useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utilites/UserSlice';
import { useNavigate } from 'react-router';
import Cookies from "js-cookie";
import { isToken } from '../Utilites/Storage';
import { toast } from 'react-toastify';
const login = () => {
  const ref = useRef();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(ref,'reffff')
   const token = Cookies.get("token");
  useEffect(() =>{
    console.log(isToken,'isTokenisToken');
    
     if(isToken){
      return navigate('/feed')
     }
  },[])

  const [loginData, setLoginDate] = useState({ email: 'lovedsdsds123@gmail.com', password: 'ab' })
  const handlelogin = async (e) => {
    try {
      ref.current.style.color = 'red'
      e.preventDefault()
      console.log(loginData)
      const login = await axios.post('http://localhost:3000/login', {
        emailId: loginData.email, password: loginData.password
      },{ withCredentials: true });
      toast.success('succesfully loged in')
  navigate('/feed')
      dispatch(addUser(login?.data?.data))
    } catch(e) {
       console.log(e,'errorr')
    }


  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="card w-full max-w-md bg-base-100 shadow-2xl">
          <div className="card-body">

            {/* Header */}
            <div className="text-center mb-2">
              <h2 className="text-3xl font-bold">Log In</h2>
              {/* <p className="text-base-content/60 mt-1">Sign up to get started</p> */}
            </div>
            <form className="flex flex-col gap-3 mt-2">
              {/* Email */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-medium">Email</span>
                </div>
                <input
                ref={ref}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  onChange={(e) => { setLoginDate({ ...loginData, email: e.target.value }) }}
                  value={loginData.email}
                />
              </label>

              {/* Password */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-medium">Password</span>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full"
                  onChange={(e) => { setLoginDate({ ...loginData, password: e.target.value }) }}
                />
              </label>

              {/* Submit */}
              <button type="submit" className="btn btn-primary w-full mt-2" onClick={handlelogin}>
                log In
              </button>
            </form>


          </div>
        </div>
      </div>
    </div>
  )
}

export default login
