import { StyledLink, Item, List } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledLink activeClassName="active" to="/tasks">
            {" "}
            Tasks{" "}
          </StyledLink>
        </Item>
        <Item>
          <StyledLink activeClassName="active" to="/author">
            Author
          </StyledLink>
        </Item>
      </List>
    </nav>
  );
};

export default Navigation;
