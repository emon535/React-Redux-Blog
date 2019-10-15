export default (state, action) => {
    switch (action.type) {
        case "rotate":
            return {
                ...state,
                rotating: action.payload
            };
        default:
            return state;
    }
};
