
describe('transformStringToCollection', () => {
    it('should call onError callback if value is not a string', () => {
        const onError = jest.fn();
        const onSuccess = jest.fn();

        transformStringToCollection(123, onError, onSuccess);

        expect(onError).toHaveBeenCalled();
        expect(onSuccess).not.toHaveBeenCalled();
    });

    it('should call onError callback if value is an empty string', () => {
        const onError = jest.fn();
        const onSuccess = jest.fn();

        transformStringToCollection('', onError, onSuccess);

        expect(onError).toHaveBeenCalled();
        expect(onSuccess).not.toHaveBeenCalled();
    });

    it('should call onSuccess callback if value is a non-empty string', () => {
        const onError = jest.fn();
        const onSuccess = jest.fn();

        transformStringToCollection('Hello, World!', onError, onSuccess);

        expect(onError).not.toHaveBeenCalled();
        expect(onSuccess).toHaveBeenCalled();
    });
});
import { transformStringToCollection } from './transformStringToCollection';
