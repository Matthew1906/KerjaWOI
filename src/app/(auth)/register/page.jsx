import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { RegisterForm } from "@/components/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Register = async() => { 
    const session = await getServerSession(authOptions);
    const isAuthenticated = !!session;
    if(isAuthenticated){
        return redirect('/')
    }
    return <RegisterForm />
}

export default Register;