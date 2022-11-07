import React, { createContext } from 'react';
import { app } from '../Firebase/Firebase.config';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


export const InfoContext = createContext()

const auth = getAuth(app)

const AuthContext = ({ children }) => {

    const createUser = (email, pass) => {


        return createUserWithEmailAndPassword(auth, email, pass)



    }





    const contextData = {

        user: 'jibon',
        createUser,


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