import { Context, FunctionComponent } from "react";
import {
    IBreadcrumbs,
    IBusyButton,
    IConfirmDialog,
    ICustomField,
    IDateField,
    IDatePicker,
    IDialogProvider,
    IDialogProviderContext,
    IDropdownField,
    IFieldDecoration,
    IFileField,
    IFilePicker,
    IFlashProvider,
    IFlashProviderContext,
    IListView,
    ILoader,
    IObjectView,
    IPageActions,
    IPageTransitionLink,
    IPageTransitionProvider,
    IPageTransitionProviderContext,
    IPageTransitionView,
    ISelectField,
    ITextField,
    ITimeField,
    ITimePicker,
    IUseCountdown,
    IUseLoadMore,
    IValueStoreProvider,
    IValueStoreProviderContext
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
export const TimePicker: FunctionComponent<ITimePicker>;
export const ListView: FunctionComponent<IListView>;
export const ObjectView: FunctionComponent<IObjectView>;
export const TextField: FunctionComponent<ITextField>;
export const DropdownField: FunctionComponent<IDropdownField>;
export const SelectField: FunctionComponent<ISelectField>;
export const DateField: FunctionComponent<IDateField>;
export const FileField: FunctionComponent<IFileField>;
export const TimeField: FunctionComponent<ITimeField>;
export const CustomField: FunctionComponent<ICustomField>;
export const FieldDecoration: FunctionComponent<IFieldDecoration>;
export const Breadcrumbs: FunctionComponent<IBreadcrumbs>;
export const BusyButton: FunctionComponent<IBusyButton>;
export const ConfirmDialog: FunctionComponent<IConfirmDialog>;
export const Loader: FunctionComponent<ILoader>;
export const PageActions: FunctionComponent<IPageActions>;
export const useQueryParams: () => any;
export const useLoadMore: () => IUseLoadMore;
export const useCountdown: (delay: number) => IUseCountdown;
export const debounce: (label: string, callback: Function, delay: number) => void;
