export default (state = {}, action) => {
    switch (action.type){
        case 'ADD_BEER':
            const { name, description, quantity, id } = action;
            return Object.assign({}, state, {
                [id]: {
                    name: name,
                    description: description,
                    quantity: quantity,
                    id: id
                }
            });
            default:
                return state;
    }
};