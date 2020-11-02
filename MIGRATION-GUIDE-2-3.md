# V3 Migration Guide

This guide covers all the breaking changes that you need to know in this version as well as how to
migrate your applications from 2.x.x to 3.x.x

-   Migrating to this version contains only one breaking change. Imports from `react-simple-widgets/dist/constants` have
    been moved to `react-simple-widgets/types`. I.e. All `import { ... } from "react-simple-widgets/dist/constants"`
    should be replaced with `import { ... } from "react-simple-widgets/types"`
