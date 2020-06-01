import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/** A hook that uses queryString to parse URL query string into a state object */
export const useQueryParams = (): any => {
    const qs2qp = (search: string): any => {
        const parts = search.substring(1).split("&");
        const cleanParts = parts.filter(part => !!part);
        return cleanParts.reduce((acc, part) => ({ ...acc, [part.split("=")[0]]: part.split("=")[1] }), {});
    };

    const { search } = useLocation();
    const [qp, setQP] = useState(qs2qp(search));
    useEffect(() => setQP(qs2qp(search)), [search]);
    return qp;
};
