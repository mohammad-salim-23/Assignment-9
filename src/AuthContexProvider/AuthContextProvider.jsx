import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect } from "react";
import { useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}
const signInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
       
        setUser(currentUser);
        setLoading(false);
     })
     return ()=>{
        unSubscribe();
     }
},[])
    const authInfo ={
        user,
        createUser,
        signInUser,
        loading
    }
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>

    );
};

export default AuthContextProvider;
