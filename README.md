# React Simple Widgets

![](https://img.shields.io/badge/version-4.1.4-blue) ![](https://img.shields.io/badge/react-v17.0.2+-blue) ![](https://img.shields.io/badge/minified%20size-535.7%20kB-blue) [![](https://img.shields.io/badge/github-star-lightgrey)](https://github.com/kwameopareasiedu/react-simple-widgets)

`React Simple Widgets` is a collection of **composable**, **customizable** widgets to help accelerate your React app development. These widgets perform commonly needed tasks within your app such as dialogs, flash messages, lists and more. 

To find out if this library is right for you, we've compiled the [Storybook](https://storybook.js.org/) samples of all widgets in this library. [Click here](https://kwameopareasiedu.github.io/react-simple-widgets/) to test them out to seem if this library offers what you want before installing it in your project.

## Supporting

[![](src/assets/support-us-on-patreon.png)](https://www.patreon.com/kwameopareasiedu)

`React Simple Widgets` is currently maintained solely by the owner and will **always be free and open-source**. However, if you find this library helpful to your projects and would like to support the development, you can do so via my [Patreon](https://www.patreon.com/kwameopareasiedu) account. 

The funds would be used to get an active team of developers on the project and speed up updates. You are not obligated to this, but every support goes a long way to help bring you enterprise-grade tools and services.

If you love the library, consider leaving a star on the project page on [Github](https://github.com/kwameopareasiedu/react-simple-widgets).

## Installing

Install the latest version of `React Simple Widgets` by running the following command:

```bash
yarn add --dev react-simple-widgets
```

## Peer Dependencies

`React Simple Widgets` requires a few peer dependencies you must also have installed in your project. These are [React](https://reactjs.org), [React DOM](https://reactjs.org), [React Router DOM](https://reactrouter.com/web/guides/quick-start) and [Formik](https://formik.org/). Install these by running the following command:

```bash
yarn add --dev react react-dom react-router-dom formik
```

## CSS Dependencies

`React Simple Widgets` also depends on [Bootstrap 5.1.1+](https://getbootstrap.com/) for base styling and [Font Awesome 5.14.0+](https://fontawesome.com/) for font icons. These must be included in the `index.html` of your project.

## Widgets in the library

Here's a summary of the widgets in `React Simple Widgets`

- [DialogProvider](src/widgets/dialog-provider/dialog-provider-usage.md) - Provides an easy-to-use dialog framework within your app. Dialogs are rendered over the rest of the app

- [LocalStorageProvider](src/widgets/local-storage-provider/local-storage-provider-usage.md) - Provides a reactive wrapper for the local storage API and syncs changes to its state with the browser's local storage

- [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) - Provides a flash message framework built on top of the [DialogProvider](src/widgets/dialog-provider/usage.md) framework

  ---

- [FilePicker](src/widgets/file-picker/file-picker-usage.md) - A file pickerwidget which also supports drag-and-drop

- [DatePicker](src/widgets/date-picker/date-picker-usage.md) - A date picker widget which allows selection of a single date in `YYYY-MM-DD` format

- [MultiDatePicker](src/widgets/multi-date-picker/multi-date-picker-usage.md) - A date picker widget which allows selection of multiple dates in `YYYY-MM-DD` format

- [MonthDatePicker](src/widgets/month-date-picker/month-date-picker-usage.md) - A date picker widget which allows selection of a single month in `YYYY-MM-DD` format

- [TimePicker](src/widgets/time-picker/time-picker-usage.md) - A 12-hour time picker widget which allows selection of a single time in `HH:mm` format

  ---

-   [CustomField](src/widgets/custom-field/custom-field-usage.md) - A widget that allows custom components to be integrated with a [Formik](https://jaredpalmer.com/formik/) form

-   [FieldDecoration](src/widgets/field-decoration/field-decoration-usage.md) - A widget that provides input decoration for its child

-   [TextField](src/widgets/text-field/text-field-usage.md) - A simple string (`<input/>`) form widget

-   [TextAreaField](src/widgets/text-area-field/text-area-field-usage.md) - A simple text (`<textarea/>`) form widget

-   [TextEditorField](src/widgets/text-editor-field/text-editor-field-usage.md) - A WYSIWYG editor form field build on top of the [Quill](https://quilljs.com/) rich text editor

-   [PasswordField](src/widgets/password-field/password-field-usage.md) - A simple password (`<input type="password"/>`) form widget

-   [DropdownField](src/widgets/dropdown-field/dropdown-field-usage.md) - A simple drop down (`<select/>`) form widget

-   [CheckboxField](src/widgets/dropdown-field/dropdown-field-usage.md) - A simple checkbox (`<input type="checkbox"/>`) form widget

-   [SelectField](src/widgets/select-field/select-field-usage.md) - A select widget that allows a single selection from a list of options

-   [MultiSelectField](src/widgets/multi-select-field/multi-select-field-usage.md) - A select widget that allows multiple selections from a list of options

-   [FileField](src/widgets/file-field/file-field-usage.md) - A form widget for the uploading files built on top of [FilePicker](src/widgets/file-picker/file-picker-usage.md)

-   [DateField](src/widgets/date-field/date-field-usage.md) - A form widget for selecting a single date built on top of [DatePicker](src/widgets/date-picker/date-picker-usage.md)

-   [MultiDateField](src/widgets/multi-date-field/multi-date-field-usage.md) - A form widget for selecting multiple dates built on top of [MultiDatePicker](src/widgets/multi-date-picker/multi-date-picker-usage.md)

-   [MonthDateField](src/widgets/month-date-field/month-date-field-usage.md) - A form widget for selecting a single date built on top of [MonthDatePicker](src/widgets/month-date-picker/month-date-picker-usage.md)

-   [TimeField](src/widgets/time-field/time-field-usage.md) - A form widget for selecting a single time built on top of [TimePicker](src/widgets/time-picker/time-picker-usage.md)

    ---

-   [PopupMenu](src/widgets/popup-menu/popup-menu-usage.md) - A widget that revals a popup menu when a trigger element is clicked

-   [TableView](src/widgets/table-view/table-view-usage.md) - A widget that displays a list of items in a responsive tabular form

-   [Pagination](src/widgets/pagination/pagination-usage.md) - A widget which displays pagination navigation for a list of items. This is commonly used with [TableView](src/widgets/table-view/table-view-usage.md)

-   [ObjectView](src/widgets/object-view/object-view-usage.md) - A widget that renders an object's data in a tabular form

-   [Loader](src/widgets/loader/loader-usage.md) - A widget that displays a rotating spinner icon to indicate some busy process

-   [BusyButton](src/widgets/busy-button/busy-button-usage.md) - A button widget that displays a loading indicator when its `busy` attribute is `true`

-   [ConfirmButton](src/widgets/confirm-button/confirm-button-usage.md) - A widget which displays a confirmation dialog for an action to be performed

-   [Breadcrumbs](src/widgets/breadcrumbs/breadcrumbs-usage.md) - A breadcrumb style navigation widget

-   [ActionBar](src/widgets/action-bar/action-bar-usage.md) - A widget that displays a row of spaced buttons or nothing if no children are specified

-   [GrowableItemsContainer](src/widgets/growable-items-container/growable-items-container-usage.md) - A widget that provides a load-more mechanism for a growing list of items

## Hooks in this library

-   [useQueryParams](src/utils/use-query-params/use-query-params-usage.md) - A hook that returns a object containing the URL search string parameters

-   [useCountdown](src/utils/use-countdown/use-countdown-usage.md) - A hook which provides numeric countdown functionality

-   [useWindowBreakpoints](src/utils/use-window-breakpoints/use-window-breakpoints-usage.md) - A hook which provides the window width category data according to [Bootstrap's breakpoints](https://getbootstrap.com/docs/5.1/layout/breakpoints/#available-breakpoints)

-   [useGrowableList](src/utils/use-growable-list/use-growable-list-usage.md) - A hook which manages the state of growing list. Used with [GrowableItemsContainer](src/widgets/growable-items-container/growable-items-container-usage.md) to provide a load-more mechanism for a growing list

## Utilities in this library

-   [debounce](src/utils/debounce/debounce-usage.md) - Calls a function after a specified delay after a caller has stopped calling it

## Theming

The colors used by the widgets are controlled by CSS variables and you can customize them to suit your application's
theme

| CSS variable                  | Description                                              | Default value |
| ----------------------------- | -------------------------------------------------------- | ------------- |
| `--rsw-label-color`           | Controls the label color of field decorator              | `#777777`     |
| `--rsw-error-color`           | Controls the error color of components indicating errors | `#ff5555`     |
| `--rsw-primary-color`   | Controls the primary color used by all widgets           | `#402897` |
| `--rsw-primary-color-light` | Controls the lighter shade of the primary color | `#40289722` |
| `--rsw-secondary-color` | Controls the secondary color used by all widgets         | `#b3b3b3`     |
| `--rsw-transition-duration`   | Controls the duration of transitions used by all widgets | `0.15s`      |

The following variables are widget specific

| CSS variable                           | Description                                                  | Default value |
| -------------------------------------- | ------------------------------------------------------------ | ------------- |
| `--rsw-flash-view-error-theme-color`   | Controls the theme color of error flash message dialogs created by the [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) widget | `#ff5555`     |
| `--rsw-flash-view-warning-theme-color` | Controls the theme color of warning flash message dialogs created by the [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) widget | `#ffdd55`     |
| `--rsw-flash-view-info-theme-color`    | Controls the theme color of information flash message dialogs created by the [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) widget | `#55ddff`     |
| `--rsw-flash-view-success-theme-color` | Controls the theme color of success flash message dialogs created by the [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) widget | `#6cd924`     |
| `--rsw-popup-menu-scrim-bg-color`      | Controls the background color of the scrim that appears when a [PopupMenu](src/widgets/popup-menu/popup-menu-usage.md) is revealed | `#00000004`   |

## Running Storybook Samples Locally

This library is built with [Storybook](https://storybook.js.org/) and each widget has its own set of stories demonstrating use cases of the widget. When executed, Storybook will open a web page containing all the stories for you to interact with.

To execute the storybook, follow these steps:

1.  Clone the project from [Github](https://github.com/kwameopareasiedu/react-simple-widgets)
2.  Run `yarn install` to install the project dependencies
3.  Run `yarn storybook`

## Maintainers

-   [Kwame Opare Asiedu](https://github.com/kwameopareasiedu/)

## Change Log

[View change log](CHANGELOG.md)

