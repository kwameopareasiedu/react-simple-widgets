import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/** A hook that uses queryString to parse URL query string into a state object */
export const useQueryParams = (): any => {
    const { search } = useLocation();
    const [qp, setQP] = useState(queryString.parse(search.substring(1)) || {});
    useEffect(() => setQP(queryString.parse(search.substring(1)) || {}), [search]);
    return qp;
};
