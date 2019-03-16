import React from "react";
import { shallow, mount } from "enzyme";
import Router from "react-router-dom";
import history from "history/createBrowserHistory";
import ConnectedCardDetails, {
  CarDetails
} from "../../../components/Pages/CarDetails";
import { Provider } from "react-router";
import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

const middlewares = [createSagaMiddleware()];
const mockStore = configureStore(middlewares);

describe("<CarDetails />", () => {
  const props = {
    carId: "1234",
    fetchACar: jest.fn(),
    collection: []
  };
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
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

  xit("should render connected CarDetails", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedCardDetails {...props} />
      </Provider>
    );

    const container = wrapper.find(ConnectedCardDetails);
    expect(container.find(CarDetails).length).toBe(1);
    expect(container.find(CarDetails).props().fetchACar).toBeFunction();
  });
});
