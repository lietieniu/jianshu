import { SEARCH_FOCUS, SEARCH_ONBLUR } from "./constants"

export const searchFocus = () => {
    return {
        type: SEARCH_FOCUS
    }
}
export const searchBlur = () => {
    return {
        type: SEARCH_ONBLUR
    }
}