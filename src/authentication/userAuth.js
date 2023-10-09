import { useState, useEffect, useContext, createContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db,auth } from "../firebase";


const AuthContext = createContext();


// context provider function
export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);


   // signUp main functionality
     function signUp () {
        e.preventDefault()
        try {
        
            const userCredentials =  createUserWithEmailAndPassword(auth, Email, Password);
            updateProfile(auth.currentUser, {
                displayName: FullName
            })

            const user = userCredentials.user
             setDoc(doc(db, "users", user.uid), {
                email: Email,
                name: FullName,
                timestamp: serverTimestamp(),
            });

            navigate("/")

            console.log(user)
        } catch (error) {
            toast.error("something went wrong with your signup")
        }
    }


    // logout main functionality
    function logOut() {
        return signOut(auth);
    }


 // signIn main functionality
  function logIn() {
    e.preventDefault()

    try {
      const userCredentials =  signInWithEmailAndPassword(auth, Email, Password)
      
      if (userCredentials.user) {
         navigate("/")
      }
      
    } catch (error) {
      toast.error("Wrong Signin Credentials")
    }
  }

    return (
        <AuthContext.Provider value={{ user,logIn,logOut,signUp }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};

