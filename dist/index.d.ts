import { FunctionComponent, Context } from "react";
import {
    IDialogProvider,
    IDialogProviderContext,
    IFlashProvider,
    IFlashProviderContext,
    IValueStoreProviderContext,
    IValueStoreProvider,
    IPageTransitionProviderContext,
    IPageTransitionProvider,
    IPageTransitionView,
    IPageTransitionLink,
    IDatePicker,
    IFilePicker,
    IListView,
    IObjectView,
    ITextField,
    IDropdownField,
    ISelectField,
    ICustomField,
    IFileField,
    IDateField,
    IFieldDecoration,
    IBreadcrumbs,
    IBusyButton,
    IConfirmDialog, ILoader
} from "../types";

export const DialogProviderContext: Context<IDialogProviderContext>;
export const DialogProvider: FunctionComponent<IDialogProvider>;
export const FlashProviderContext: Context<IFlashProviderContext>;
export const FlashProvider: FunctionComponent<IFlashProvider>;
export const ValueStoreProviderContext: Context<IValueStoreProviderContext>;
export const ValueStoreProvider: FunctionComponent<IValueStoreProvider>;
export const PageTransitionProviderContext: Context<IPageTransitionProviderContext>;
export const PageTransitionProvider: FunctionComponent<IPageTransitionProvider>;
export const PageTransitionView: FunctionComponent<IPageTransitionView>;
export const Link: FunctionComponent<IPageTransitionLink>;
export const DatePicker: FunctionComponent<IDatePicker>;
export const FilePicker: FunctionComponent<IFilePicker>;
export const ListView: FunctionComponent<IListView>;
export const ObjectView: FunctionComponent<IObjectView>;
export const TextField: FunctionComponent<ITextField>;
export const DropdownField: FunctionComponent<IDropdownField>;
export const SelectField: FunctionComponent<ISelectField>;
export const DateField: FunctionComponent<IDateField>;
export const FileField: FunctionComponent<IFileField>;
export const CustomField: FunctionComponent<ICustomField>;
export const FieldDecoration: FunctionComponent<IFieldDecoration>;
export const Breadcrumbs: FunctionComponent<IBreadcrumbs>;
export const BusyButton: FunctionComponent<IBusyButton>;
export const ConfirmDialog: FunctionComponent<IConfirmDialog>;
export const Loader: FunctionComponent<ILoader>;
export const useQueryParams: () => any;