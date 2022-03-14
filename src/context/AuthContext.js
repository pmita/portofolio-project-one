import { createContext, useReducer, useEffect } from 'react';
import { projectAuth } from '../firebase/config';

//Inititate our Context
export const AuthContext = createContext();

//useReducer state
const authReducer = (state, action) => {
    switch(action.type){
        case 'SIGNIN':
            return { ...state };
        case 'SIGNUP':
            return { ...state };
        case 'SIGNOUT':
            return { ...state };
        case 'AUTH_IS_READY':
            return { user: action.payload, authIsReady: true };
        default:
            return { ...state };
    }
}

//useReducer initial state
let initialState = {
    user: null,
    authIsReady: false
}

export const AuthContextProvider = ({ children }) => {
    //STATE & VARIABLES
    const [state, dispatch] = useReducer(authReducer, initialState)

    //useEFFECT
    useEffect(() => {
        const unsubscribe = projectAuth.onAuthStateChanged((user) => {
            //if user doesn't exist then we simply pass an empty object down our payload
            dispatch({ type: 'AUTH_IS_READY', payload: user });
        })

        //clean-up function to avoid side effects
        return () => unsubscribe()
    }, [])

    return(
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}
