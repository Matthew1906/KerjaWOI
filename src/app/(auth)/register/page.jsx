import Link from "next/link";
import { Button } from "@/components/utils";

const Register = () => { 
    return (
        <div className="login flex justify-center items-center 
        w-100 min-h-screen h-auto bg-dark-purple ">
            <div className="login-form flex flex-col items-center justify-center rounded-md 
            w-[35%] min-w-[400px] h-3/4 bg-white p-8 text-dark-purple">
                <h4 className="font-bold text-2xl mb-12">KerjaWOI</h4>
                
                <div className="username-container w-full mb-4">
                    <p className="font-semibold mb-1">Username</p>
                    <input type="text" placeholder="Enter Username"
                    className="rounded-md border-2 border-solid border-gray-200 outline-none
                    bg-dark-white placeholder:text-dark-purple placeholder:opacity-50
                    py-2 px-4 w-full
                    hover:border-dark-purple focus:ring "/>
                </div>

                <div className="email-container w-full mb-4">
                    <p className="font-semibold mb-1">Email</p>
                    <input type="text" placeholder="Enter Email"
                    className="rounded-md border-2 border-solid border-gray-200 outline-none
                    bg-dark-white placeholder:text-dark-purple placeholder:opacity-50
                    py-2 px-4 w-full
                    hover:border-dark-purple focus:ring "/>
                </div>

                <div className="password-container w-full mb-8">
                    <p className="font-semibold mb-1">Password</p>
                    <input type="password" placeholder="Enter Password"
                    className="rounded-md border-2 border-solid border-gray-200 outline-none
                    bg-dark-white placeholder:text-dark-purple placeholder:opacity-50
                    py-2 px-4 w-full
                    hover:border-dark-purple focus:ring"/>
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
                
            </div>
        </div>
    )
}

export default Register;