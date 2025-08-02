import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import Logout from "./auth/Logout";


const Navbar = async ({sideMenu}) => {
  const session = await auth()
  return (
    <nav className="nav">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/stayswift.svg"
          alt="Stay Swift Logo"
          width={200}
          height={200}
          className="nav-img"
        />
      </Link>

      {/* Navigation Links */}
      {sideMenu && (<ul className="nav-list">
        <li>
          <Link href="#">Recommended Places</Link>
        </li>
        <li>
          <Link href="#">About Us</Link>
        </li>
        <li>
          <Link href="#">Contact us</Link>
        </li>
        <li>
          <Link href="/bookings">Bookings</Link>
        </li>
        {session?.user ? (<div>
          <span className="mx-1">{session?.user?.name}</span>
          <span>|</span>
          {""} <Logout/>
        </div>) : (<li>
          <Link href="/login" className="login">
            Login
          </Link>
        </li>)}
        
      </ul>)}
      
    </nav>
  );
};

export default Navbar;
