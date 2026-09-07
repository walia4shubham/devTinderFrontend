import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { socket } from '../Utilites/socket';
import { useSelector } from 'react-redux';

const ChatSocket = () => {

    const { otheUserId } = useParams();
    const [message, setMessages] = useState([{ text: 'Hello World' }])
    console.log(otheUserId)
    const loggedInUser = useSelector((store) => store?.user);
    useEffect(() => {
        if (loggedInUser?._id) {
            socket.emit("joinChat", {
                toUserId: otheUserId,
                fromuserId: loggedInUser?._id,
                name: loggedInUser.firstName
            }
            );

            return () => {
                socket.disconnect()
            }
        }

    }, [otheUserId])
    return (
        <div>
            <div className="min-h-screen bg-[#181d23] flex justify-center items-center p-5">
                <div className="w-full max-w-5xl h-[750px] border border-gray-700 flex flex-col">

                    <div className="h-16 border-b border-gray-700 flex items-center px-5">
                        <h2 className="text-gray-300 font-semibold">Chat</h2>
                    </div>
                    {message && message.length ? message.map((data) => {
                        return <div className="flex-1 p-8 overflow-y-auto">

                            <div className="flex flex-col items-start">
                                <div className="flex items-center gap-1 text-sm text-gray-400 mb-1">
                                    <span className="font-semibold text-gray-300">
                                        Akshay Saini
                                    </span>
                                    <span>2 hours ago</span>
                                </div>

                                <div className="bg-gray-700 text-gray-200 px-5 py-3 rounded-2xl rounded-tl-sm">
                                    {data.text}
                                </div>

                                <span className="text-xs text-gray-500 mt-1">
                                    Seen
                                </span>
                            </div>

                        </div>
                    }) : 'No record Found'}



                    <div className="border-t border-gray-700 p-5">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                className="flex-1 bg-black border border-gray-600 rounded-md px-4 py-3 text-white outline-none focus:border-pink-500"
                            />

                            <button  className="bg-pink-500 hover:bg-pink-600 text-black font-semibold px-6 rounded-md">
                                Send
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChatSocket
