import { createSlice } from "@reduxjs/toolkit"

const requestconnectionSlice = createSlice({
    name: "requestconnection",

    initialState: {
        name: "",
        isLoggedIn: false
    },

    reducers: {
        requestConnectionsUser: (state, action) => {
            return action.payload
        },

        removerequestConnectionsUser: (state) => {
             return null
        }
    }
})

export const { requestConnectionsUser, removerequestConnectionsUser } = requestconnectionSlice.actions
export default requestconnectionSlice.reducer