import React from "react";
import { shallow, mount } from "enzyme";
import NotFound from "../../components/NotFound";
import { Router } from "react-router-dom";

describe("<NotFound />", () => {
  it("should render component", () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render Link component", () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find("Link")).toBeTruthy();
    expect(wrapper.text()).toMatch(new RegExp(/404 - Not Found/));
  });
});
