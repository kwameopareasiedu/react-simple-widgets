[Home](../../../README.md) / useQueryParams

# useQueryParams

This is a React [hook](https://reactjs.org/docs/hooks-intro.html) that parses the URL search string and returns a state object containing the data which updates when the URL does

## Usage

```jsx
// https://my-awesome-site.com?key1=value1&key2=value2&key3=value3

import { useEffect } from "react";
import { useQueryParams } from "react-simple-widgets/dist/use-query-params";

export function QueryParamsUsage() {
  const { qp, addQp, delQp } = useQueryParams();

  useEffect(() => {
    console.log(qp);
    /* 
      The output should be:
      { 
        "key1": "value1", 
        "key2": "value2", 
        "key3": "value3" 
      }
    */
  }, [qp]);

  return null;
}
```

- `addQp: (key: string, value: string) => void`

  This function adds a query parameter to the current URL which changes the URL in the browser's address bar.

  > For example, if the current URL is `https://awesomesite.com/public`, calling `addQp("foo", "bar")` will change the URL to `https://awesomesite.com/public?foo=bar`

- `delQp: (key: string | Array<string>) => void`

  This function removes one or many query parameters from the current URL which changes the URL in the browsers address bar.

  > For example, if the current URL is `https://awesomesite.com/public?foo=bar`, calling `delQp("foo")` will change the URL to `https://awesomesite.com/public`
