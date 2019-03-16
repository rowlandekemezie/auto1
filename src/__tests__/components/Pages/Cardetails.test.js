import React from "react";
import { shallow, mount } from "enzyme";
import Router from "react-router-dom";
import history from "history/createBrowserHistory";
import { CarDetails } from "../../../components/Pages/CarDetails";

describe("<CarDetails />", () => {
  const props = {
    carId: "1234",
    fetchACar: jest.fn(),
    collection: []
  };

  it("should render component properly", () => {
    const wrapper = shallow(<CarDetails {...props} />);
    expect(wrapper.length).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with the required proptypes", () => {
    const wrapper = mount(<CarDetails {...props} />);
    expect(wrapper.props().carId).toBeString();
    expect(wrapper.props().fetchACar).toBeFunction();
  });
});
