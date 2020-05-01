import * as actions from './../../actions';

describe('beer list actions', () => {
    it('deleteBeer should create DELETE_BEER action', () => {
        expect(actions.deleteBeer(1)).toEqual({
            type: 'DELETE_BEER',
            id: 1
        });
    });
});