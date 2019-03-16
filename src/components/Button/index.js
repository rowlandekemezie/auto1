import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled("button")`
  width: 128px;
  height: 32px;
  background-color: ${({ theme }) => theme.LIGHT_ORANGE};
  color: white;
  border: none;
  border-radius: 3px;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;

  &:active,
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.ORANGE};
  }
`;

export default ({ label, ...props }) => <Button {...props}>{label}</Button>;

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};
