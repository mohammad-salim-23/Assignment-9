import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect } from "react";
import { useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();
const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}
const signInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const logOut =()=>{
    setLoading(true);
    return signOut(auth);
}
const googleSignIn= ()=>{
    setLoading(true);
    return signInWithPopup(auth,GoogleProvider);
}
const GithubSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth,GitHubProvider);
}

// useEffect(()=>{
//      const unSubscribe = onAuthStateChanged(auth,currentUser=>{
       
//         setUser(currentUser);
//         setLoading(false);
//      })
//      return ()=>{
//         unSubscribe();
//      }
// },[user])
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        if (currentUser) {
            // Update user's display name if it exists
            if (currentUser.displayName !== user?.displayName) {
                setUser(currentUser);
            }
        } else {
            setUser(null);
        }
        setLoading(false);
    });
    return () => {
        unSubscribe();
    };
}, [user]); // Add user to dependencies to trigger effect when user changes


    const authInfo ={
        user,
        createUser,
        signInUser,
        loading,
        logOut,
        googleSignIn,
        GithubSignIn
        
    }
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>

    );
};

export default AuthContextProvider;
