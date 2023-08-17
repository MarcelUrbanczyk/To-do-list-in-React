import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  width: 100%;
  background: teal;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const Item = styled.li`
  display: inline;
  margin: 10px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    font-weight: 700;
  }
`;
