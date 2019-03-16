import React from "react";
import styled from "styled-components";
import PlaceHolder from "react-placeholder";
import PropTypes from "prop-types";
import Link from "react-router-dom/Link";

import FilterBox from "../../FilterBox";
import Pagination from "../../Pagination";

import { capitalize } from "../../../utils";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    width: 66.666%;
  }
`;

const CardWrapper = styled("div")`
  display: flex;
  border: 2px solid ${({ theme }) => theme.GRAY};
  transition: all 0.3s ease;
  padding: 12px;
  margin-bottom: 12px;

  &:focus,
  &:hover {
    box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
  }
`;

const Description = styled("div")`
  justify-content: center;
  light-height: 18px;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.ORANGE};
  font-size: 12px;
  text-decoration: none;
`;

const Image = styled("img")`
  width: 120px;
  height: 120px;
  margin-right: 24px;
`;

const Text = styled("p")`
  font-size: 12px;
  font-weight: 400;
`;

const Title = styled("p")`
  font-weight: 700;
  font-size: 18px;
  margin-top: 8px;
`;

const SortFilterBoxWrapper = styled("div")`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const HeadingContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PageMetaData = styled("div")`
  width: 60%;
`;

const SubTitle = styled("p")`
  font-size: 18px;
`;

function Card({ car }) {
  return (
    <CardWrapper>
      <Image src={car.pictureUrl} />
      <Description>
        <Title>{car.modelName}</Title>
        <Text>
          Stock #{car.stockNumber} - {car.mileage.number} KM - {car.fuelType} -{" "}
          {capitalize(car.color)}{" "}
        </Text>
        <StyledLink to={`/cars/${car.stockNumber}`}>View details</StyledLink>
      </Description>
    </CardWrapper>
  );
}

const SORTING_OPTIONS = [
  { value: "", label: "None" },
  { value: "asc", label: "Mileage - Ascending Order" },
  { value: "des", label: "Mileage - Descending Order" }
];

export default function ProductOverview({
  cars,
  value,
  onNext,
  isLoading,
  onPrevious,
  currentPage,
  previousPage,
  totalPageCount,
  handleOnChange
}) {
  return (
    <PlaceHolder ready={!!cars || isLoading} type="media" row={7}>
      <Wrapper>
        <HeadingContainer>
          <PageMetaData>
            <Title>Available cars</Title>
            <SubTitle>
              Showing {cars.length} of {totalPageCount}{" "}
              {`result${cars.length > 1 ? "s" : ""}`}{" "}
            </SubTitle>
          </PageMetaData>
          <SortFilterBoxWrapper>
            <FilterBox
              value={value}
              options={SORTING_OPTIONS}
              title="Sort by"
              handleOnChange={handleOnChange}
            />
          </SortFilterBoxWrapper>
        </HeadingContainer>
        {cars.map((car, index) => (
          <Card car={car} key={`${car.stockNumber}-${index}`} />
        ))}
        <Pagination
          currentPage={currentPage}
          previousPage={previousPage}
          totalPageCount={totalPageCount}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      </Wrapper>
    </PlaceHolder>
  );
}

ProductOverview.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      modelName: PropTypes.string.isRequired,
      stockNumber: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      fuelType: PropTypes.string.isRequired,
      mileage: PropTypes.shape({
        number: PropTypes.number.isRequired
      })
    }).isRequired
  ),
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  totalPageCount: PropTypes.number,
  value: PropTypes.object,
  currentPage: PropTypes.number,
  previousPage: PropTypes.number
};
