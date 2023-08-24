import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  align-items: center;
  background: teal;
  display: flex;
  height: 60px;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const Item = styled.li`
  display: inline;
  margin: 10px 20px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    font-weight: 700;
  }
`;
