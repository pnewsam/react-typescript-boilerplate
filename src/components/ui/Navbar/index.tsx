import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: gainsboro;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const Left = styled.div``;

const Right = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Left>
        <Link to="/">Home</Link>
      </Left>
      <Right>
        <Link to="/list">List Page</Link>
        <Link to="/form">Form Page</Link>
      </Right>
    </Nav>
  );
};
