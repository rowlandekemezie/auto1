import React from "react";
import { shallow, mount } from "enzyme";
import { Router } from "react-router-dom";
import history from "history/createBrowserHistory";
import SidebarFilter from "../../../components/Pages/Cars/SidebarFilter";

describe("<SidebarFilter />", () => {
  const props = {
    fetchAllColors: jest.fn(),
    fetchAllCars: jest.fn(),
    fetchAllManufacturers: jest.fn(),
    manufacturers: { manufactures: ["BMW", "FORD"] },
    colors: { colors: ["Red", "Yellow"] }
  };

  it("should render component properly", () => {
    const wrapper = shallow(<SidebarFilter {...props} />);

    expect(wrapper.length).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with the required proptypes", () => {
    const wrapper = mount(<SidebarFilter {...props} />);

    expect(wrapper.length).toBe(1);
    expect(wrapper.find("FilterBox").length).toBe(2);
    expect(wrapper.find("button").text()).toBe("Filter");
    expect(wrapper.props()).toBeObject();
    expect(wrapper.props().colors).toBeObject(props.colors);
    expect(wrapper.props().manufacturers).toBeObject(props.manufacturers);
  });
});
