import styled from "styled-components";

export const StyledForm = styled.form`
  align-items: center;
  display: grid;
  height: 100px;
  justify-content: center;
  grid-template-columns: 5fr 1fr;
  grid-gap: 20px;
  @media (max-width: 960px) {
    display: grid;
    height: 150px;
    grid-template-rows: 75px 75px;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export const Button = styled.button`
  background: teal;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  margin: 0 20px 0 0;
  max-height: 50px;
  transition: 0.3s;
  height: 50px;
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  @media (max-width: 960px) {
    padding: 10px;
    margin: 10px;
    grid-row: 2;
  }
  @media (max-width: 400px) {
    padding: 10px;
    max-height: 40px;
    &:hover {
      transform: none;
    }
  }

  &:hover {
    background: #00abab;
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
  border: 2px solid #eee;
  padding: 20px;
  max-height: 50px;
  margin: 0 0 0 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  @media (max-width: 960px) {
    margin: 10px;
  }
  @media (max-width: 400px) {
    padding: 10px;
    max-height: 40px;
  }
`;
