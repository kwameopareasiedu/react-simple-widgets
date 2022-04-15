import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseQueryParams, UseQueryParamsState } from "../../../types";

export const useQueryParams: UseQueryParams = (): UseQueryParamsState => {
  const MODIFICATION_FN_NAMES = ["set", "unset"];
  const location = useLocation();
  const navigate = useNavigate();

  const qs2qp = (search: string): any => {
    const parts = search.substring(1).split("&");
    const cleanParts = parts.filter(part => !!part);
    return cleanParts.reduce(
      (acc, part) => ({ ...acc, [part.split("=")[0]]: decodeURIComponent(part.split("=")[1]) }),
      {}
    );
  };

  const qp2qs = (qp: any): string => {
    const keys = Object.keys(qp);
    let qs = "";

    for (const key of keys) {
      const val = qp[key];

      if (!MODIFICATION_FN_NAMES.includes(key) && ![null, undefined].includes(val)) {
        if (qs === "") {
          qs += `?${key}=${val}`;
        } else qs += `&${key}=${val}`;
      }
    }

    return qs;
  };

  const set = (key: string, value: string): void => {
    if (MODIFICATION_FN_NAMES.includes(key)) return;
    setQP({ ...qp, [key]: encodeURIComponent(value) });
  };

  const unset = (key: string): void => {
    if (MODIFICATION_FN_NAMES.includes(key)) return;
    delete qp[key];
    setQP({ ...qp });
  };

  const [qp, setQP] = useState<UseQueryParamsState>({ ...qs2qp(location.search), set, unset });

  useEffect(() => {
    const _qp = qs2qp(location.search);

    if (JSON.stringify(qp) !== JSON.stringify(_qp)) {
      setQP({ ...qs2qp(location.search), set, unset });
    }
  }, [location.search]);

  useEffect(() => {
    const qs = qp2qs(qp);

    if (location.search !== qs) {
      navigate(qs);
    }
  }, [qp]);

  return qp;
};
