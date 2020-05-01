export default (state = {}, action) => {
    const { name, description, quantity, id } = action;
    switch (action.type){
        case 'ADD_BEER':
            return Object.assign({}, state, {
                [id]: {
                    name: name,
                    description: description,
                    quantity: quantity,
                    id: id
                }
            });
            case 'DELETE_BEER':
                const newState = {...state};
                delete newState[id];
                return newState;
            default:
                return state;
    }
};