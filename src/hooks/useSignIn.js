import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignIn = () => {
    //STATE & VARIABLES
    const [isCancelled, setIsCancelled] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const signin = async (email, password) => {
        //SET STATE PRE-SIGN IN REQUEST
        setIsPending(true)
        setIsCancelled(null);

        try{
            //INIT SIGN IN REQUEST
            const response = await projectAuth.signInWithEmailAndPassword(email, password);

            //SAVE USER DETAILS UPON SIGNININ IN
            dispatch({ type: 'SIGNIN', payload: response.user });

            //RESET STATE AFTER WE SIGN THE USER IN
            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }
        } catch(err){
            //CATCH ANY ERRORS ONLY IF OUR COMPONENT HAS NOT UNMOUNTED
            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }
        }
    }
    
    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { signin, isPending, error };
}