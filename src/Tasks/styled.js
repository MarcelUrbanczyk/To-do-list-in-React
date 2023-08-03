import { styled, css } from "styled-components";
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

export const Button = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: 30px;
  margin: 10px;
  width: 30px;
  transition: 0.3s;
  ${({ markDone }) =>
    markDone &&
    css`
      background-color: green;
      text-decoration: none;
      &:hover {
        background-color: #05aa05;
      }
    `}
  ${({ remove }) =>
    remove &&
    css`
      background-color: #ff0048;
      &:hover {
        background-color: #b90437;
      }
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
