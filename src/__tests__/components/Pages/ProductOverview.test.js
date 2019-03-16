import React from "react";
import { shallow, mount } from "enzyme";
import { Router } from "react-router-dom";
import history from "history/createBrowserHistory";
import ProductOverview from "../../../components/Pages/Cars/ProductOverview";

describe("<ProductOverview />", () => {
  const props = {
    carId: "1234",
    fetchACar: jest.fn(),
    onNext: jest.fn(),
    onPrevious: jest.fn(),
    handleOnChange: jest.fn(),
    cars: [
      {
        modelName: "1",
        stockNumber: 2,
        color: "red",
        fuelType: "diesel",
        mileage: { number: 234 }
      }
    ]
  };

  it("should render component properly", () => {
    const wrapper = shallow(<ProductOverview {...props} />);
    expect(wrapper.length).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with the required proptypes and exact components", () => {
    const wrapper = mount(
      <Router history={history()}>
        <ProductOverview {...props} />
      </Router>
    );
    const container = wrapper.find(ProductOverview);
    expect(container.length).toBe(1);
    expect(container.find("Card").length).toBe(1);
    expect(container.find("Link").length).toBe(1);
    expect(container.props().cars).toBeArray();
    expect(container.props().cars[0].mileage).toBeObject();
  });
});
