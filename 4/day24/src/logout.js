import { setCookie } from "./cookie";

export const logout = () => {
    setCookie('code', '');
    setCookie('email','');
}