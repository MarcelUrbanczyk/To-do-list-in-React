import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto 20px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: teal;
  align-items: flex-end;
  font-size: 18px;
  font-family: "Montserrat";
  transition: 0.3s;
  margin: 20px;
  max-width: 300px;
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
