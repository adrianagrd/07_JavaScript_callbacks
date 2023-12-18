import { validateString } from "./validateString";

describe("Given validateString function", () => {
  test(" When value is undefined, false will be returned", () => {
    //Arrange
    const value = undefined;

    //Act
    const result = validateString(value);

    //Assert
    expect(result).toBe(false);
  });

  test("When value is number, false will be returned", () => {
    //Arrange
    const value = 13;

    //Act
    const result = validateString(value);

    //Assert
    expect(result).toBe(false);
  });

  test("When value is array, false will be returned", () => {
    //Arrange
    const value = [1, 2, 3, 4, 5];

    //Act
    const result = validateString(value);

    //Assert
    expect(result).toBe(false);
  });

  test("When value is boolean, false will be returned", () => {
    //Arrange
    const value = true;

    //Act
    const result = validateString(value);

    //Assert
    expect(result).toBe(false);
  });

  test("When value is object, false will be returned", () => {
    //Arrange
    const value = { key: "apple" };

    //Act
    const result = validateString(value);

    //Assert
    expect(result).toBe(false);
  });

  test("When value is empty string, false will be returned", () => {
    //Arrange
    const value = "";

    //Act
    const result = validateString(value);

    //Assert
    expect(result).toBe(false);
  });

  test("When value is fullfilled string, false will be returned", () => {
    //Arrange
    const value = "adriana";

    //Act
    const result = validateString(value);

    //Assert
    expect(result).toBe(true);
  });
});
