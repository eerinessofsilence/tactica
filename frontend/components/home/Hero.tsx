import Grainient from "../ui/Grainient";
import { useTheme } from "../../src/theme";

export default function Hero() {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <Grainient
        color1={isLightTheme ? "#888888" : "#222222"}
        color2={isLightTheme ? "#777777" : "#333333"}
        color3={isLightTheme ? "#999999" : "#111111"}
        timeSpeed={0.5}
        colorBalance={0.5}
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
          <h1 className="text-text text-center text-5xl font-bold italic md:text-6xl lg:text-7xl">
            <p className="text-text/55">See the pipeline.</p>
            <p className="text-text/75">Plan the next move.</p>
            <p>Move revenue forward.</p>
          </h1>
          <p className="max-w-xl text-center text-lg text-balance md:max-w-3xl md:text-xl lg:text-2xl">
            Tactica is the revenue workspace for teams that need pipeline
            visibility, account context, and next-step planning in one
            workspace. Inspect risk, coordinate actions, and move deals forward
            without switching between CRM, spreadsheets, and status docs.
          </p>
          <a
            href="/demo"
            className="bg-foreground border-border/50 hover:bg-secondary text-text-muted hover:text-text shadow-text/20 hover:shadow-text/30 mt-3 rounded-full border px-6 py-3 text-xl shadow-inner transition-all duration-200 active:scale-[0.975] md:px-8 md:py-4 md:text-2xl"
          >
            See live workspace
          </a>
        </div>
      </div>
    </section>
  );
}
