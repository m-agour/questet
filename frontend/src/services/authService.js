import config from "../config.json";
import axios from "axios";
import {
    showError,
    setTokenCookie,
    getTokenCookie,
    removeTokenCookie,
} from "./helperService";

const endPoint = config.API_URL + "/auth/login";

export async function login(loginData) {
    try {
        const response = await axios.post(endPoint, loginData);
        setTokenCookie(response.data.data.token);
        return true;
    } catch (err) {
        if (err.response) {
            showError(err.response.data.data);
            return false;
        } else {
            showError("Server is down!");
            return false;
        }
    }
}

export function logout() {
    removeTokenCookie();
}

export function isLoggedIn() {
    return getTokenCookie();
}