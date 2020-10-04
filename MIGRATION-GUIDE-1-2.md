# V2 Migration Guide

This guide covers all the breaking changes that you need to know in this version as well as how to
migrate your applications to `react-simple-widgets` v2.0.0

## DialogProvider

-   `onDialogDismissed` function option has been replaced with `onDismissed`

-   `bind` option has been removed from this provider. The option was ever really there to allow
    components to pass flash functions to dialogs they created. To do this now, you'd just have to
    wrap your dialog component in a flash provider.

    Instead of

    ```tsx
    showDialog(helper => <DialogComponent />, { bind: { flashError, flashSuccess } });
    ```

    you can do

    ```tsx
    showDialog(helper => (
        <FlashProvider>
            <DialogComponent />
        </FlashProvider>
    ));
    ```

    Then you can use the `FlashProviderContext` directly in your dialog component

-   Interfaces `IDialogHelper` and `IDialogOptions` have been renamed to `DialogHelper` and
    `DialogOptions` respectively

## ValueStoreProvider

-   The `initialStorageKeys` prop of `ValueStoreProvider` has been renamed to **`initialKeys`**

-   The `put` function provided by the `ValueStoreProviderContext` has been renamed to **`set`**

## TransitionProvider (formerly PageTransitionProvider)

-   `PageTransitionProvider` has been renamed to `TransitionProvider`

-   `PageTransitionProviderContext` has been renamed to `TransitionProviderContext`

-   `PageTransitionView` has been renamed to `TransitionView`

## FieldDecoration

-   `FieldDecoration.NONE` and `FieldDecoration.FLAT` have been removed from the API. The widget
    defaults to the decoration of `FieldDecoration.FLAT` if no `decoration` is provided

-   The `hasValue` prop of `FieldDecoration` widget has been renamed to `stickyFloatingLabel`

## SelectField

-   `SelectFieldMode.BINARY` has been removed from the API. The widget will default to
    `SelectFieldMode.BINARY` if no `mode` is provided. This makes it behave as a checkbox

## ListView

-   `onClick` and `skipIf` props have been removed from the API

-   `keyFn` has been added as a required prop for this widget

-   The interface of the `sort` prop has changed from

    ```tsx
    interface IListViewSort {
        column: string;
        order: ListViewSortOrder;
        onSort: (column: string, order: ListViewSortOrder) => void;
    }
    ```

    to

    ```tsx
    export interface ListViewSort {
        columnIndex: number;
        columns: Array<string>;
        order: ListViewSortOrder;
        onSort: (columnIndex: number, order: ListViewSortOrder) => void;
    }
    ```

    See the [ListViewDocs](./src/collection/list-view/usage.md) for the description of the new
    attributes

-   The interface of items returned by the `options.builder` prop has changed from

    ```tsx
    interface IListViewOptionItem {
        label: any;
        confirmation?: any;
        confirmationTheme?: ConfirmDialogTheme;
        onClick: (item: any, itemIndex?: number) => void;
    }
    ```

    to

    ```tsx
    interface ListViewOption {
        label: any;
        confirmation?: [Confirmation, any];
        onClick: (item: any, itemIndex?: number) => void;
    }
    ```

    See the [ListViewDocs](./src/collection/list-view/usage.md) for the description of the new
    attributes

## ConfirmDialog

-   `ConfirmDialogTheme` has been renamed to `Confirmation`

## useLoadMore

-   The `canLoadMore` context option has been renamed to `endOfItems`. `endOfItems` works in an
    opposite way to `canLoadMore`

-   The `shouldLoadMore` context option has been renamed to `loadTriggered`

## useCountdown

-   The `countdown` context option has been renamed to `count`
