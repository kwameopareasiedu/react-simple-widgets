import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UseQueryParams } from "../../../types";

export const useQueryParams: UseQueryParams = (): any => {
    const qs2qp = (search: string): any => {
        const parts = search.substring(1).split("&");
        const cleanParts = parts.filter(part => !!part);
        return cleanParts.reduce(
            (acc, part) => ({ ...acc, [part.split("=")[0]]: decodeURIComponent(part.split("=")[1]) }),
            {}
        );
    };

    const location = useLocation();
    const [qp, setQP] = useState(qs2qp(location.search));
    useEffect(() => setQP(qs2qp(location.search)), [location]);
    return qp;
};
