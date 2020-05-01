import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("formVisibleReducer", () => {

    test('Should return default state if no action typ recognized', () => {
        expect(formVisibleReducer(false, { type: null })).toEqual(false);
    });
});