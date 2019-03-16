import React, { useEffect } from "react";
import styled from "styled-components";
import Placeholder from "react-placeholder";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NavBar from "../../NavBar";
import Footer from "../../Footer";
import Button from "../../Button";

import { carActions } from "../../../redux/actions";
import { capitalize } from "../../../utils";

const Main = styled("main")`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px;
  max-width: 800px;
  margin: 0 auto;
  justify-content: space-between;
  min-height: 100vh;
  min-height: calc(100vh - 184px);

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 24px;
  }
`;

const CallToActionBox = styled("div")`
  border: 2px solid ${({ theme }) => theme.GRAY};
  transition: all 0.3s ease;
  padding: 12px;
  margin-bottom: 12px;
  height: 30%;
  display: flex;
  flex-direction: column;
  padding: 24px;

  &:focus,
  &:hover {
    box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
  }

  @media (min-width: 768px) {
    width: 30%;
  }
`;

const Description = styled("div")`
  justify-content: center;
  light-height: 18px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Text = styled("p")`
  font-size: 14px;
  line-height: 24px;
  text-align: justify;
`;

const Title = styled("p")`
  font-weight: 700;
  font-size: 32px;
  margin-top: 8px;
`;

const SaveButtonWrapper = styled("div")`
  align-self: flex-end;
`;

const SubTitle = styled("p")`
  font-size: 18px;
  font-weight: 500;
`;

function DescriptionCard({ car }) {
  return (
    <Description>
      <Title>{car.modelName}</Title>
      <SubTitle>
        Stock #{car.stockNumber} - {car.mileage.number} KM - {car.fuelType} -{" "}
        {capitalize(car.color)}{" "}
      </SubTitle>
      <Text>
        This is currently available and can be delivered as soon as tomorrow
        morning. Please be aware that delivery times shown in their page are not
        definitive and may change due to bad weather conditions.
      </Text>
    </Description>
  );
}

export function CarDetails({
  fetchACar,
  carId,
  selectedCar,
  saveCollection,
  collection
}) {
  const handleOnSave = () => saveCollection(selectedCar);
  const isSaved = collection.find(i => i.stockNumber === parseInt(carId));

  useEffect(() => {
    fetchACar(carId);
  }, [carId]);

  return (
    <Placeholder ready={!!selectedCar} type="media" rows={7} delay={200}>
      <NavBar />
      <Main>
        <DescriptionCard car={selectedCar} />
        <CallToActionBox>
          <Text>
            If you like this car, click the button and save it in your
            collection fo favourite items.
          </Text>
          <SaveButtonWrapper>
            <Button
              label={`${isSaved ? "Remove from collection" : "Save"}`}
              onClick={handleOnSave}
            />
          </SaveButtonWrapper>
        </CallToActionBox>
      </Main>
      <Footer />
    </Placeholder>
  );
}

const mapStateToProps = (
  { cars: { selectedCar, isLoading, collection } },
  ownParams
) => ({
  selectedCar,
  isLoading,
  collection,
  carId: ownParams.match.params.carId
});

const mapDispatchToProps = {
  fetchACar: carActions.fetchACar,
  saveCollection: carActions.saveCollection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetails);

CarDetails.propTypes = {
  car: PropTypes.shape({
    selectedCar: PropTypes.shape({
      modelName: PropTypes.string.isRequired,
      stockNumber: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      fuelType: PropTypes.string.isRequired,
      mileage: PropTypes.shape({
        number: PropTypes.number.isRequired
      })
    }),
    isLoading: PropTypes.bool
  }),
  carId: PropTypes.string.isRequired,
  fetchACar: PropTypes.func.isRequired,
  collection: PropTypes.array
};
