import React, { useState, useEffect } from "react";
import firebase from "./firebase";

export const AuthContext = React.createContext();

export const useGetUser = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
    });
  }, [])
  return user
}

export const useCreateUser = () => {
  const [state, setState] = useState({
    error: '',
    success: ''
  })
  const createUser = (email, password) => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      if(user) {
        setState({
          ...state,
          success: 'OK'
        })
      }
    })
    .catch(err => {
      setState({
        ...state,
        error: err.message
      })
    })
  }
  return [state, createUser]
}

export const useSigninUser = () => {
  const [state, setState] = useState({
    error: '',
    success: ''
  })
  const signinUser = (email, password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      setState({
        ...state,
        error: err.message
      })
    })
  }
  return [state, signinUser]
}

const signout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {})
}

export const AuthProvider = ({ children }) => {
  const user = useGetUser()
  const [createUserState, createUser] = useCreateUser()
  const [signinUserState, signinUser] = useSigninUser()
  return (
    <AuthContext.Provider value={{ 
      user, 
      createUser: {
        createUserState,
        createUser,
      },
      signinUser: {
        signinUserState,
        signinUser
      },
      signout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
