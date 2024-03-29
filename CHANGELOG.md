[Home](README.md) / Change Log

# Change Log

- `6.7.0 (Breaking)`

  - Integrated [styled-components](https://styled-components.com/) into widgets which prevents CSS variables from being redeclared many times in browser by each component's `scss` file.
  - Moved CSS variables and global styles to [src/style.tsx](src/style.tsx) which must be imported at the start of your app.

- `6.6.0`

  - Added optional `emptyRowBuilder` attribute to [TableView](src/widgets/table-view/table-view-usage.md) which renders a message when the items list is empty.
  - Added optional `onRowClick` attribute to [TableView](src/widgets/table-view/table-view-usage.md) which is called when a table row is clicked.

- `6.5.0 (Breaking)`

  - Changed return type of [useQueryParams](src/utils/use-query-params/use-query-params-usage.md) hook to an object with query parameters `qp` and functions to modify the query parameters `addQp()` and `delQp()`.
  - Fixed bug in [useQueryParams](src/utils/use-query-params/use-query-params-usage.md) causing additional parameters to overwrite existing parameters.

- `6.4.0`

  - Fixed flex input in [TagInput](src/widgets/tag-input/tag-input-usage.md) widget
  - Exported ESM modules in `dist/index.js` with typings in `dist/index.d.ts`. This maintains its compatibility with IDE autocomplete features and tree-shaking bundlers.

- `6.3.0`

  - Added optional `mobileTableCols` attribute to [TableView](src/widgets/table-view/table-view-usage.md) which preserves the table view in mobile view if set. It also limits the number of columns to render in mobile view.
  - Updated default appearance of [TableView](src/widgets/table-view/table-view-usage.md).

- `6.2.0`

  - Added [TagInput](src/widgets/tag-input/tag-input-usage.md) widget
  - Added [TagField](src/widgets/tag-field/tag-field-usage.md) widget
  - Added `helper.send(msg?)` to [DialogProvider](src/widgets/dialog-provider/dialog-provider-usage.md) widget which allows dialogs to send messages to the host **without closing the dialog**

- `6.1.1`

  - Change `onChange?.call()` to `onChange()` in [TextEditorField](src/widgets/text-editor-field/text-editor-field-usage.md) to prevent issues with `this`

- `6.1.0`

  - Implemented lazy loading of [Quill](https://quilljs.com) in [TextEditorField](src/widgets/text-editor-field/text-editor-field-usage.md). This reduces overall size by up to 81%.
  - Added optional `theme` attribute to [TextEditorField](src/widgets/text-editor-field/text-editor-field-usage.md) to control the appearance of the editor
  - Added optional `asText` attribute to [TextEditorField](src/widgets/text-editor-field/text-editor-field-usage.md). This determines whether the editor emits plain text instead of HTML

- `6.0.0 (Breaking)`

  - Compiled separate ES modules for each element to enable tree shaking and much smaller app size.
    > Instead of using `import { TableView } from "react-simple-widgets`, use `import { TableView } from "react-simple-widgets/dist/table-view`
  - Upgraded [React](https://reactjs.org/) and [ReactDOM](https://reactjs.org/) to v18
  - Renamed `GrowableItemsContainer` widget to [InfiniteList](src/widgets/infinite-list/infinite-list-usage.md)
  - Renamed `useGrowableList` hook to [useInfiniteList](src/utils/use-infinite-list/use-infinite-list-usage.md)
  - Renamed `onFlashDismissed` to `onDismissed` for custom flash dialogs in [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md)
  - Added `confirmButtonClassName` and `cancelButtonClassName` attributes to [ConfirmButton](src/widgets/confirm-button/confirm-button-usage.md). These help target the confirmation and cancel buttons in the popup dialog

- `5.0.0 (Breaking)`
  - Updated [React Router DOM](https://github.com/remix-run/react-router#readme) to v6
  - Added `validator` attribute to [Calendar](src/widgets/calendar/calendar-usage.md) widget
  - Added `validator` attribute to [DatePicker](src/widgets/date-picker/date-picker-usage.md) widget
  - Added `validator` attribute to [MultiDatePicker](src/widgets/multi-date-picker/multi-date-picker-usage.md) widget
  - Added `validator` attribute to [MonthDatePicker](src/widgets/month-date-picker/month-date-picker-usage.md) widget
  - Added auto-close feature to [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) framework
  - Changed order of arguments in all flash functions provided by [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) framework
  - Added documentation on `set` and `unset` functions in [useQueryParams](src/utils/use-query-params/use-query-params-usage.md)
- `4.2.1`
  - Added `set` and `unset` functions to qp object from [useQueryParams](src/utils/use-query-params/use-query-params-usage.md)
  - Forwarded `disabled` and `readOnly` attributes to all form widgets
- `4.1.4
  - Fixed [ConfirmButton](src/widgets/confirm-button/confirm-button-usage.md) interface extension. [ConfirmButton](src/widgets/confirm-button/confirm-button-usage.md) correctly extends [BusyButton](src/widgets/busy-button/busy-button-usage.md)
  - Removed horizontal borders from [TableView](src/widgets/table-view/table-view-usage.md)
- `4.1.3`
  - Fixed horizontal margin in [DialogProvider](src/widgets/dialog-provider/dialog-provider-usage.md) `DialogView` child
  - Deleted `--rsw-dialog-view-vertical-margin` CSS variable
- `4.1.2`
  - Modified dismiss button in [FlashProvider](src/flash-provider/flash-provider-usage.md) dialog to have a 100% width
- `4.1.1`
  - Omitted `value` from [TimeField](src/widgets/time-field/time-field-usage.md) type
- `4.1.0`
  - Added optional `builder` attribute to [ConfirmButton](src/widgets/confirm-button/confirm-button-usage.md) which allows for a custom confirmation dialog
- `4.0.0 (Breaking)`
  - Removed `TransitionProvider`. Use `<Link/>` from [React Router DOM](https://www.npmjs.com/package/react-router-dom) instead
  - Renamed `ValueStoreProvider` to `LocalStorageProvider`
  - Renamed `PageActions` to `ActionBar`
  - Renamed `ConfirmDialog` to `ConfirmButton`
  - `DatePicker` has been split into `DatePicker`, `MultiDatePicker` and `MonthDatePicker`
  - `DateField` has been split into `DateField`, `MultiDateField` and `MonthDateField`
  - `SelectField` has been split into `CheckboxField`, `SelectField` and `MultiSelectField`
  - `ListView` has been renamed to `TableView`
  - `TextField` has been split into `TextField`, `TextAreaField` and `TextEditorField`
  - Renamed `useLoadMore` to `useGrowableList`
  - Added `GrowableListContainer` widget and `useGrowableList` hook to manage growing lists with a load-more mecanism
  - Added `PopupMenu` widget
- `3.1.0`
  - Added optional `builder` variable to `<FlashProvider/>` to build a custom flash view component [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md)
- `3.0.3`

  - Added optional `btnText` variable to `flashSuccess`, `flashInfo`, `flashWarning` and `flashError` in [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md)

- `3.0.0`

  - `import { ... } from "react-simple-widgets/dist/constants"` has been moved to
    `import { ... } from "react-simple-widgets/types"`

- `2.1.0`

  - Added scroll-to-top feature to [ListView](src/widgets/table-view/table-view-usage.md) if the `items` list changes
  - Fixed bug in [DatePicker](src-old/form/date-picker/usage.md) causing the date to be cleared if the picker dialog is closed without selecting any date
  - Added `persistent` option to `DialogOptions` of [DialogProvider widget
  - Changed [ListView](src/widgets/table-view/table-view-usage.md) widget loader from a circular loader to a horizontal loader
  - Added optional `emptyMessage` prop to [ListView](src/widgets/table-view/table-view-usage.md) widget
  - Added new [PasswordField](src-old/form/password-field/usage.md) widget

- `2.0.2`

  - Reduced top padding of [FilePicker](src/widgets/file-picker/file-picker-usage.md) dialog
  - Fixed the position of underline indicator in [FieldDecoration](src/widgets/field-decoration/field-decoration-usage.md) when the error widget is visible
  - Removed unused theming CSS variables from [README](./README.md)
  - Replaced increase/decrease button content from Fontawesome icons with images. This is because not all projects will use Fontawesome icons

- `2.0.1`

  - Updated [README](./README.md)

- `2.0.0`

  - `DialogSize.FULL` has been added to [DialogProvider](src/widgets/dialog-provider/usage.md) to make dialogs as wide as the window
  - Added `leading`, `trailing` and `stickyFloatingLabel` props to all widgets which are composed of [FieldDecoration](src/widgets/field-decoration/field-decoration-usage.md). These include all the form field widgets

- `1.10.1`

  - Fixed bug causing race conditions when `del` is used successively in [ValueStoreProvider](src/widgets/local-storage-provider/local-storage-provider-usage.md)
  - Fixed bug causing `pageTransitionViewCount` to go below 0, which in turn caused `<Link/>`s outside `<PageTransitionView/>`s not to work in [PageTransitionProvider](src/transition-provider/usage.md)

- `1.10.0`

  - Added start and end pages display if current `page > start + 3` and `page < end - 3` respectively in [ListView](src/widgets/table-view/table-view-usage.md) widget

- `1.8.0`

  - Added [TimePicker](src-old/form/time-picker/usage.md) widget
  - Added [TimeField](src-old/form/time-field/usage.md) widget
  - Modified [SelectField](src/widgets/select-field/select-field-usage.md) to make option labels `inline`
  - Added [useWindowBreakpoints](src/utils/use-window-breakpoints/use-window-breakpoints-usage.md) hook

- `1.7.4`

  - Fixed fatal error in `v1.7.3` when importing [useCountdown](src/utils/use-countdown/use-countdown-usage.md) hook

- `1.7.3`

  - Added [debounce](src/utils/debounce/usage.md) utility
  - Added [useCountdown](src/utils/use-countdown/use-countdown-usage.md) hook
  - Added `initialStorageKeys` prop to [ValueStoreProvider](src/widgets/local-storage-provider/local-storage-provider-usage.md) to allow pre-existing local storage values to be added to the value store

- `1.7.2`

  - Modified [PageTransitionProvider](src/transition-provider/usage.md) to reuse the root component between page transitions. This preserves scroll positions if query parameters were modified on the same URL path

- `1.7.1`

  - Changed `display` of links in [Breadcrumbs](src/widgets/breadcrumbs/breadcrumbs-usage.md) from `inline-block` to `inline`
  - Modify [ListView](src/widgets/table-view/table-view-usage.md) to do nothing if options builder returns `null` or an empty array of options instead of displaying a dialog with no options

- `1.7.0`
  - Modified theme color of success messages of [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md)
  - Added CSS property `word-break: break-word` to messages of [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md)
  - Changed CSS property `word-break` of [ListView](src/widgets/table-view/table-view-usage.md) cells from `break-all` to `break-word`
  - Fixed bug causing inconsistent borders in [ListView](src/widgets/table-view/table-view-usage.md)item options
  - Modified [ListView](src/widgets/table-view/table-view-usage.md) options to use a builder pattern instead of an array of options. This allows for more control over options shown for each list item
- `1.6.2`

  - Added `middle` vertical alignment to labels `<td/>` elements of [ObjectView](src/widgets/object-view/object-view-usage.md)
  - Added `word-break` styling to cells of [ListView](src/widgets/table-view/table-view-usage.md) to force text overflow if content cannot fit on one line
  - Added auto scroll-to-top-of-list feature to [ListView](src/widgets/table-view/table-view-usage.md) when the items list is modified by a page change
  - Modified [SelectField](src/widgets/select-field/select-field-usage.md) to accept `any` type for options values instead of just `string`
  - Reduces header vertical padding in [ListView](src/widgets/table-view/table-view-usage.md)
  - Added item options confirmation feature to [ListView](src/widgets/table-view/table-view-usage.md)

- `1.6.1`

  - Added inline styling to `Loader` in [BusyButton](src/widgets/busy-button/busy-button-usage.md)

- `1.6.0`

  - Corrected path to [useLoadMore](src-old/hooks/use-load-more/usage.md) stories in its docs
  - Added story for `bind` property of [DialogProvider](src/widgets/dialog-provider/usage.md) widget
  - Added _disabled_ styling to [FieldDecoration](src/widgets/field-decoration/field-decoration-usage.md) widget. Updated usage in [TextField](src/widgets/text-field/text-field-usage.md) and [DropdownField](src/widgets/dropdown-field/dropdown-field-usage.md)
  - Added `text-center` class to [Loader](src/widgets/loader/loader-usage.md) as its added in majority of use cases
  - Added [PageActions](src/widgets/action-bar/action-bar-usage.md) widget

- `1.5.0`

  - Added [useLoadMore hook](src-old/hooks/use-load-more/usage.md)
  - Removed `initialLocalStorageKeys` prop from [ValueStoreProvider](src/widgets/local-storage-provider/local-storage-provider-usage.md) widget. Once a value is persisted, it will automatically be remembered until removed, even when the page is refreshed
  - Changed `ConfirmDialogTheme.ERROR` to `ConfirmDialogTheme.DANGER` for [ConfirmButtonDialog](src/widgets/confirm-button/confirm-button-usage.md)

- `1.4.1`

  - Added overflow styling to [DatePicker](src-old/form/date-picker/usage.md) and [FilePicker](src/widgets/file-picker/file-picker-usage.md) widgets
  - Increased `z-index` of [DialogProvider](src/widgets/dialog-provider/usage.md) dialog container div to 999999

- `1.4.0`

  - Added `onClick` prop to [ListView](src/widgets/table-view/table-view-usage.md) widget
  - Added `theme` prop to [ConfirmButtonDialog](src/widgets/confirm-button/confirm-button-usage.md) widget
  - Adjusted label font size of [FieldDecoration](src/widgets/field-decoration/field-decoration-usage.md) to 87.5%
  - Adjusted [FieldDecoration](src/widgets/field-decoration/field-decoration-usage.md) labels to be single lines

- `1.3.7`

  - Added focus indicator to [SelectField](src/widgets/select-field/select-field-usage.md) options
  - Modified [useQueryParams](src/utils/use-query-params/use-query-params-usage.md) to update `qp` state object if the whole location object changes instead of just `location.search`

- `1.3.6`

  - Added 100% width and height and auto overflow styling to [PageTransitionView](src/transition-provider/transition-view.tsx) widget

- `1.3.5`

  - Added the `clear` function to the [ValueStoreProvider](src/widgets/local-storage-provider/local-storage-provider-usage.md) which deletes all values in the store and removes them from the local storage if they are persisted

- `1.3.4`

  - Modified [ListView](src/widgets/table-view/table-view-usage.md) to limit styling to immediate children and not affect content within the cells

- `1.3.3`

  - Replaced `query-string` with a simpler algorithm for query string to query parameter resolution in [useQueryParams](src/utils/use-query-params/use-query-params-usage.md)

- `1.3.2`

  - [useQueryParams](src/utils/use-query-params/use-query-params-usage.md) now returns and empty object if no query parameter are present in the URL
  - Modified [DatePicker](src-old/form/date-picker/usage.md) with `DatePickerMode.MULTI` to clear text selection when shift key is pressed while a date is selected
  - Modified [DatePicker](src-old/form/date-picker/usage.md) with `DatePickerMode.MULTI` to return null date when no date is selected instead of an empty array which makes is function the same as `DatePickerMode.SINGLE` and `DatePickerMode.MONTH` when no dates are selected

- `1.3.1`

  - Modified [ValueStoreProvider](src/widgets/local-storage-provider/local-storage-provider-usage.md) to store null values as-is instead of an empty string

- `1.3.0`

  - Added `del` feature to [ValueStoreProvider](src/widgets/local-storage-provider/local-storage-provider-usage.md) to remove values from the provider

- `1.2.4`

  - Modified [PageTransitionProvider](src/transition-provider/usage.md) to ignore redirect if target URL is same as current URL
  - Modified [PageTransitionProvider](src/transition-provider/usage.md) to ignore redirect if target URL is empty
  - Forwarded the `name` prop of [TextField](src/widgets/text-field/text-field-usage.md) and [DropdownField](src/widgets/dropdown-field/dropdown-field-usage.md) to `input` and `select` components respectively to trigger browser added feature (such as auto-completion)

- `1.2.3`

  - Removed `placeholder` prop from [DatePicker](src-old/form/date-picker/usage.md) because `label` already covers its function

- `1.2.2`
  - Added a "No items to display" message to [ListView](src/widgets/table-view/table-view-usage.md) if list is empty
  - Added `options.busy` prop to [ListView](src/widgets/table-view/table-view-usage.md) to determine if a busy indicator should be displayed beside and item
- `1.2.1`

  - Fixed bug in [ValueStoreProvider](src/widgets/local-storage-provider/local-storage-provider-usage.md) making simultaneous value updates persist
  - Added `placeholder` prop to [DatePicker](src-old/form/date-picker/usage.md)

- `1.2.0`

  - Grouped props of [ListView](src/widgets/table-view/table-view-usage.md). This puts related props in similar objects which are enabled when specified or disabled when not
  - Made `message` parameter of flash functions in [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) optional

- `1.1.0`

  - Added [useQueryParams hook](src/utils/use-query-params/use-query-params-usage.md)
  - Added the [Loader](src/widgets/loader/loader-usage.md) widget
  - Added the `bind` prop to [DialogProvider](src/widgets/dialog-provider/usage.md) to allow binding of properties from the host component to the dialog component
