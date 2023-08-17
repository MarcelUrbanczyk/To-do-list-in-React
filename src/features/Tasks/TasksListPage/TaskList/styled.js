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
  margin: 0 20px 0 20px;
  grid-template-columns: auto 1fr auto;
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const MarkDoneButton = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: 30px;
  margin: 10px;
  width: 30px;
  transition: 0.3s;
  background-color: green;
  text-decoration: none;
  &:hover {
    background-color: #05aa05;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: 30px;
  margin: 10px;
  width: 30px;
  transition: 0.3s;
  background-color: #ff0048;
  &:hover {
    background-color: #b90437;
  }
`;

export const Content = styled.span`
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;

export const StyledLink = styled(Link)`
  color: teal;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
  transition: 0.3s;
  &:hover {
    color: rgb(4, 201, 201);
  }
`;
