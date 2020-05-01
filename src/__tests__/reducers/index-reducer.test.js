import rootReducer from '../../reducers/index';

describe("rootReducer", () => {

    test('Should return default state if no action taken', () => {
        expect(rootReducer({}, { type: null })).toEqual({
            masterBeerList: {},
            formVisibleOnPage: false
        });
    });
});