import React from "react";
import { shallow, mount } from "enzyme";
import { Cars } from "../../../components/Pages/Cars";

describe("<Cars />", () => {
  const props = {
    fetchAllColors: jest.fn(),
    fetchAllManufacturers: jest.fn(),
    manufacturers: { manufacturers: ["BMW"] },
    colors: { colors: ["Red", "Yellow"] },
    fetchAllCars: jest.fn(),
    history: { push: jest.fn() }
  };

  it("should render component properly", () => {
    const wrapper = shallow(<Cars {...props} />);
    expect(wrapper.length).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with the required proptypes", () => {
    const wrapper = mount(<Cars {...props} />);
    expect(wrapper.props()).toBeObject(props);
    expect(wrapper.props().fetchAllCars).toBeFunction();
    expect(wrapper.props().fetchAllManufacturers).toBeFunction();
    expect(wrapper.props().fetchAllColors).toBeFunction();
    expect(wrapper.props().manufacturers).toBeObject(props.manufacturers);
    expect(wrapper.props().colors).toBeObject(props.colors);
  });
});
