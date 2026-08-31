import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router';
import { addUser, removeUser } from '../Utilites/UserSlice';
import Cookies from "js-cookie";
import { toast } from 'react-toastify';
const Navbar = () => {
    const navigate = useNavigate()
    const disaptch = useDispatch()
    const token = Cookies.get("token");


    const getUser = async () => {
        try {
            // console.log('highSwex')
            const userData = await axios.get(`http://localhost:3000/profileView`, { withCredentials: true })
            // console.log(userData.data.status, 'userData')
            disaptch(addUser(userData?.data?.status))

        } catch (e) {
            navigate('/login')
        }
    }

    const logouts = async () => {
        try {
            const userData = await axios.post(`http://localhost:3000/logout`, {}, { withCredentials: true })


            navigate('/login')
            toast.success('logout succesfully')
            disaptch(removeUser())
        } catch (e) {
            navigate('/login')
        }

    }

    const selector = useSelector((store) => store.user);
    const { emailId, photoUrl, firstName, lastName } = selector || {};
    // console.log(selector, 'selectorselector')
    useEffect(() => {
        console.log('herer', emailId)
        if (!emailId && token) {
            // console.log('yoooooo')
            getUser()

        } else {
            console.log('in else')
              navigate('/login')
        }
    }, [emailId])
    return (
        <div>
            <div className="navbar bg-base-200 shadow-sm">
                <div className="flex-1" onClick={() => navigate('/feed')}>
                    <a className="btn btn-ghost text-xl">DevTinder</a>
                </div>
                {emailId ? <div className="flex-none">
                    <div className=" ">
                        <p>Hello,{firstName} {lastName}</p>
                        </div >
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={photoUrl || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                                </div>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li onClick={() => navigate('/todo')}>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <Link to={'/roughWork'}><li>Settings</li>
                                </Link>

                                <li onClick={() => { logouts() }}><a>Logout</a></li>
                            </ul>
                        </div>
                    </div > : null}

                </div>

        </div>
            )
}

            export default Navbar
