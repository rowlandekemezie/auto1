import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const Text = styled("span")`
  color: ${({ theme }) => theme.LIGHT_ORANGE};
  font-size: 12px;
  margin: 0 24px;
  cursor: pointer;

  ${props =>
    props.disabled
      ? css`
          color: ${({ theme }) => theme.BLACK};
          cursor: not-allowed;
        `
      : null}
`;

export default function Pagination({
  onNext,
  onPrevious,
  totalPageCount,
  currentPage,
  previousPage
}) {
  console.log(totalPageCount);

  return (
    <Wrapper>
      <Text onClick={() => onNext(1)} disabled={currentPage === 1}>
        First
      </Text>
      <Text
        onClick={() => onPrevious(previousPage)}
        disabled={previousPage === currentPage}
      >
        Previous
      </Text>
      <Text disabled={true}>
        Page {currentPage} of {totalPageCount}{" "}
      </Text>
      <Text
        onClick={() => onNext(currentPage + 1)}
        disabled={currentPage === totalPageCount}
      >
        Next
      </Text>
      <Text
        onClick={() => onNext(totalPageCount)}
        disabled={currentPage === totalPageCount}
      >
        Last
      </Text>
    </Wrapper>
  );
}

Pagination.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  totalPageCount: PropTypes.number,
  currentPage: PropTypes.number,
  previousPage: PropTypes.number
};
