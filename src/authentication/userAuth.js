import { useState, useEffect, useContext, createContext } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword,signOut } from "firebase/auth";
import {auth } from "../firebase";


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
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function forgotPass(email) {
       return sendPasswordResetEmail(auth,email)
    }
        /** * e.preventDefault()
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
         }*/
    


    // logout main functionality
    function logOut() {
        return signOut(auth);
    }


    // signIn main functionality
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    /*
    function googleSignUp() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider) 

    }*/

        /*    
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
    */
        return (
            <AuthContext.Provider value={{ user, logIn, logOut, signUp,forgotPass }}>
                {children}
            </AuthContext.Provider>
        );
    }


    export const useAuth = () => {
        return useContext(AuthContext);
    };
