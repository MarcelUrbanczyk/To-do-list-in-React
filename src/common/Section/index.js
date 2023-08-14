import { StyledSection, Header, HeaderText, Container } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      <HeaderText>{title}</HeaderText>
      {extraHeaderContent}
    </Header>
    <Container>{body}</Container>
  </StyledSection>
);

export default Section;
