//deform the array
export const constructArrayByPrice = function (VehVendorAvails) {
  var newArr = [];
  VehVendorAvails.map(({ Vendor, VehAvails }) => {
    VehAvails.map((carDetails) => {
      carDetails["Name"] = Vendor["@Name"];
      newArr.push(carDetails);
    });
  });
  var x = newArr.sort((a, b) => {
    return (
      a.TotalCharge["@RateTotalAmount"] - b.TotalCharge["@RateTotalAmount"]
    );
  });
  return x;
};

//Use the id to filter the price
export const filterPriceById = function (id, originalArray) {
  switch (parseInt(id)) {
    case 1:
      return originalArray.filter((carDetails) => {
        return carDetails["TotalCharge"]["@RateTotalAmount"] < 800;
      });
    case 2:
      return originalArray.filter((carDetails) => {
        return (
          carDetails["TotalCharge"]["@RateTotalAmount"] > 800 &&
          carDetails["TotalCharge"]["@RateTotalAmount"] < 900
        );
      });

    case 3:
      return originalArray.filter((carDetails) => {
        return carDetails["TotalCharge"]["@RateTotalAmount"] > 900;
      });

    default:
      return originalArray;
  }
};
