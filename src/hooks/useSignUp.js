import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config';
//HOOKS
import { useAuthContext } from './useAuthContext';

export const useSignUp = () => {
    //STATE & VARIABLES
    const [isCancelled, setIsCancelled] = useState(false)
    const [isPending, setIsPending] = useState(false);
    const [error, setIsError] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) => {
        //RESET STATE BEFORE SIGNING THE USER UP
        setIsError(null);
        setIsPending(true);

        //INIT SIGNIN THE USER UP
        try{
            const response = await projectAuth.createUserWithEmailAndPassword(email, password);

            if(!response){
                throw new Error('Could not complete signin up!')
            }

            //UPDATE USER DOC IN USERS COLLECTION
            await projectFirestore.collection('users').doc(response.user.uid).set({
                displayName: displayName
            });

            //UPDATE USER CONTEXT STATE
            dispatch({ type: 'SIGNUP', payload: response.user });

            //RESET STATE
            if(!isCancelled){
                setIsPending(false);
                setIsError(null);
            }

        }catch(err){
            //CATCH ERRORS
            if(!isCancelled){
                setIsPending(false);
                setIsError(err.message);
            }
        }
    }

    //CLEAUP FUNCTION
    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    //CUSTOM HOOKS RETURNS
    return { signup, isPending, error };
}
