import React, { useState } from 'react'

const useCounter = ({ e }) => {

    const [data, setData] = useState(0)

    const increment = () => {
        setData(data + 1)

    }
    const decrement = () => {
        setData(data - 1)
    }
    return [increment, decrement, data]



}

export default useCounter
