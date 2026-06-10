import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo3d from "../assets/3dlogo.png";
import { navItems } from "../pages/homeData.jsx";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-nav">
      <div className="shell flex h-14 items-center justify-between gap-4">
        <a href="#home" className="flex min-w-[160px] items-center gap-2" aria-label="Jawanexis home">
          <img
            src={logo3d}
            alt=""
            className="h-8 w-8 object-contain"
            aria-hidden="true"
          />
          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-black">Jawanexis</span>
            <span className="mt-0.5 text-[6px] font-bold tracking-[0.16em] text-black/60">LEARN, LEAD, INNOVATE!</span>
          </div>
        </a>

        <nav className="hidden flex-1 items-center gap-4 text-[15px] font-bold text-guvi-ink lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex h-9 items-center rounded-md border border-transparent px-2 hover:border-guvi-green hover:bg-guvi-soft"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#login"
            className="flex h-9 min-w-[76px] items-center justify-center rounded-md border border-guvi-green px-4 text-[15px] font-extrabold text-black"
          >
            Login
          </a>
          <a
            href="#signup"
            className="flex h-9 min-w-[84px] items-center justify-center rounded-md bg-guvi-green px-4 text-[15px] font-extrabold text-black shadow-lift"
          >
            Sign up
          </a>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-guvi-line lg:hidden"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-guvi-line bg-white lg:hidden">
          <div className="shell grid gap-2 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-1.5 text-sm font-bold"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a href="#login" className="rounded-md border border-guvi-green px-4 py-2.5 text-center text-sm font-bold text-black">
                Login
              </a>
              <a href="#signup" className="rounded-md bg-guvi-green px-4 py-2.5 text-center text-sm font-bold text-black">
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
