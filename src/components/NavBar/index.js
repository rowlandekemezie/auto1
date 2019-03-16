import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../../static/auto1_logo@2x.png";

const Wrapper = styled("div")`
  display: flex;
  max-height: 80px;
  padding: 12px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const NavItemsWrapper = styled("div")`
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;
`;

const BrandLogo = styled(NavLink)`
  width: 150px;
  height: 32px;
`;

const Logo = styled("img")`
  width: 100%;
  height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.BLACK};
  font-size: 14px;
  margin-left: 20px;
`;

const renderLink = (page, i) => (
  <StyledNavLink
    key={i}
    to={`/`} /** Should be a real page when this feature is provided **/
  >
    {page}
  </StyledNavLink>
);

const Navbar = () => {
  const pages = ["Purchase", "My Orders", "Sell"];

  return (
    <Wrapper>
      <BrandLogo to={"/"}>
        <Logo src={logo} />
      </BrandLogo>
      <NavItemsWrapper>{pages.map(renderLink)}</NavItemsWrapper>
    </Wrapper>
  );
};

export default Navbar;
