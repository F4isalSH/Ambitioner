import React, { createContext, useReducer } from 'react';
import firebase from 'firebase/app'
 type Actions =
 | {type: 'LOGIN'; payload: firebase.User };




export const AuthContext = createContext(null)

export const authReducer = (state:any, action: Actions)=>{
    switch (action.type){
        case 'LOGIN':
            return {...state, user: action.payload}
        default:
            return state
    }
}

export const AuthContextProvider: React.FC = ({children}) =>{
    const [state, dispatch] = useReducer(authReducer, {
        user:null
    })

    return(
        <AuthContext.Provider value ={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
