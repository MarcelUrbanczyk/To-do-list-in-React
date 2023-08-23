import { styled, css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  padding: 0;
`;
export const Task = styled.li`
  align-items: center;
  border-bottom: 2px solid #eee;
  display: grid;
  font-size: 18px;
  grid-template-columns: auto 1fr auto;
  margin: 0 20px 0 20px;
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const MarkDoneButton = styled.button`
  background-color: green;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: 30px;
  margin: 10px;
  transition: 0.3s;
  text-decoration: none;
  width: 30px;

  &:hover {
    background-color: #05aa05;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff0048;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: 30px;
  margin: 10px;
  transition: 0.3s;
  width: 30px;
  &:hover {
    background-color: #b90437;
  }
`;

export const StyledLink = styled(Link)`
  color: teal;
  text-decoration: ${({ isdone }) =>
    isdone === "true" ? "line-through" : "none"};
  transition: 0.3s;
  &:hover {
    color: rgb(4, 201, 201);
  }
`;
