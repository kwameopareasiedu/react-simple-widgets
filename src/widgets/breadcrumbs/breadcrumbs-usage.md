[Home](../../../README.md) / Breadcrumbs

# Breadcrumbs

This widget provides breadcrumb styling for its `<a/>` children. `Breadcrumbs` is intrinsically a `div` element and accepts all of its attributes.

## Usage

```jsx
import { Link } from "react-router-dom";
import { Breadcrumbs } from "react-simple-widgets";

<Breadcrumbs>
    <Link to="">Home</Link>
    <Link to="">Page 1</Link>
    <Link to="">Path 1</Link>
    <Link to="">Sub-path 1</Link>
    <Link to="">Sub-sub-path 1</Link>
</Breadcrumbs>
```
