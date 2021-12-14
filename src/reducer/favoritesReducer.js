
export const favoritesReducer = (state, action) => {
    switch (action.type) {
        case "Add_to_favorites":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }


        default:
            return state;
    }
}