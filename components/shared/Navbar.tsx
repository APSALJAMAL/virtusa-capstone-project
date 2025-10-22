import Link from "next/link";
import { LogIn, LogOut, UserCircle2, FileUser, ShieldCheck, Home } from "lucide-react";
import { stackServerApp } from "@/stack";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";
import logo from "@/app/favicon.ico";
import { Button } from "../ui/button";
import ThemeToggle from "./ThemeToggle";
import { getUserDetails } from "@/actions/user.action";

async function Navbar() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;

  // Fetch role from Neon / Prisma
  let role: string | null = null;
  if (user?.id) {
    const dbUser = await getUserDetails(user.id);
    role = dbUser?.role || "USER"; // fallback role
  }

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
            {/* Home is always visible */}
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/">
                <Home className="w-4 h-4" />
                <span className="sm:inline">Home</span>
              </Link>
            </Button>

            {/* Role-based links */}
            {role === "USER" && (
              <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/applicant">
                <FileUser className="w-4 h-4" />
                <span className="sm:inline">Applicant</span>
              </Link>
            </Button>
            )}

            {role === "ADMIN" && (
              <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href="/admin">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="sm:inline">Admin</span>
                </Link>
              </Button>
            )}

            {role === "OWNER" && (
              <>
                <Button variant="ghost" className="flex items-center gap-2" asChild>
                  <Link href="/user">
                    <UserCircle2 className="w-4 h-4" />
                    <span className="sm:inline">User</span>
                  </Link>
                </Button>

                <Button variant="ghost" className="flex items-center gap-2" asChild>
                  <Link href="/applicant">
                    <FileUser className="w-4 h-4" />
                    <span className="sm:inline">Applicant</span>
                  </Link>
                </Button>

                <Button variant="ghost" className="flex items-center gap-2" asChild>
                  <Link href="/admin">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="sm:inline">Admin</span>
                  </Link>
                </Button>
              </>
            )}

            <ThemeToggle />

            {/* User Info & Auth */}
            {user ? (
              <>
                {/* Role Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    {role ? `Role: ${role}` : "Role: USER"}
                  </span>
                </div>

                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <Link href={app.signOut || "/logout"}>
                    <LogOut className="w-4 h-4" />
                    <span className="sm:inline">Sign Out</span>
                  </Link>
                </Button>

                <UserButton />
              </>
            ) : (
              <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href={app.signIn || "/login"}>
                  <LogIn className="w-4 h-4" />
                  <span className="sm:inline">Sign In</span>
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
