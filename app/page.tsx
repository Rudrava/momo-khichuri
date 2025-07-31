import { AuthButton } from "@/components/auth-button";
import Hero from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-between align-middle items-center px-8 border-b border-b-foreground/10 py-4 sm:text-center flex-col h-fit  sm:flex-row">
          <h1 className="font-extrabold text-4xl font-fuzzy w-full text-center md:w-fit ">
            Momo Khichuri 💕
          </h1>
          <div className="w-fit px-4 flex gap-4 items-center justify-between align-middle">
            <AuthButton />
            <ThemeSwitcher />
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <main className="flex-1 flex flex-col gap-6 px-4">
            <Hero />
          </main>
        </div>
      </div>
      <footer className="w-full h-fit py-6 text-center text-xl flex flex-col gap-1 border-t-2 border-gray-300">
        <h1 className="font-semibold">Socials</h1>
        <Link target="_blank" href="https://www.instagram.com/miss___reee">
          @miss_reee
        </Link>
        <Link target="_blank" href="https://instagram.com/rudravaaa">
          @rudravaaa
        </Link>
      </footer>
    </main>
  );
}
