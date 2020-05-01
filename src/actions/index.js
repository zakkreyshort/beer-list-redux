export const deleteBeer = id => ({
    type: 'DELETE_BEER',
    id
});

export const toggleForm = () => ({
    type: 'TOGGLE_FORM'
});

export const addBeer = (beer) => {
    const { name, description, quantity, id } = beer;
    return {
        type: 'ADD_BEER',
        name: name,
        description: description,
        quantity: quantity,
        id: id

    }
};