import { useLang } from "@/i18n/LanguageContext";
import { LANGS } from "@/i18n/translations";

export function LanguageToggle() {
  const { lang, t } = useLang();
  const english = LANGS.find((l) => l.code === "en") ?? LANGS[0];

  return (
    <div
      role="group"
      aria-label={t.languageLabel}
      className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-rose/60 bg-paper-tint p-0.5 shadow-[0_6px_18px_-12px_rgba(90,50,40,0.6)] backdrop-blur-sm"
    >
      <button
        type="button"
        aria-pressed={lang === english.code}
        title={english.label}
        className="press rounded-full bg-rose px-2.5 py-1 font-body text-[0.6rem] text-text-heading md:text-[0.65rem]"
      >
        {english.short}
      </button>
    </div>
  );
}
