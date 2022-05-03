import { NotificationManager } from "react-notifications";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export function showError(error, time_ms = 3000) {
    NotificationManager.error(error, "Error", time_ms);
}

export function setTokenCookie(token) {
    cookies.set("token", token, { path: "/" });
}

export function getTokenCookie() {
    return cookies.get("token");
}

export function removeTokenCookie(token) {
    cookies.remove("token");
}