import Grainient from "../ui/Grainient";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <Grainient
        color1="#222222"
        color2="#444444"
        color3="#000000"
        timeSpeed={0.25}
        colorBalance={0.25}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.075}
        grainScale={2}
        grainAnimated={false}
        contrast={1.25}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      />
      <div className="relative z-10 container mx-auto flex min-h-screen items-center justify-center">
        <div className="mt-12 flex flex-col items-center justify-center space-y-4 lg:mt-24">
          <h1 className="text-text text-center text-6xl font-bold italic md:text-7xl">
            <p className="text-text/55">Plan.</p>
            <p className="text-text/75">Simulate.</p>
            <p>Win.</p>
          </h1>
          <p className="max-w-sm text-center text-xl text-balance md:max-w-lg md:text-2xl">
            Build tactical operations, simulate outcomes, and analyze strategy
            with your team.
          </p>
          <a
            href="#"
            className="bg-foreground border-border/50 hover:bg-secondary text-text hover:text-text-muted mt-3 rounded-full border px-6 py-3 text-xl shadow-inner shadow-white/25 transition-all duration-200 hover:shadow-white/20 active:scale-[0.975] md:px-8 md:py-4 md:text-2xl"
          >
            Start Planning
          </a>
        </div>
      </div>
    </section>
  );
}
