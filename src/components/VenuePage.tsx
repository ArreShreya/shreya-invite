import { MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageOrnaments, GoldDivider } from "./Ornaments";
import { Reveal } from "./Reveal";

const HOTEL_URL = "https://www.google.com/maps/place/Foxoso+La+Alphonso+Beach+Resort+%26+Spa,+Goa/@15.6271107,73.7275439,17z/data=!4m10!3m9!1s0x3bbfe9548ae2abb9:0xfc61620bd7271cb9!5m3!1s2026-12-11!4m1!1i2!8m2!3d15.6271055!4d73.7301188!16s%2Fg%2F11h249ydcr?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D";

export function VenuePage() {
  const { t } = useLang();
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] snap-start flex-col items-center justify-center px-6 py-16 text-center">
      <PageOrnaments />
      <Reveal variant="zoom" as="span" className="block font-body text-[0.8rem] uppercase text-text-secondary">
        {t.venueKicker}
      </Reveal>
      <GoldDivider className="mt-5" />
      <Reveal variant="zoom" as="h2" delay={120} className="mt-6 max-w-xl font-heading text-4xl font-semibold leading-tight text-text-heading md:text-5xl">
        {t.venueName}
      </Reveal>
      <i className="my-8 block h-px w-24 bg-rose" />
      <Reveal variant="zoom" delay={240}>
        <a
          href={HOTEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="press inline-flex items-center gap-3 rounded-full border border-[oklch(0.68_0.1_25)] bg-[oklch(0.99_0.012_40_/_0.7)] px-5 py-3 text-text-secondary transition-colors hover:bg-[oklch(0.96_0.03_25_/_0.7)]"
        >
          <span className="flex items-center justify-center bg-paper/60">
            <MapPin className="h-4 w-4 text-[oklch(0.5_0.09_25)]" />
          </span>
          <span className="font-body text-[0.7rem] uppercase tracking-[0.18em] sm:text-[0.75rem]">
            {t.venueCta}
          </span>
        </a>
      </Reveal>

    </section>
  );
}
