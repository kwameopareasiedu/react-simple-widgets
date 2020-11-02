import { AllHTMLAttributes, Context, FunctionComponent } from "react";

import {
    DialogProviderContext,
    DialogProvider,
    FlashProviderContext,
    FlashProvider,
    ValueStoreProviderContext,
    ValueStoreProvider,
    TransitionProviderContext,
    TransitionProvider,
    TransitionView,
    TransitionLink,
    FieldDecoration,
    CustomField,
    TextField,
    DropdownField,
    SelectField,
    DateField,
    FileField,
    TimeField,
    DatePicker,
    FilePicker,
    TimePicker,
    ListView,
    ObjectView,
    BusyButton,
    ConfirmDialog,
    UseLoadMore,
    UseCountdown
} from "../types";

export const DialogProviderContext: Context<DialogProviderContext>;
export const DialogProvider: FunctionComponent<DialogProvider>;
export const FlashProviderContext: Context<FlashProviderContext>;
export const FlashProvider: FunctionComponent<FlashProvider>;
export const ValueStoreProviderContext: Context<ValueStoreProviderContext>;
export const ValueStoreProvider: FunctionComponent<ValueStoreProvider>;
export const TransitionProviderContext: Context<TransitionProviderContext>;
export const TransitionProvider: FunctionComponent<TransitionProvider>;
export const TransitionView: FunctionComponent<TransitionView>;
export const Link: FunctionComponent<TransitionLink>;
export const FieldDecoration: FunctionComponent<FieldDecoration>;
export const CustomField: FunctionComponent<CustomField>;
export const TextField: FunctionComponent<TextField>;
export const PasswordField: FunctionComponent<TextField>;
export const DropdownField: FunctionComponent<DropdownField>;
export const SelectField: FunctionComponent<SelectField>;
export const DateField: FunctionComponent<DateField>;
export const FileField: FunctionComponent<FileField>;
export const TimeField: FunctionComponent<TimeField>;
export const DatePicker: FunctionComponent<DatePicker>;
export const FilePicker: FunctionComponent<FilePicker>;
export const TimePicker: FunctionComponent<TimePicker>;
export const ListView: FunctionComponent<ListView>;
export const ObjectView: FunctionComponent<ObjectView>;
export const Breadcrumbs: FunctionComponent<AllHTMLAttributes<HTMLDivElement>>;
export const BusyButton: FunctionComponent<BusyButton>;
export const ConfirmDialog: FunctionComponent<ConfirmDialog>;
export const Loader: FunctionComponent<AllHTMLAttributes<HTMLSpanElement>>;
export const PageActions: FunctionComponent<AllHTMLAttributes<HTMLDivElement>>;
export const useQueryParams: () => any;
export const useLoadMore: () => UseLoadMore;
export const useCountdown: (delay: number) => UseCountdown;
export const debounce: (label: string, callback: Function, delay: number) => void;
