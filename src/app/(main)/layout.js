import Link from "next/link";
import { poppins_700 } from "@/app/lib/font";
import KerjaWoiIcon from "../../../public/svg/KerjaWoiIcon";
import DashboardIcon from "../../../public/svg/DashboardIcon";
import TeamIcon from "../../../public/svg/TeamIcon";
import CalendarIcon from "../../../public/svg/CalendarIcon";
import Image from "next/image";
import { LogoutButton } from "@/components/auth";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const NavbarIcon = ({href, icon, caption})=>{
  return (
    <Link
      href={href}
      className="flex flex-row items-center gap-6 cursor-pointer bg-dark-blue bg-opacity-0 hover:bg-opacity-100 transition-all p-4 rounded-md"
    >
      {icon}
      <p className="text-white">{caption}</p>
    </Link>
  )
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <div className="lg:grid lg:grid-cols-6 w-full min-h-screen h-auto">
      <nav className="bg-dark-purple lg:col-span-1 h-100 flex flex-col justify-between">
        <div className="flex flex-col p-4">
        <Link
          href='/'
          className="flex flex-row items-center gap-8 mb-8 ml-3"
        >
          <KerjaWoiIcon/>
          <h4 className={`text-white text-xl ${poppins_700.className}`}>KerjaWOI</h4>
        </Link>
          <div className="flex flex-col gap-4">
            <NavbarIcon href='/' icon={<DashboardIcon/>} caption='Dashboard'></NavbarIcon>
            <NavbarIcon href='/teams' icon={<TeamIcon/>} caption='Teams'></NavbarIcon>
            <NavbarIcon href='/calendar' icon={<CalendarIcon/>} caption='Calendar'></NavbarIcon>
            <LogoutButton/>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6 p-4 border-t-[1px] border-dark-blue border-opacity-80">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full aspect-square object-cover w-1/4"
          />
          <div className="flex flex-col gap-1 text-white">
            <h4 className="text-md font-semibold">{session.name}</h4>
            <Link href="/profile" className="text-xs font-light cursor-pointer">
              View Profile
            </Link>
          </div>
        </div>
      </nav>
      <div className="lg:col-span-5 p-10 bg-[#F9F9F9]">
        {children}
      </div>
    </div>
  );
}
