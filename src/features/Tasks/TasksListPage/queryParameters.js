import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (queryParameter) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(queryParameter);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const replaceQueryParameter = ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
  return replaceQueryParameter;
};
