import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseAuth from "../components/Firebase/firebase.init";
firebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [error, setError] = useState('');
    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
       .finally(() => setIsLoading(false));
    }

    const logOut = () =>{
        signOut(auth)
        .then(() =>{
        }).finally(() => setIsLoading(false));
    }
   
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, []) 


    return ({
        user,
        signInWithGoogle,
        logOut,
        auth
    })
}

export default useFirebase;