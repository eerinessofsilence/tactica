import Hero from "../../components/home/Hero";
import Solutions from "../../components/home/Solutions";
import Features from "../../components/home/Features";

export default function Home() {
  return (
    <main className="bg-background relative min-h-screen space-y-8 lg:space-y-16">
      <Hero />
      <Solutions />
      <Features />
    </main>
  );
}
