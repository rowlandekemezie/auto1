import React from "react";
import { shallow, mount } from "enzyme";
import FilterBox from "../../components/FilterBox";

describe("<FilterBox />", () => {
  const props = {
    title: "Test",
    value: { label: "test", value: "" },
    handleOnChange: jest.fn()
  };
  it("should render component properly", () => {
    const wrapper = shallow(<FilterBox {...props} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should props with the right values", () => {
    const wrapper = mount(<FilterBox {...props} />);
    expect(wrapper.find("p").length).toBe(1);
    expect(wrapper.find("p").text()).toBe(props.title);
  });
});
