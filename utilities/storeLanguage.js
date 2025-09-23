const setLang = (lang) => {
  document.cookie = `lang=${lang}; max-age=${1 * 24 * 60 * 60}`;
};

const clearLang = () => {
  setLang({ lang: "" });
};

const getLang = () => {
  if (typeof document === "undefined") {
    return "";
  }

  return document?.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === "lang")
    ?.split("=")[1];
};

export { setLang, getLang, clearLang };
