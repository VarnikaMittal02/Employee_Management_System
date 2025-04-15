import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {


// console.log("props in login", props)


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // ye function jab bhi form submit hoga tab chalega
  const submitHandler = (e) => {
  
    e.preventDefault()
    // console.log("email is ", email)
    // console.log("password is ", password)

    handleLogin(email, password)

    // khali kardiya email aur password ko bad me
    setEmail(' ')
    setPassword(' ')
    
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
      <div className=' border-emerald-200 border-2 p-15 rounded-3xl  '>

        <form
          onSubmit={(e) => {
            // jab bhi form submit hoga ye function chalega
            submitHandler(e)
          }}
          className='text-white flex flex-col items-center space-y-4  '>


          <input
            // value me store kardi email
            value={email}
            onChange={(e) => {
              // value set kardi email ki 
              setEmail(e.target.value)
              // console.log(e.target.value)
            }}
            required className='border-2 border-emerald-600 rounded-full h-12 w-96 px-4 ' type="email" placeholder='Enter Your Email' />


          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}

            required className='border-2 border-emerald-600 rounded-full h-12 w-96 px-4 mt-3  text-white' type="password" placeholder='Enter Password' />


          <button className='border-2 border-emerald-600 rounded-full px-6 py-3 mt-3  text-white '>
            Login
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login
