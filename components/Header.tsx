import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto w-full backdrop-blur-md rounded-md shadow-md">
      <div className="flex items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 py-2">
          <Image
            src="/assets/images/logo.png"
            width={200}
            height={50}
            alt="N.I. Nazmul logo"
          />
        </Link>
        <div className="hidden lg:flex gap-8">
          <NavItems />
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/8801580845746?text=Hello%20Nazmul,%20I%20came%20across%20your%20portfolio%20and%20am%20interested%20in%20working%20with%20you.%20Let’s%20discuss."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              size="sm"
              className="flex items-center gap-2 bg-gray-100 hover:bg-black text-black hover:text-white hover:border rounded-full rounded-bl-none px-4 py-2 transition"
            >
              <FaWhatsapp className="text-lg" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </a>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
