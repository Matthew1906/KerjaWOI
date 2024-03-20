'use client'

import Link from "next/link"
import { Button } from "../utils"
import { registerUser } from "@/app/controllers/user"
import { useRouter } from "next/navigation"

const inputClass = 'rounded-md border-2 border-solid border-gray-200 outline-nonebg-dark-white placeholder:text-dark-purple placeholder:opacity-50 py-2 px-4 w-full hover:border-dark-purple focus:ring'

const RegisterForm = ()=>{
    const router = useRouter();
    const handleRegister = async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        await registerUser({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        })
        router.push('/login')
    }
    return (
        <form
            className="flex flex-col items-center justify-center rounded-md w-[35%] min-w-[400px] h-3/4 bg-white p-8" 
            onSubmit={handleRegister}
        >
            <h4 className="font-bold text-2xl mb-12">KerjaWOI</h4>
            <div className="w-full mb-4">
                <label htmlFor="name" className="font-semibold mb-1">Username</label>
                <input 
                    type="text" name="name"
                    id='name' placeholder="Enter Username"
                    className={inputClass}
                    required
                />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="email" className="font-semibold mb-1">Email</label>
                <input 
                    type="email" name="email"
                    id="email" placeholder="Enter Email"
                    className={inputClass}
                    required
                />
            </div>

            <div className="w-full mb-8">
                <label htmlFor="password" className="font-semibold mb-1">Password</label>
                <input 
                    type="password" name='password' 
                    id='password' placeholder="Enter Password"
                    className={inputClass}
                    required
                />
            </div>

            <Button color='Orange'>Register</Button>

            <div className="mt-1 signup flex w-full justify-start">
                <p>Already have an account? {" "}
                    <Link href='/login'>
                    <button className="font-medium hover:text-dark-blue hover:underline">
                        Login here!
                    </button>
                    </Link>
                </p>
            </div>
        </form>
    )
}

export default RegisterForm;