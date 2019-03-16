import React from "react";
import { shallow, mount } from "enzyme";
import Pagination from "../../components/Pagination";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

describe("<Pagination />", () => {
  const props = {
    onNext: jest.fn(),
    onPrevious: jest.fn(),
    currentPage: 1,
    totalPageCount: 2
  };
  it("should render component properly", () => {
    const wrapper = shallow(<Pagination {...props} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should props with the required proptypes", () => {
    const wrapper = mount(<Pagination {...props} />);
    expect(wrapper.props().onNext).toBeFunction();
    expect(wrapper.props().onPrevious).toBeFunction();
    expect(wrapper.props().currentPage).toBeNumber();
    expect(wrapper.props().totalPageCount).toBeNumber();
  });

  it("should show disabled text and updated properly", () => {
    const wrapper = mount(<Pagination {...props} />);

    const spans = wrapper.find("span");
    expect(spans.length).toBe(5);
    expect(spans.at(0).props().disabled).toBeTruthy();
    expect(spans.at(2).props().disabled).toBeTruthy();
    expect(spans.at(4).props().disabled).toBeFalsy();
    expect(spans.at(2).text()).toEqual(
      `Page ${props.currentPage} of ${props.totalPageCount} `
    );
    expect(spans.at(4).text()).toEqual(`Last`);
  });
});
