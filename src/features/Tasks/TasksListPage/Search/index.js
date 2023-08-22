import { Input, Wrapper } from "./styled";
import { useLocation, useHistory } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const history = useHistory();

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value.trim());
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
