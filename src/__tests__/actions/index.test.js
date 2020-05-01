import * as actions from './../../actions';

describe('beer list actions', () => {
    it('deleteBeer should create DELETE_BEER action', () => {
        expect(actions.deleteBeer(1)).toEqual({
            type: 'DELETE_BEER',
            id: 1
        });
    });

    it('toggleForm should create TOGGLE_FORM action', () => {
        expect(actions.toggleForm()).toEqual({
            type: 'TOGGLE_FORM'
        });
    });

    it('addBeer should create ADD_BEER action', () => {
        expect(actions.addBeer({name: 'ZakkTestIPA', description: 'YummyAF', quantity: 124, id: 1})).toEqual({
            type: 'ADD_BEER',
            name: 'ZakkTestIPA',
            description: 'YummyAF',
            quantity: 124,
            id: 1
        });
    });
});