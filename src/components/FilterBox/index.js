import React from "react";
import Select from "react-select";
import styled from "styled-components";
import PropTypes from "prop-types";

import colors from "../../static/colors";
import { capitalize } from "../../utils";

const Wrapper = styled("div")``;

const Text = styled("p")``;

export default function FilterBox({
  handleOnChange,
  value,
  title,
  options = []
}) {
  return (
    <Wrapper>
      <Text>{capitalize(title)}</Text>
      <Select
        value={value}
        options={options}
        onChange={handleOnChange}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: colors.LIGHT_ORANGE,
            primary: colors.LIGHT_ORANGE
          }
        })}
      />
    </Wrapper>
  );
}

FilterBox.propTypes = {
  value: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }),
  handleOnChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  title: PropTypes.string
};
