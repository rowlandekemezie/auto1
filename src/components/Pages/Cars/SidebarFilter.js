import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "../../Button";
import FilterBox from "../../FilterBox";

import { renderOptions, buildQueryString } from "../../../utils";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  padding: 24px;
  border: 2px solid ${({ theme }) => theme.GRAY};
  height: 30%;
  margin-right: 0;

  @media (min-width: 768px) {
    width: 33.333%;
    margin-right: 24px;
  }
`;

const FilterButtonWrapper = styled("div")`
  align-self: flex-end;
  margin-top: 24px;
`;

export default function SidebarFilter({
  fetchAllColors,
  fetchAllManufacturers,
  manufacturers: { manufacturers },
  colors: { colors },
  history,
  fetchAllCars
}) {
  const [color, setColor] = useState({ value: "", label: "All car colors" });
  const [manufacturer, setManufacturer] = useState({
    value: "",
    label: "All manufacturers"
  });

  useEffect(() => {
    fetchAllManufacturers();
    fetchAllColors();
  }, []);

  const handleFilter = () => {
    const filters = {
      manufacturer: manufacturer.value,
      color: color.value,
      page: 1
    };
    const query = buildQueryString(filters);
    history.push(`/?${query}`);
    fetchAllCars(query);
  };

  return (
    <Wrapper>
      <FilterBox
        value={color}
        handleOnChange={e => setColor(e)}
        title="color"
        options={renderOptions(colors, "All car colors")}
      />
      <FilterBox
        value={manufacturer}
        handleOnChange={e => setManufacturer(e)}
        title="manufacturer"
        options={renderOptions(manufacturers, "All manufacturers")}
      />
      <FilterButtonWrapper>
        <Button label="Filter" onClick={handleFilter} />
      </FilterButtonWrapper>
    </Wrapper>
  );
}

SidebarFilter.propTypes = {
  fetchAllColors: PropTypes.func.isRequired,
  fetchAllManufacturers: PropTypes.func.isRequired,
  manufacturers: PropTypes.shape({
    manufacturers: PropTypes.arrayOf(PropTypes.string.isRequired)
  }).isRequired,
  colors: PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string.isRequired)
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  fetchAllCars: PropTypes.func.isRequired
};
