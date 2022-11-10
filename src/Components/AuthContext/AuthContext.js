import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.config';

import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'


export const InfoContext = createContext()

const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)

    const createUser = (email, pass) => {

        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, pass)



    }

    //update profile info
    const updateProfileInfo = (name, url) => {
        // setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url

        })
    }



    //AuthChange

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoader(false)




        })

        return () => unSubscribe()


    }, [])


    //signin With Email
    const signInWithEmail = (email, pass) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, pass)


    }

    //forgetpass

    const forgetPass = email => {

        setLoader(true)
        return sendPasswordResetEmail(auth, email)


    }


    const googleSignIn = provider => {

        setLoader(true)
        return signInWithPopup(auth, provider)


    }

    //logout

    const logOut = () => {

      
        setLoader(true)
        return signOut(auth)


    }





    const contextData = {

        user,
        createUser,
        updateProfileInfo,
        signInWithEmail,
        forgetPass,
        googleSignIn,
        logOut,
        loader,
        setLoader


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