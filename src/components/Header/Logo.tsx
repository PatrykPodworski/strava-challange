import Link from "next/link";
import Image from "next/image";

export const Logo = () => (
  <Link href="/">
    <Image
      src="/trophy.png"
      alt="trophy"
      width={141}
      height={141}
      className="w-32 h-32 hover:scale-110 transition-all"
    />
  </Link>
);
