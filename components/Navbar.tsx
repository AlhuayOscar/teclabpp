import Link from "next/link";
import Image from "next/image";

const NavBar = () => (
  <header>
    <nav>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>
    </nav>
  </header>
);

export default NavBar;
