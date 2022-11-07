import React, { createContext, useState } from 'react';
import { app } from '../Firebase/Firebase.config';

import { getAuth, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'


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





    const contextData = {

        user: 'jibon',
        createUser,
        updateProfileInfo


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