import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const NAVIGATION_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const CONTACT_ITEMS = [
  {
    label: "hello@tactica.app",
    href: "mailto:hello@tactica.app",
    icon: Mail,
  },
  {
    label: "+1 (555) 000-2048",
    href: "tel:+15550002048",
    icon: Phone,
  },
  {
    label: "Remote-first / distributed revenue teams",
    href: "#faq",
    icon: MapPin,
  },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
];

const FOOTER_LINKS = [
  { label: "Pipeline visibility", href: "#features" },
  { label: "Account planning", href: "#solutions" },
  { label: "Rollout support", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container mx-auto px-5 pb-8">
      <div className="space-y-4">
        <section
          aria-labelledby="footer-cta-title"
          className="border-border bg-background relative overflow-hidden rounded-[40px] border px-6 py-12 lg:px-8 lg:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,104,34,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(200,157,79,0.18),transparent_34%),radial-gradient(circle_at_left,rgba(112,82,90,0.18),transparent_26%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(15,54,65,0.07),transparent_30%,rgba(53,200,43,0.1)_100%)]" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2
              id="footer-cta-title"
              className="text-text mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl"
            >
              Ready to{" "}
              <strong className="font-semibold text-[#FF8101]">
                run accounts
              </strong>
              , pipeline, and next steps in one workspace?
            </h2>

            <p className="mt-4 max-w-2xl text-base text-balance md:text-lg">
              Replace CRM-plus-spreadsheet drift with one workspace for account
              context, pipeline reviews, scenario planning, and coordinated
              execution.
            </p>

            <a
              href="/demo"
              className="bg-foreground border-border group hover:text-text hover:bg-secondary mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-all duration-200 active:scale-[0.975]"
            >
              Open demo workspace
              <ArrowUpRight className="group h-5 w-5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>

        <div className="border-border bg-foreground relative overflow-hidden rounded-[2.5rem] border p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,157,79,0.06),transparent_26%)]" />

          <div className="relative z-10">
            <div className="grid gap-5 lg:grid-cols-[auto_1fr] lg:items-center lg:justify-between">
              <a href="/" className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="Tactica"
                  className="aspect-8/3 w-30 lg:w-35"
                />
              </a>

              <div className="flex justify-end lg:text-right">
                <p className="text-text-muted/75 max-w-lg text-lg text-pretty">
                  Revenue workspace for teams that need account context,
                  pipeline visibility, and next-step coordination in one place
                </p>
              </div>
            </div>

            <div className="border-border/50 my-6 border-t" />

            <div className="flex justify-between">
              <div className="grid gap-96 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <p className="text-text text-lg font-semibold">Contact</p>
                  <div className="mt-4 space-y-2">
                    {CONTACT_ITEMS.map((item) => {
                      const Icon = item.icon;

                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className="group flex items-center gap-3"
                        >
                          <div className="border-border/50 bg-foreground group-hover:bg-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-200">
                            <Icon className="text-text h-5 w-5" />
                          </div>
                          <p className="text-text-muted group-hover:text-text text-sm text-nowrap transition-colors duration-200">
                            {item.label}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-text text-lg font-semibold">Navigation</p>
                  <div className="mt-4 flex gap-6">
                    {NAVIGATION_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-text-muted hover:text-text inline-flex items-center gap-2 text-sm transition-colors duration-200"
                      >
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex h-full flex-col items-end gap-5">
                <div className="flex gap-2 xl:justify-end">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="border-border/50 group bg-foreground hover:bg-secondary flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200"
                      >
                        <Icon className="group group-hover:text-text h-5 w-5 transition-colors duration-200" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-border/50 mt-6 flex flex-col gap-4 border-t pt-5 md:flex-row md:items-center md:justify-between">
              <p className="text-text-muted/50 text-xs">
                © {year} Tactica. All Rights Reserved.
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-text-muted hover:text-text text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
