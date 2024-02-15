import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer>
    <div className=" flex flex-col justify-center items-center">
      <div>
        <Image src="/logo.svg" alt="logo" width={118} height={18} />
      </div>
      <div>
        <div>
          <Link href="/">Privacy & Policy &nbsp;</Link>
          <Link href="/">Terms & Condition</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
