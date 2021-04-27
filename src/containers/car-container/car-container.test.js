import React from "react";
import { shallow } from "enzyme";
import CarContainer from "./car-container";
import PassengerIcon from "../../assests/man-user.png";
import DoorIcon from "../../assests/car-door.png";
import BreifCase from "../../assests/briefcase.png";
import Snowflake from "../../assests/snowflake.png";

var Imagearr = [PassengerIcon, DoorIcon, BreifCase, Snowflake];
var data = {
  Name: "AVIS",
  "@Status": "Available",
  _id: "9dbbbb8a-558c-40d9-8f3d-f3a05a13b5e4",
  Vehicle: {
    "@AirConditionInd": "true",
    "@TransmissionType": "Automatic",
    "@FuelType": "Petrol",
    "@DriveType": "Unspecified",
    "@PassengerQuantity": "5",
    "@BaggageQuantity": "3",
    "@Code": "IFAR",
    "@CodeContext": "CARTRAWLER",
    "@DoorCount": "5",
    VehMakeModel: {
      "@Name": "Toyota Rav4 or similar",
    },
    PictureURL:
      "https://ctimg-fleet.cartrawler.com/toyota/rav4/primary.png?auto=format&w=600",
  },
  TotalCharge: {
    "@RateTotalAmount": "878.98",
    "@EstimatedTotalAmount": "878.98",
    "@CurrencyCode": "CAD",
  },
};

describe("car container component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<CarContainer {...data} />);
  });

  it("it should render without errors", () => {
    const wrapper = component.find(".car-cotainer-flex");
    console.log(component.debug());
    expect(wrapper.length).toBe(1);
  });
  it("it should render a the image with default value", () => {
    const wrapper = component.find("img");
    expect(wrapper.length).toBe(1);
  });
  it("it should render a the image with default car image", () => {
    const wrapper = component.find("img").prop("src");
    expect(wrapper).toBe(data.Vehicle.PictureURL);
  });
  it("A total of 4 legends displayed", () => {
    const wrapper = component.find("Legend");
    expect(wrapper.length).toBe(4);
  });

  it("Correct image is passed to the legend", () => {
    const wrapper = component.find("Legend").at(1).prop("title");
    expect(wrapper).toBe(data.Vehicle["@PassengerQuantity"]);
  });
  it("Correct image is passed to the legend 2", () => {
    const wrapper = component.find("Legend").at(2).prop("title");
    expect(wrapper).toBe(data.Vehicle["@BaggageQuantity"]);
  });
});
