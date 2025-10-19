const setCookie = (tokens) => {
  document.cookie = `accessToken=${tokens.accessToken}; max-age=${
    7 * 24 * 60 * 60
  }`;
};

const clearCookie = () => {
  document.cookie = "accessToken=; max-age=0;";
};

const getCookie = (cookieName) => {
  if (typeof document === "undefined") {
    return "";
  }

  return document?.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

const isLogged = () => {
  if (typeof document === "undefined") {
    return false;
  }

  return !!document?.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === "accessToken")
    ?.split("=")[1];
};

export { setCookie, getCookie, clearCookie, isLogged };
