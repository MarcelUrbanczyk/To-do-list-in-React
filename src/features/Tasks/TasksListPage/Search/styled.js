import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Input = styled.input`
  border: 2px solid #eee;
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  max-height: 50px;
  margin: 25px;
  padding: 20px;
  @media (max-width: 400px) {
    max-height: 40px;
    padding: 10px;
  }
`;
