import styled from "styled-components";

export const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;

export const Frame = styled.div`
  border-radius: 50%;
  border: 2px solid #ccc;
  box-shadow: 0px 0px 4px 1px #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;
`;
