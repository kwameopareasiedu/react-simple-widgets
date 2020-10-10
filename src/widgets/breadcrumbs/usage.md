[Home](../../../README.md)

# Breadcrumbs

Breadcrumbs is a widget that provides breadcrumb styling for its link children. Breadcrumbs is
intrinsically a `div` element and accepts all of it's attributes

## Usage

```jsx
import { Breadcrumbs, Link } from "react-simple-widgets";

<Breadcrumbs className="mb-4">
    <Link to="">Home</Link>
    <Link to="">Page 1</Link>
    <Link to="">Path 1</Link>
    <Link to="">Sub-path 1</Link>
    <Link to="">Sub-sub-path 1</Link>
</Breadcrumbs>;
```
