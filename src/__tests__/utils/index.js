import {
  capitalize,
  buildQueryString,
  renderOptions,
  initialPageNumber,
  saveToCollection,
  getItemFromFavoriteCollection
} from "../../utils";
import { JSDOM } from "jsdom";

describe("captilize", () => {
  it("should capitalize str", () => {
    expect(capitalize("rowland ekemezie")).toEqual("Rowland ekemezie");
    expect(capitalize("Rowland")).toEqual("Rowland");
    expect(capitalize("rowLAnd-ekemezie")).toEqual("Rowland-ekemezie");
    expect(capitalize("rowlAnd Ekemezie")).toEqual("Rowland ekemezie");
  });
});

describe("buildQueryString", () => {
  it("should build a query string", () => {
    expect(
      buildQueryString({
        page: 2,
        manufacturer: "BMW",
        sort: "des"
      })
    ).toEqual("manufacturer=BMW&page=2&sort=des");
    expect(
      buildQueryString({
        page: "",
        manufacturer: "BMW",
        sort: "des"
      })
    ).toEqual("manufacturer=BMW&page=&sort=des");
  });
});

describe("renderOptions", () => {
  it("should return only initial values", () => {
    expect(renderOptions([], "all Option")).toEqual([
      { label: "all Option", value: "" }
    ]);
  });

  it("should return initial values and other options", () => {
    const expectedValue = [
      {
        label: "all Options",
        value: ""
      },
      {
        label: "BMW",
        value: "BMW"
      },
      {
        label: "FORD",
        value: "FORD"
      }
    ];
    expect(renderOptions(["BMW", "FORD"], "all Options")).toEqual(
      expectedValue
    );
  }),
    it("should return initial value as None if it is not provided", () => {
      const expectedValue = [
        {
          label: "None",
          value: ""
        },
        {
          label: "BMW",
          value: "BMW"
        }
      ];
      expect(renderOptions(["BMW"])).toEqual(expectedValue);
    });
});

describe("initialPageNumber", () => {
  it("should render page 1 if there is no page number in the query", () => {
    expect(initialPageNumber()).toEqual(1);
    expect(initialPageNumber()).toBeGreaterThan(0);
  });

  it("should return an integer of the page query params", () => {
    window.history.pushState({}, "Test Title", "/test.html?page=5");
    expect(initialPageNumber()).toEqual(5);
  });
});
