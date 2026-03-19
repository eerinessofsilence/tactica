import Grainient from "../ui/Grainient";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <Grainient
        color1={"#222222"}
        color2={"#444444"}
        color3={"#000000"}
        timeSpeed={1}
        colorBalance={0.35}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={1}
        grainAmount={0.05}
        grainScale={1}
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
        <div className="mt-12 flex flex-col items-center justify-center space-y-5 lg:mt-24">
          <h1 className="text-text text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            Review the pipeline. <br /> Choose the next move. Stay aligned.
          </h1>
          <p className="max-w-xl text-center text-balance md:max-w-3xl md:text-lg lg:text-xl">
            Tactica is the revenue workspace where teams review accounts,
            compare scenarios, and turn pipeline decisions into clear next
            actions.
          </p>
          <a
            href="/demo"
            className="bg-foreground border-border/50 hover:bg-secondary text-text-muted hover:text-text hover:shadow-text/30 mt-4.5 rounded-full border px-6 py-3 text-xl transition-all duration-200 active:scale-[0.975] md:px-8 md:py-4 md:text-2xl"
          >
            Open demo workspace
          </a>
        </div>
      </div>
    </section>
  );
}
