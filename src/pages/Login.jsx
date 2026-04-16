import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Signup')
   
const onSubmitHandler = async (event) => {
event.preventDefault();
}


  return (
    <div className="flex justify-center py-10 px-4">

      <form  onSubmit={onSubmitHandler} className=" p-6 sm:p-8 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4">

        <div className='text-center'>
          <p className='text-2xl font-semibold text-gray-800'>{currentState}</p>
          <div className='w-8 h-[2px] bg-gray-800 mx-auto mt-2'></div>
        </div>

        {currentState === 'Signup' && (
          <input 
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
        )}

     
        <input 
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          required
        />

        <input 
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          required
        />

        <div className='flex justify-between text-xs text-gray-600'>
          <p className='cursor-pointer hover:underline'>Forgot password?</p>

          {currentState === 'Login' ? (
            <p 
              onClick={() => setCurrentState('Signup')}
              className='cursor-pointer text-black hover:underline'
            >
              Create Account
            </p>
          ) : (
            <p 
              onClick={() => setCurrentState('Login')}
              className='cursor-pointer text-black hover:underline'
            >
              Login Here
            </p>
          )}
        </div>

        <button className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
          {currentState === 'Login' ? 'Login' : 'Sign Up'}
        </button>

      </form>
    </div>
  )
}

export default Login