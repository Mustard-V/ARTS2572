import {
    TOOGLE_INGREDIENT,
    DELETE_INGREDIENT,
    TOOGLE_TAG,
    TOOGGLE_BLACKLIST,
    RESET_INGREDIENT,
    DELETE_TAG,
} from "./actionTypes";

// action creator
export const toogleIngredient = (ingredient) => ({
    type: TOOGLE_INGREDIENT,
    ingredient,
});

export const deleteIngredient = (ingredient) => ({
    type: DELETE_INGREDIENT,
    ingredient,
});

export const resetIngredient = () => ({
    type: RESET_INGREDIENT,
});

export const toogleTag = (tag) => ({
    type: TOOGLE_TAG,
    tag,
});

export const deleteTag = (tag) => ({
    type: DELETE_TAG,
    tag,
});

export const toogleBlackList = (blackListItem) => ({
    type: TOOGGLE_BLACKLIST,
    blackListItem,
});
