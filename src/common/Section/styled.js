import styled from "styled-components";

export const StyledSection = styled.section`
  box-shadow: 0px 0px 4px 1px #ccc;
  margin: 10px;
`;

export const Header = styled.header`
  background: white;
  border: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  height: 80px;
  @media (max-width: 960px) {
    height: auto;
  }
  @media (max-width: 780px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const HeaderText = styled.h2`
  font-size: 32px;
  grid-row-start: 1;
  margin: 20px;
  white-space: nowrap;
`;

export const Container = styled.div`
  align-items: center;
  background: white;
  border: 1px solid #eee;
  justify-content: center;
  min-height: 100px;
`;
