import Cookie from "js-cookie";
import { ACCOUNT_ID } from "../../consts";
import { getInfo } from "../../API";




export const saveAccountId = (token: string) => {
    getInfo(ACCOUNT_ID, '', token)
    .then(item => Cookie.set('account-id', item.id))
    .catch(error => console.warn(error))
}