import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo3d from "../assets/3dlogo.png";
import { navItems } from "../pages/homeData.jsx";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-nav">
      <div className="shell flex h-[76px] items-center justify-between gap-8">
        <a href="#home" className="flex min-w-[220px] items-center gap-3" aria-label="Jawanexis home">
          <img
            src={logo3d}
            alt=""
            className="h-14 w-14 object-contain"
            aria-hidden="true"
          />
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-extrabold tracking-tight text-black">Jawanexis</span>
            <span className="mt-1 text-[9px] font-bold tracking-[0.2em] text-black/60">LEARN, LEAD, INNOVATE!</span>
          </div>
        </a>

        <nav className="hidden flex-1 items-center gap-8 text-[18px] font-bold text-guvi-ink lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex h-[58px] items-center rounded-md border border-transparent px-3 hover:border-guvi-green hover:bg-guvi-soft"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#login"
            className="flex h-12 min-w-[110px] items-center justify-center rounded-md border border-guvi-green px-7 text-[20px] font-extrabold text-black"
          >
            Login
          </a>
          <a
            href="#signup"
            className="flex h-12 min-w-[116px] items-center justify-center rounded-md bg-guvi-green px-6 text-[20px] font-extrabold text-black shadow-lift"
          >
            Sign up
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-guvi-line lg:hidden"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-guvi-line bg-white lg:hidden">
          <div className="shell grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-2 text-base font-bold"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a href="#login" className="rounded-md border border-guvi-green px-4 py-3 text-center font-bold text-black">
                Login
              </a>
              <a href="#signup" className="rounded-md bg-guvi-green px-4 py-3 text-center font-bold text-black">
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
