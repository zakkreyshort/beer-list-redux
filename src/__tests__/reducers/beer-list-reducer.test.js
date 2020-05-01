import beerListReducer from "../../reducers/beer-list-reducer";

describe('beerListReducer', () => {
    test('Should return default state if no action passed to reducer', () => {
        expect(beerListReducer({}, {type: null })).toEqual({});
    });
});