import {addToCart} from "../constant"
const initialStates={
    cardData:[]
}
export default function cardItems(state=[], action) {
    switch (action.type){
        case "addToCart":
            return {
                ...state,
                cardData:action.data
            }
            break;
        default:
            return state
    }
}