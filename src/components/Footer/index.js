import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
  flex: 0 0 80px;
  border-top: 2px solid ${({ theme }) => theme.GRAY};
  text-align: center;
`;

function Footer() {
  return (
    <Wrapper>
      <p>&copy; AUTO1 Group 2019</p>
    </Wrapper>
  );
}

export default Footer;
