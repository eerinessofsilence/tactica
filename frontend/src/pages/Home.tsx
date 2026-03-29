import Hero from "../../components/home/Hero";
import Solutions from "../../components/home/Solutions";
import Features from "../../components/home/Features";
import Pricing from "../../components/home/Pricing";
import FAQ from "../../components/home/FAQ";

export default function Home() {
  return (
    <main className="bg-background relative min-h-screen space-y-16 lg:space-y-32">
      <Hero />
      <Solutions />
      <Features />
      <Pricing />
      <FAQ />
    </main>
  );
}
