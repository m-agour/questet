import config from "../config.json";
import axios from "axios";
import { showError, setTokenCookie } from "./helperService";

const endPoint = config.API_URL + "/user";

export async function signup(userData) {
    try {
        const response = await axios.post(endPoint, userData);
        setTokenCookie(response.data.token);
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