import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  {
    name: "Solutions",
    href: "#solutions",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

export default function Header() {
  const mobileMenuId = "mobile-menu";
  const location = useLocation();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const handleMobileMenuToggle = () =>
    setMobileMenuIsOpen((prevState) => !prevState);
  const handleMobileMenuLinkClick = () => setMobileMenuIsOpen(false);
  const getSectionHref = (href: string) =>
    location.pathname === "/" ? href : `/${href}`;

  return (
    <div className="fixed left-1/2 z-50 container mx-auto -translate-x-1/2 p-5">
      <header className="border-border bg-foreground flex items-center justify-between rounded-full border px-6 py-3">
        <Link to="/" className="items-center justify-center">
          <img
            src="/logo.png"
            className="aspect-8/3 w-30 lg:w-35 xl:w-45"
            alt="Tactica"
          />
        </Link>
        <ul
          aria-label="Primary navigation"
          className="hidden items-center justify-between gap-7.5 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <li
              key={link.name.toLowerCase()}
              className="text-text-muted hover:text-text text-xl transition-colors duration-200"
            >
              <a href={getSectionHref(link.href)}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/auth"
            className="bg-foreground border-border/50 hover:bg-secondary text-text-muted hover:text-text hidden rounded-full border px-6 py-3 text-xl transition-all duration-200 active:scale-[0.975] lg:inline"
          >
            Sign In
          </Link>
          <Link
            to="/demo"
            className="bg-foreground border-border/50 hover:bg-secondary text-text-muted hover:text-text hidden rounded-full border px-6 py-3 text-xl transition-all duration-200 active:scale-[0.975] lg:inline"
          >
            See live demo
          </Link>
          <button
            type="button"
            onClick={handleMobileMenuToggle}
            aria-expanded={mobileMenuIsOpen}
            aria-controls={mobileMenuId}
            className="border-border/50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 will-change-transform active:translate-y-0.5 active:scale-[0.93] lg:hidden"
          >
            {mobileMenuIsOpen ? (
              <X className="text-text h-6 w-6" />
            ) : (
              <Menu className="text-text h-6 w-6" />
            )}
          </button>
        </div>
      </header>
      {/* Mobile menu */}
      <div className="relative lg:hidden">
        <div
          id={mobileMenuId}
          aria-hidden={!mobileMenuIsOpen}
          className={`border-border/50 bg-foreground absolute right-0 z-40 mt-3 flex max-h-[calc(100vh-140px)] min-h-0 w-full origin-top-right flex-col gap-5 rounded-4xl p-6 shadow-white/30 transition-all duration-500 ease-out ${
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
                    href={getSectionHref(link.href)}
                    onClick={handleMobileMenuLinkClick}
                    className="text-text hover:text-text-muted text-lg font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                  <hr className="group text-text-muted" />
                </div>
              );
            })}
          </nav>
          <div className="grid gap-3">
            <Link
              to="/auth"
              onClick={handleMobileMenuLinkClick}
              className="bg-background text-text-muted border-border/50 hover:text-text hover:bg-secondary inline-flex items-center justify-center rounded-full border px-5 py-3 text-base font-medium transition-all duration-200 active:scale-[0.975]"
            >
              Sign in
            </Link>
            <Link
              to="/demo"
              onClick={handleMobileMenuLinkClick}
              className="bg-background text-text-muted border-border/50 hover:text-text hover:bg-secondary inline-flex items-center justify-center rounded-full border px-5 py-3 text-base font-medium transition-all duration-200 active:scale-[0.975]"
            >
              See live demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
