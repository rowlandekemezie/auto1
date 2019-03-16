import React from "react";
import { shallow, mount } from "enzyme";
import Button from "../../components/Button";

describe("<Button />", () => {
  it("should render component", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find("button")).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render component with props", () => {
    const props = { label: "Title", onClick: jest.fn() };
    const wrapper = mount(<Button {...props} />);
    expect(wrapper.props().label).toBe(props.label);
    expect(wrapper.props().onClick).toBe(props.onClick);
  });
});
