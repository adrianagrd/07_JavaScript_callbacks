import { transformStringToArray } from "./transformStringToCollection.js";

describe("Given a transformStringtoArray function", () => {
  test("should call onError callback if value is not a string", () => {
    //Arrange
    const onError = jest.fn();
    const onSuccess = jest.fn();

    //Act
    const result = transformStringToArray(12, onError, onSuccess);

    //Assert
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onSuccess).not.toHaveBeenCalled();
  });

  test("should call onError callback if value is an empty string", () => {
    //Arrange
    const onError = jest.fn();
    const onSuccess = jest.fn();

    //Act
    const result = transformStringToArray("", onError, onSuccess);

    //Assert
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onSuccess).not.toHaveBeenCalled();
  });

  test("should call onError callback if value is a string", () => {
    //Arrange
    const onError = jest.fn();
    const onSuccess = jest.fn();

    //Act
    const result = transformStringToArray("Adriana", onError, onSuccess);

    //Assert
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onError).not.toHaveBeenCalled();
  });
});
