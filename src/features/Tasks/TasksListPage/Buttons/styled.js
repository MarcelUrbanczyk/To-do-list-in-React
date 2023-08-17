import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: teal;
  font-size: 18px;
  font-family: "Montserrat";
  transition: 0.3s;
  margin: auto;
  &:hover {
    color: rgb(4, 201, 201);
  }
  &:disabled {
    color: #777;
  }
  &:disabled:hover {
    color: #434343;
    cursor: not-allowed;
  }
  @media (max-width: 960px) {
    margin-bottom: 20px;
  }
`;
