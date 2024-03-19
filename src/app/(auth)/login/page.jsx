import Link from "next/link";
import { Button } from "@/components/utils";

const Login = () => {
  return (
    <div
      className="login flex justify-center items-center 
        w-100 min-h-screen h-auto bg-dark-purple "
    >
      <div
        className="login-form flex flex-col items-center justify-center rounded-md 
            w-[35%] min-w-[400px] h-3/5 bg-white p-8 text-dark-purple"
      >
        <h4 className="font-bold text-2xl mb-12">KerjaWOI</h4>

        <div className="email-container w-full mb-4">
          <p className="font-semibold mb-1">Email</p>
          <input
            type="text"
            placeholder="Enter Email"
            className="rounded-md border-2 border-solid border-gray-200 outline-none
                    bg-dark-white placeholder:text-dark-purple placeholder:opacity-50
                    py-2 px-4 w-full
                    hover:border-dark-purple focus:ring "
          />
        </div>

        <div className="password-container w-full mb-2">
          <p className="font-semibold mb-1">Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            className="rounded-md border-2 border-solid border-gray-200 outline-none
                    bg-dark-white placeholder:text-dark-purple placeholder:opacity-50
                    py-2 px-4 w-full
                    hover:border-dark-purple focus:ring"
          />
        </div>

        <div className="forgot-container flex w-full justify-end mb-8">
          <button className="hover:text-dark-blue hover:underline">
            Forgot Password?
          </button>
        </div>

        <Button color='Orange'>Login</Button>
        <div className="mt-2 signup flex w-full justify-start">
          <p>
            Dont have an account?{" "}
            <Link href='/register'>
            <button className="font-medium hover:text-dark-blue hover:underline">
              Sign up now!
            </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
