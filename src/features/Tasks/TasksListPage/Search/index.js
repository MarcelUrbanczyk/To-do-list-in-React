import { Input, Wrapper } from "./styled";
import { useLocation, useHistory } from "react-router-dom";
const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");
  const history = useHistory();

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value.trim());
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <Input value={query || ""} onChange={onInputChange} />
    </Wrapper>
  );
};

export default Search;
