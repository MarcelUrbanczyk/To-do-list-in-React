import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Input = styled.input`
  border: 2px solid #eee;
  padding: 20px;
  max-height: 50px;
  margin: 25px;
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  @media (max-width: 400px) {
    padding: 10px;
    max-height: 40px;
  }
`;
