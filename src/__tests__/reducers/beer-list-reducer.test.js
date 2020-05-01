import beerListReducer from "../../reducers/beer-list-reducer";

describe('beerListReducer', () => {

    let action;
    const beerData = {
        name: 'ZakkTestIPA',
        description: 'YummyAF',
        quantity: 124,
        id: 1
    };


    test('Should return default state if no action passed to reducer', () => {
        expect(beerListReducer({}, {type: null })).toEqual({});
    });

    test('Should successfully add a new beer to masterBeerList', () => {
        const { name, description, quantity, id } = beerData;
        action = {
            type: 'ADD_BEER',
            name: name,
            description: description,
            quantity: quantity,
            id: id
        };
        expect(beerListReducer({}, action)).toEqual({
            [id]: {
                name: name,
                description: description,
                quantity: quantity,
                id: id
            }
        });
    });
});