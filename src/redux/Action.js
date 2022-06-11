
import { ADDITEM } from "./Type";
import { DELETEITEM } from "./Type";
export const addCart = (product) => {
    return {
        type: ADDITEM,
        payload: product
    }
}
export const delCart = (product) => {
    return {
        type: DELETEITEM,
        payload: product
    }
}
