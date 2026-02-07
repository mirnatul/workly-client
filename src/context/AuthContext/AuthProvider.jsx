import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

            // jwt token setting
            if (currentUser?.email) {
                const userData = { email: currentUser.email };

                axios.post('http://localhost:3000/jwt', userData, {
                    withCredentials: true  // in case you want to send cookie with request, set this to true
                })
                    .then(res => {
                        // console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err.message);
                    });
                // if you want to store token in local storage

                // axios.post('http://localhost:3000/jwt', userData)
                //     .then(res => {
                //         console.log('token after jwt', res.data);

                //         // if you want to store token in local storage
                //         const token = res.data.token;
                //         localStorage.setItem('token', token);
                //     })
                //     .catch(err => {
                //         console.log(err.message);
                //     });
            }

            console.log("user in the auth state change", currentUser);
        });
        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;