[Home](../../../README.md)

# Breadcrumbs

Breadcrumbs is a widget that provides breadcrumb styling for its `<a/>` children. Breadcrumbs is
intrinsically a `div` element and accepts attributes of a `<div/>` element

## Usage

```jsx
import { Link } from "react-router-dom";
import { Breadcrumbs } from "react-simple-widgets";

<Breadcrumbs className="mb-4">
    <Link to="">Home</Link>
    <Link to="">Page 1</Link>
    <Link to="">Path 1</Link>
    <Link to="">Sub-path 1</Link>
    <Link to="">Sub-sub-path 1</Link>
</Breadcrumbs>;
```
