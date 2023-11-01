import { setCookie } from "./cookie";
import { PERMANENTS } from "./vies";


export const logout = () => {
    setCookie(PERMANENTS.TOKEN, PERMANENTS.EMPTY);
    setCookie(PERMANENTS.EMAIL, PERMANENTS.EMPTY);
}