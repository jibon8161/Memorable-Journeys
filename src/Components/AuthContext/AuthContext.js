import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.config';

import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'


export const InfoContext = createContext()

const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState()

    const createUser = (email, pass) => {


        return createUserWithEmailAndPassword(auth, email, pass)



    }

    //update profile info
    const updateProfileInfo = (name, url) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url

        })
    }



    //AuthChange

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)




        })

        return () => unSubscribe()


    }, [])


    //signin With Email
    const signInWithEmail = (email, pass) => {

        return signInWithEmailAndPassword(auth, email, pass)


    }

    //forgetpass

    const forgetPass = email => {


        return sendPasswordResetEmail(auth, email)


    }


    const googleSignIn = provider => {


        return signInWithPopup(auth, provider)


    }

    //logout

    const logOut = () => {

      

        return signOut(auth)


    }





    const contextData = {

        user,
        createUser,
        updateProfileInfo,
        signInWithEmail,
        forgetPass,
        googleSignIn,
        logOut


    }

    return (
        <div>
            <InfoContext.Provider value={contextData}>

                {children}

            </InfoContext.Provider>

        </div>
    );
};

export default AuthContext;