import { useState, useRef } from "react";
import { X, Menu } from "lucide-react";

const NAV_LINKS = [
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "FAQs",
    href: "#",
  },
];

export default function Header() {
  const mobileMenuId = "mobile-menu";
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const handleMobileMenuToggle = () =>
    setMobileMenuIsOpen((prevState) => !prevState);
  const handleMobileMenuLinkClick = () => setMobileMenuIsOpen(false);

  return (
    <div className="fixed left-1/2 z-50 container mx-auto -translate-x-1/2 p-5">
      <header className="border-border bg-foreground flex items-center justify-between rounded-full px-6 py-3 shadow-inner shadow-white/30">
        <a href="/" className="items-center justify-center">
          <img
            src="/logo.png"
            className="aspect-8/3 w-30 lg:w-35 xl:w-45"
            alt=""
          />
        </a>
        <ul className="hidden items-center justify-between gap-7.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li className="text-text-muted transition-color hover:text-text text-xl duration-200">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="bg-foreground border-border/50 hover:bg-secondary text-text hover:text-text-muted hidden rounded-full border px-8 py-3 text-xl shadow-inner shadow-white/15 transition-all duration-200 hover:shadow-white/20 active:scale-[0.975] lg:inline"
        >
          Sign In
        </a>
        <button
          type="button"
          onClick={handleMobileMenuToggle}
          aria-expanded={mobileMenuIsOpen}
          aria-controls={mobileMenuId}
          ref={mobileToggleRef}
          className="border-border/50 active:translate-y-2px flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border shadow-inner shadow-white/20 transition-all duration-200 will-change-transform active:scale-[0.93] lg:hidden"
        >
          {mobileMenuIsOpen ? (
            <X className="h-7 w-7 text-white" />
          ) : (
            <Menu className="h-7 w-7 text-white" />
          )}
        </button>
      </header>
      {/* Mobile menu */}
      <div className="relative xl:hidden">
        <div
          id={mobileMenuId}
          aria-hidden={!mobileMenuIsOpen}
          ref={mobileMenuRef}
          className={`border-border/50 bg-foreground absolute right-0 z-40 mt-3 flex max-h-[calc(100vh-140px)] min-h-0 w-full origin-top-right flex-col gap-5 rounded-4xl p-6 shadow-inner shadow-white/30 transition-all duration-500 ease-out ${
            mobileMenuIsOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          }`}
        >
          <nav className="group flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto overscroll-contain text-lg font-medium">
            {NAV_LINKS.map((link) => {
              return (
                <div key={link.name.toLowerCase()} className="relative">
                  <a
                    href={link.href}
                    onClick={handleMobileMenuLinkClick}
                    className="text-text hover:text-text-muted text-lg font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                  <hr className="group text-secondary" />
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
