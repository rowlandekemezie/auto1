import React from "react";
import { shallow, mount } from "enzyme";
import { Router } from "react-router-dom";
import history from "history/createBrowserHistory";
import Navbar from "../../components/Navbar";

describe("<Navbar />", () => {
  it("should render component properly", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.length).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correct <img /> and <Link /> tags", () => {
    const renderComp = mount(
      <Router history={history()}>
        <Navbar />
      </Router>
    );
    expect(renderComp.find("img").length).toBe(1);
    expect(renderComp.find("Link").length).toBe(4);
  });
});
