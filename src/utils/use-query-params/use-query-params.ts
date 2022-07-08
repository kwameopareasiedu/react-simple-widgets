import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseQueryParams, UseQueryParamsState } from "../../../types";

export const useQueryParams: UseQueryParams = (): UseQueryParamsState => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const qs2qp = (search: string): any => {
    const parts = search.substring(1).split("&");
    const cleanParts = parts.filter(part => !!part);

    return cleanParts.reduce((acc, part) => {
      const key = part.split("=")[0];
      const val = decodeURIComponent(part.split("=")[1]);
      return { ...acc, [key]: val };
    }, {});
  };

  const qp2qs = (qp: any): string => {
    const keys = Object.keys(qp);
    let qs = "";

    for (const key of keys) {
      const val = qp[key];

      if (![null, undefined].includes(val)) {
        if (qs === "") {
          qs += `?${key}=${val}`;
        } else qs += `&${key}=${val}`;
      }
    }

    return qs;
  };

  const addQp = (key: string, value: string): void => {
    if (params[key] === value) return;
    setParams({ ...params, [key]: encodeURIComponent(value) });
  };

  const delQp = (key: string | Array<string>): void => {
    let shouldUpdate = false;
    const paramKeys = Object.keys(params);

    if (Array.isArray(key)) {
      for (const k of key) {
        if (paramKeys.includes(k)) {
          shouldUpdate = true;
          delete params[k];
        }
      }
    } else {
      if (paramKeys.includes(key)) {
        shouldUpdate = true;
        delete params[key];
      }
    }

    if (shouldUpdate) {
      setParams({ ...params });
    }
  };

  const [params, setParams] = useState<any>(qs2qp(search));

  useEffect(() => {
    const urlParams = qs2qp(search);

    if (JSON.stringify(params) !== JSON.stringify(urlParams)) {
      setParams(urlParams);
    }
  }, [search]);

  useEffect(() => {
    const qs = qp2qs(params);

    if (search !== qs) {
      navigate(qs);
    }
  }, [params]);

  return { qp: params, addQp, delQp };
};
