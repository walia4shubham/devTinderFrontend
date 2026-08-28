import React from 'react'
import { Link } from 'react-router'

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">

          {/* Header */}
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold">Create Account</h2>
            <p className="text-base-content/60 mt-1">Sign up to get started</p>
          </div>

          <form className="flex flex-col gap-3 mt-2">

            {/* Name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Full Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full"
              />
            </label>

            {/* Email */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Email</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
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
              />
            </label>

            {/* Confirm Password */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                className="input input-bordered w-full"
              />
            </label>

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
   

      

        </div>
      </div>
    </div>
  )
}

export default SignUp