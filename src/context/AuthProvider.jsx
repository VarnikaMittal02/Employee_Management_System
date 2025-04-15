import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

// create context for auth provider
// auth data locastorage se data uthatata h or logo me bat deta h 
export const AuthContext = createContext()



const AuthProvider = ({ children }) => {
  // localStorage.clear()

  const [userData, setUserData] = useState(null)

  // here calling getlocalstorage function to get data from local storage
  useEffect(() => {
    setLocalStorage()
    const { employees} = getLocalStorage()
    setUserData(employees)
  }, [])




  // authcontext is used to provide the value userData (useState) to the children components
  return (
    <div>

      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>


    </div>
  )
}

export default AuthProvider