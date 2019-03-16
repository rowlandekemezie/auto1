import React from "react";
import { shallow, mount } from "enzyme";
import Footer from "../../components/Footer";

describe("<Footer />", () => {
  it("should render component properly", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correct text in the footer", () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper.find("p").length).toBe(1);
    expect(wrapper.find("p").text()).toMatch(new RegExp(/AUTO1 Group 2019/));
  });
});
