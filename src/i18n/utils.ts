import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    params?: { [key: string]: string },
  ) {
    const text = ui[lang][key] || ui[defaultLang][key];
    const realText = params
      ? text.replace(/\{(\w+)\}/g, (_: any, key: string) => params[key] || "")
      : text;
    return realText;
  };
}
