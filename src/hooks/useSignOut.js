import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignOut = () => {
    //STATE & VARIABLES
    const [isCancelled, setIsCancelled] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const signout = async () => {
        //SET STATE PRE-SIGN OUT REQUEST
        setIsPending(true)
        setIsCancelled(null);

        try{
            //INIT SIGN OUT REQUEST
            await projectAuth.signOut();

            //EMPTY THE USER OBJECT ON THE CONTEXT API
            dispatch({ type: 'SIGNOUT' });

            //RESET STATE AFTER WE SIGN THE USER OUT
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

    return { signout, isPending, error };
}