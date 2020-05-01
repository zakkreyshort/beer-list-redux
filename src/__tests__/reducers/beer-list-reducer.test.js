import beerListReducer from "../../reducers/beer-list-reducer";
import * as c from './../actions/ActionTypes';


describe('beerListReducer', () => {

    const currentState = {
        1: {name: 'ZakkTestIPA',
            description: 'YummyAF',
            quantity: 124,
            id: 1},
        2: {name: 'BrandanTestAle',
            description: 'Sour but sweet',
            quantity: 124,
            id: 2}
    }

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
            type: c.ADD_BEER,
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

    test('Should successfully delete a beer', () => {
        action = {
            type: c.DELETE_BEER,
            id: 1
        };
        expect(beerListReducer(currentState, action)).toEqual({
            2: {name: 'BrandanTestAle',
            description: 'Sour but sweet',
            quantity: 124,
            id: 2}
        });
    });
});