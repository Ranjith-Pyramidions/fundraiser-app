// import React,{useContext,useState,useEffect} from 'react'
// import {auth} from  "./afirebase"
// const AuthContext=React.createContext()


// export function useAuth(){
//     return useContext(AuthContext)
// }

// export function AuthProvider({children}){
// const [currentUser, setCurrentUser] =useState()

// function SignUpPage(email,password){
//     return auth.createUserWithEmailAndPassword(email,password)
// }

// useEffect(()=>{
//   const unsubscribe= auth.onAuthStateChanged(user=>{
//         setCurrentUser(user)
// })

// return unsubscribe
// },[])

// const value={
//     currentUser,SignUpPage
// }


//     return(
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
