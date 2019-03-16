import React from "react";
import styled from "styled-components";
import Link from "react-router-dom/Link";

import logo from "../../static/logo.png";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled("img")`
  width: 130px;
  height: 32px;
`;

const NotFoundText = styled("h3")`
  font-size: 32px;
`;
const Text = styled("p")`
  font-size: 18px;
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.LIGHT_ORANGE};
  text-decoration: none;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <Logo src={logo} />
      <NotFoundText>404 - Not Found</NotFoundText>
      <Text>Sorry, the page you are looking for does not exist.</Text>
      <Text>
        You can always go back to <StyledLink to="/">home page.</StyledLink>
      </Text>
    </Wrapper>
  );
}
