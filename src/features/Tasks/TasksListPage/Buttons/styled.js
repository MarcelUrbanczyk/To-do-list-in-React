import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto 20px;
`;

export const Button = styled.button`
  align-items: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  color: teal;
  font-size: 18px;
  font-family: "Montserrat";
  margin: 20px;
  max-width: 300px;
  transition: 0.3s;
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
  @media (max-width: 780px) {
    flex-basis: 99%;
    max-width: unset;
  }
`;

export const ErrorButton = styled(Button)`
  color: crimson;
  &:hover {
    color: rgb(240, 14, 22);
  }
`;
