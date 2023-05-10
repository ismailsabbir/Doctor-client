import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.init';
export const AuthContext=createContext();
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const UserContext = ({children}) => {
    const [user,setuser]=useState({});
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);
const createuser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const signinwithemail=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
const signupwithgoogle=()=>{
    return signInWithPopup(auth,provider);
}
const userlogout=()=>{
    return signOut(auth)
}
const resetpassword=(email)=>{
    return sendPasswordResetEmail(auth,email)
}
const updateusername=(name)=>{
    return updateProfile(auth.currentUser,{
        displayName:name
    })
}
    const authinfo={user,createuser,signupwithgoogle,userlogout,signinwithemail,resetpassword,updateusername};
    return (
        <AuthContext.Provider value={authinfo}>
        {
            children
        }
        </AuthContext.Provider>
    );
};

export default UserContext;
