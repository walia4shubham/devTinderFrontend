import Cookies from "js-cookie";

export const getToken = () => Cookies.get("token");
export const isToken = () => Boolean(Cookies.get("token"));

export default getToken;