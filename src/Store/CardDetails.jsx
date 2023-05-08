import  {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    id: 0,
    firstName: "Olayinka",
    lastName: "",
    maidenName: " ",
    age: 0,
    gender: " ",
    email: "",
    phoneNumber: "",
    username: "",
    password: ""
}

export const CardDetailsSlice = createSlice({
    name: 'cardDetails',
    initialState: initialValue,
    reducers: {
        addFirstName:(state, action)=> {
            state.firstName =action.payload
        },
        addLastName:(state, action)=> {
            state.lastName =action.payload
        },
        addMaidenName:(state, action)=> {
            state.maidenName =action.payload
        },
        addId:(state, action)=> {
            state.id =action.payload
        },
        addGender:(state, action)=> {
            state.gender =action.payload
        },
        addEmail:(state, action)=> {
            state.email =action.payload
        },
        addPhoneNumber:(state, action)=> {
            state.phoneNumber =action.payload
        },
        addUsername:(state, action)=> {
            state.username =action.payload
        },
        addPassword:(state, action)=> {
            state.password =action.payload
        },
        addAge:(state, action)=> {
            state.age =action.payload
        },

    },
})

export const{addFirstName, addLastName, addMaidenName, addEmail, addGender, addUsername, addPhoneNumber, addPassword, addId } = CardDetailsSlice.actions

export default CardDetailsSlice.reducer