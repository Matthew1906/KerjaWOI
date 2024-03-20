'use client'

import Link from "next/link"
import { Button } from "../utils"
import { signIn } from "next-auth/react"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { poppins_600 } from "@/app/lib/font"

const inputClass = 'rounded-md border-2 border-solid border-gray-200 outline-nonebg-dark-white placeholder:text-dark-purple placeholder:opacity-50 py-2 px-4 w-full hover:border-dark-purple focus:ring'

const LoginForm = ()=>{
  const [error, setError ] = useState(false);
  const ref = useRef();
  const router = useRouter()
  const handleLogin = (event)=>{
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    signIn('credentials', {
        email:formData.get('email'), 
        password:formData.get('password'),
        redirect:false
    }).then((res)=>{
      if(res?.error){
        setError(res.error);
        ref.current?.reset()
      }
      else{
        router.push('/')
      }
    })
  }
  return (
    <form 
      ref={ref}
      className="flex flex-col items-center justify-center rounded-md w-[35%] min-w-[400px] h-3/4 bg-white p-8"
      onSubmit={handleLogin}
    >
      <h4 className="font-bold text-2xl mb-8">KerjaWOI</h4>
      {error && <div><p className={`text-left text-Orange ${poppins_600.className}`}>{error}</p></div>}
      <div className="w-full mb-4">
        <label htmlFor="email" className="font-semibold mb-1">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Enter Email"
          className={inputClass}
        />
      </div>

      <div className="w-full mb-2">
        <label htmlFor="password" className="font-semibold mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          className={inputClass}
        />
      </div>

      <div className="flex w-full justify-end mb-8">
        <button className="hover:text-dark-blue hover:underline">
          Forgot Password?
        </button>
      </div>

      <Button color='Orange'>Login</Button>
      <div className="mt-2 flex w-full justify-start">
        <p>
          Dont have an account?{" "}
          <Link href='/register'>
          <button className="font-medium hover:text-dark-blue hover:underline">
            Sign up now!
          </button>
          </Link>
        </p>
      </div>
    </form>
  )
}

export default LoginForm;