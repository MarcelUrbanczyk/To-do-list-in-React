import styled from "styled-components";

export const StyledSection = styled.section`
  box-shadow: 0px 0px 4px 1px #ccc;
  margin: 10px;
`;

export const Header = styled.header`
  background: white;
  border: 1px solid #eee;
  display: grid;
  height: 80px;
  grid-template-columns: auto 200px 200px;
  @media (max-width: 960px) {
    height: auto;
    grid-template-columns: auto;
    grid-gap: 20px;
  }
`;

export const HeaderText = styled.h2`
  font-size: 32px;
  margin: 20px;
  grid-row-start: 1;
  white-space: nowrap;
`;

export const Container = styled.div`
  align-items: center;
  background: white;
  border: 1px solid #eee;
  min-height: 100px;
  justify-content: center;
`;
