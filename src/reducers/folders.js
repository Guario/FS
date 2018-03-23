
const initialState = {item: null};

export default function folders(state = initialState, action) {
    if (action.type === 'ADD_FOLDER') {
        return {
            ...state,
            item: action.payload
        };
    }
    return state;
}
