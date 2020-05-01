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
});