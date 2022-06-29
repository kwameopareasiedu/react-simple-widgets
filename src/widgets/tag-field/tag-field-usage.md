[Home](../../../README.md) / TagField

# TagField

This widget is a tag input form widget

`TagField` is intrinsically a [TagInput](../tag-input/tag-input-usage.md) element and accepts all of its attributes.

## Usage

```jsx
import { TagField } from "react-simple-widgets/dist/tag-field";

<TagField name label helper leading trailing />;
```

- `name: string`

  The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

- `label?: string`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

- `helper?: string`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

- `leading?: any`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

- `trailing?: any`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)
