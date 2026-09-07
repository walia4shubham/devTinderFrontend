import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

const SignUp = () => {
  const navigate = useNavigate()
  const [signUpdata, setSignUpData] = useState({
     firstName: "michael",
    lastName: "jackson",
    age: "33",
    photoUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQf9tcA6vC0X0IU37JpD6ValFo_PNgTnBhcNOR9KMpi5oVuS0sv",
    description: "",
    emailId:'michael@yopmail.com',
    password:'ab'
  })

  const handleChange =(e) =>{
    const {name,value} = e.target
    console.log(name,'ramm',value)
    setSignUpData({...signUpdata,[name]: e.target.value})

  }


  const handleSubmit =async (e) =>{
e.preventDefault();
    console.log(signUpdata,'signUpdata')
    try{
    const saveData = await axios.post( `${import.meta.env.VITE_API_URL}/signUp`,{...signUpdata})
    console.log(saveData,'saveData')
    toast.success('Your account has been created')
    navigate('/login')
    }catch(e){
      console.log(e.response )
   toast.error(
           e.response?.data.error || "Something went wrong"
         );
    }

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">

          {/* Header */}
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold">Create Account</h2>
            <p className="text-base-content/60 mt-1">Sign up to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">

            {/* Name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Full Name</span>
              </div>
              <input
                type="text"
                name="firstName"
                placeholder="John Doe"
                className="input input-bordered w-full"
                value={signUpdata.firstName}
                required={true}
                onChange={handleChange}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Last Name</span>
              </div>
              <input
                type="lastName"
                name="lastName"
                placeholder="doe"
                className="input input-bordered w-full"
                    value={signUpdata.lastName}
                     onChange={handleChange}
                      required={true}
              />
            </label>
               <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Photo Url</span>
              </div>
              <input
                type="photoUrl"
                name="photoUrl"
                placeholder="doe"
                className="input input-bordered w-full"
                    value={signUpdata.photoUrl}
                     onChange={handleChange}
                      required={true}
              />
            </label>
                <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Age</span>
              </div>
              <input
                type="age"
                name="age"
                placeholder="20"
                className="input input-bordered w-full"
                    value={signUpdata.age}
                     onChange={handleChange}
                      required={true}
              />
            </label>
            {/* Email */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Email</span>
              </div>
              <input
                type="emailId"
                name="emailId"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                 value={signUpdata.emailId}
                  onChange={handleChange}
                   required={true}
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
                 value={signUpdata.password}
                  onChange={handleChange}
                   required={true}
              />
            </label>

            {/* Confirm Password */}

            {/* Terms checkbox */}
            <label className="label cursor-pointer justify-start gap-2 mt-1">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <span className="label-text">
                I agree to the <a className="link link-primary">Terms & Conditions</a>
              </span>
            </label>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-full mt-2">
              Sign Up
            </button>
          </form>

          {/* Divider */}
      <ToastContainer />

      

        </div>
      </div>
    </div>
  )
}

export default SignUp