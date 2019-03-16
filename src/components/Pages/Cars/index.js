import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Placeholder from "react-placeholder";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NavBar from "../../NavBar";
import Footer from "../../Footer";
import ProductOverview from "./ProductOverview";
import SidebarFilter from "./SidebarFilter";

import {
  carActions,
  colorActions,
  manufacturerActions
} from "../../../redux/actions";
import { buildQueryString, initialPageNumber } from "../../../utils";

const Main = styled("main")`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px;
  justify-content: space-between;
  min-height: calc(100vh - 184px);

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 24px;
  }
`;

export function Cars({
  cars,
  totalPageCount,
  isLoading,
  fetchAllCars,
  history,
  fetchAllColors,
  colors,
  manufacturers,
  fetchAllManufacturers
}) {
  const [page, setCurrentPage] = useState(initialPageNumber());
  const [previousPage, setPreviousPage] = useState(page);
  const [sort, setSort] = useState({ value: "", label: "None" });

  useEffect(() => {
    const filters = { page, sort: sort.value };
    const query = buildQueryString(filters);
    fetchAllCars(query);

    history.push(`/?${query}`);
  }, [page, sort]);

  const onNext = pageNum => {
    setPreviousPage(page);
    setCurrentPage(pageNum);
  };

  return (
    <Placeholder ready={!!cars} type="media" rows={7}>
      <NavBar />
      <Main>
        <SidebarFilter
          fetchAllColors={fetchAllColors}
          fetchAllManufacturers={fetchAllManufacturers}
          manufacturers={manufacturers}
          colors={colors}
          history={history}
          fetchAllCars={fetchAllCars}
        />
        <ProductOverview
          cars={cars}
          value={sort}
          currentPage={page}
          previousPage={previousPage}
          onNext={onNext}
          onPrevious={setCurrentPage}
          totalPageCount={totalPageCount}
          handleOnChange={e => setSort(e)}
        />
      </Main>
      <Footer />
    </Placeholder>
  );
}

const mapStateToProps = (
  { cars: { cars, isLoading, totalPageCount }, manufacturers, colors },
  ownParams
) => ({
  cars,
  isLoading,
  totalPageCount,
  colors,
  manufacturers
});

const mapDispatchToProps = {
  fetchAllCars: carActions.fetchAllCars,
  fetchAllColors: colorActions.fetchAllColors,
  fetchAllManufacturers: manufacturerActions.fetchAllManufacturers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cars);

Cars.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      modelName: PropTypes.string.isRequired,
      stockNumber: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      fuelType: PropTypes.string.isRequired,
      mileage: PropTypes.shape({
        number: PropTypes.number.isRequired
      })
    })
  ),
  isLoading: PropTypes.bool,
  totalPageCount: PropTypes.number,
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
