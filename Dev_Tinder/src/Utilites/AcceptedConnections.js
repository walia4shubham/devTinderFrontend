import { createSlice } from "@reduxjs/toolkit"

const acceptedConnectionSlice = createSlice({
    name: "acceptedConnection",

    initialState: null,

    reducers: {
        acceptedConnection: (state, action) => {
            return action.payload
        },

       
    }
})

export const {acceptedConnection } = acceptedConnectionSlice.actions
export default acceptedConnectionSlice.reducer