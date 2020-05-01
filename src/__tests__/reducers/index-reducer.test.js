import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import beerListReducer from '../../reducers/beer-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

    test('Should return default state if no action taken', () => {
        expect(rootReducer({}, { type: null })).toEqual({
            masterBeerList: {},
            formVisibleOnPage: false
        });
    });

    test('Check that initial state of beerListReducer matches root reducer', () => {
        expect(store.getState().masterBeerList).toEqual(beerListReducer(undefined, {type: null}));
    });

    test('Check that initial state of formVisibleReducer matches root reducer', () => {
        expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null}));
    });
});