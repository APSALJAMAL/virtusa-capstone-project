import Link from "next/link";

import { HomeIcon, LogIn, LogOut, Sprout } from "lucide-react";

import { stackServerApp } from "@/stack";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";
import logo from "@/app/favicon.ico";
import { Button } from "../ui/button";
import ThemeToggle from "./ThemeToggle";

async function Navbar() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-gray-800 dark:text-white">REPULSO</span>
          </Link>

          {/* Navbar Links */}
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/user">
                <Sprout className="w-4 h-4" />
                <span className=" sm:inline">user</span>
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/applicant">
                <Sprout className="w-4 h-4" />
                <span className=" sm:inline">Applicant</span>
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/admin">
                <Sprout className="w-4 h-4" />
                <span className=" sm:inline">Admin</span>
              </Link>
            </Button>

            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                <span className=" sm:inline">Home</span>
              </Link>
            </Button>

            <ThemeToggle/>

            {user ? (
              <>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <Link href={app.signOut || "/logout"}>
                    <LogOut className="w-4 h-4" />
                    <span className=" sm:inline">Sign Out</span>
                  </Link>
                </Button>

                <UserButton />
              </>
            ) : (
              <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href={app.signIn || "/login"}>
                  <LogIn className="w-4 h-4" />
                  <span className=" sm:inline">Sign In</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
