import styled from "styled-components";

export const StyledForm = styled.form`
  align-items: center;
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-gap: 20px;
  height: 100px;
  justify-content: center;
  @media (max-width: 960px) {
    display: grid;
    grid-template-rows: 75px 75px;
    grid-template-columns: 1fr;
    grid-gap: 0;
    height: 150px;
  }
`;

export const Button = styled.button`
  background: teal;
  border: none;
  color: white;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  height: 50px;
  margin: 0 20px 0 0;
  max-height: 50px;
  padding: 10px;
  transition: 0.3s;
  @media (max-width: 960px) {
    grid-row: 2;
    margin: 10px;
    padding: 10px;
  }
  @media (max-width: 400px) {
    max-height: 40px;
    padding: 10px;
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
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  max-height: 50px;
  margin: 0 0 0 20px;
  padding: 20px;
  @media (max-width: 960px) {
    margin: 10px;
  }
  @media (max-width: 400px) {
    max-height: 40px;
    padding: 10px;
  }
`;
