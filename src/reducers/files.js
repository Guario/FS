const initialState = [];

export default function files(state = initialState, action) {
    if (action.type === 'ADD_FILE') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

