import { ACCOUNT_ID } from "../consts";
import { getInfo } from "../getInfo";
import Cookie from "js-cookie";



export const getAccId = () => {
    getInfo(ACCOUNT_ID, '')
    .then(item => Cookie.set('account-id', item.id))
    .catch(error => console.warn(error))
}