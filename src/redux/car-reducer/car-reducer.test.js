import carReducer from "./car-reducer";

describe("car reducer", () => {
  it("should return the initial state", () => {
    expect(carReducer(undefined, {})).toEqual({
      baggageFilterId: " ",
      carDetails: [],
      currentCar: {},
      filteredVersionCarDetails: [],
      isFetching: false,
      priceFilterId: "",
      supplyFilterId: " ",
      vehRental: "",
    });
  });



});
