
const initialState = [];

export default function folders(state = initialState, action) {
    if (action.type === 'ADD_FOLDER') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}