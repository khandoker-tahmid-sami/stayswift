import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
      <ul className="nav-list">
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
        <li>
          <Link href="/login" className="login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
