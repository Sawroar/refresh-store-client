import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firesbase.init';


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
            const [user,setUser]=useState(null);
            const [errorMessage,setErrorMassage]=useState('')
        const [loading,setLoading]=useState(true);
        const [success,setSuccess]=useState(false)
        const [showPassword,setShowPassword]=useState(false)
const googleProvider= new GoogleAuthProvider()
const createUser=(email,password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)

}
const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const signInWithGoogle=()=>{
return signInWithPopup(auth,googleProvider)


}    
const signOutUser=()=>{
setLoading(true)
    return signOut(auth)
}
    useEffect(()=>{
 const unSubcribe= onAuthStateChanged(auth,currentUser=>{
           console.log('Current user',currentUser) 
    setUser(currentUser);
    setLoading(false)
           
    })
    return()=>{
        unSubcribe();
    }
    },[])

    const userInfo={
user,loading,createUser,signInUser,signOut,signOutUser,signInWithGoogle,errorMessage,setErrorMassage,showPassword,setShowPassword,success,setSuccess
    }
  
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;