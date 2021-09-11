import { AllHTMLAttributes, Context, FunctionComponent } from "react";

import {
    /* Widgets */
    DialogProviderContext,
    DialogProvider,
    FlashProviderContext,
    FlashProvider,
    LocalStorageProviderContext,
    LocalStorageProvider,
    PopupMenu,
    TableView,
    Pagination,
    Loader,
    BusyButton,
    ConfirmButton,
    Breadcrumbs,
    ActionBar,
    ObjectView,
    CustomField,
    FieldDecoration,
    TextField,
    TextAreaField,
    TextEditorField,
    PasswordField,
    DropdownField,
    CheckboxField,
    SelectField,
    MultiSelectField,
    GrowableItemsContainer,
    Calendar,
    DatePicker,
    MultiDatePicker,
    MonthDatePicker,
    DateField,
    MultiDateField,
    MonthDateField,
    TimePicker,
    TimeField,
    FilePicker,
    FileField,
    /* Hooks */
    UseQueryParams,
    UseCountdown,
    UseWindowBreakpoints,
    UseGrowableList,
    /* Utilities */
    Debounce
} from "../types";

/* Widgets */
export const DialogProviderContext: Context<DialogProviderContext>;
export const DialogProvider: FunctionComponent<DialogProvider>;
export const FlashProviderContext: Context<FlashProviderContext>;
export const FlashProvider: FunctionComponent<FlashProvider>;
export const LocalStorageProviderContext: Context<LocalStorageProviderContext>;
export const LocalStorageProvider: FunctionComponent<LocalStorageProvider>;
export const PopupMenu: FunctionComponent<PopupMenu>;
export const TableView: FunctionComponent<TableView>;
export const Pagination: FunctionComponent<Pagination>;
export const Loader: FunctionComponent<Loader>;
export const BusyButton: FunctionComponent<BusyButton>;
export const ConfirmButton: FunctionComponent<ConfirmButton>;
export const Breadcrumbs: FunctionComponent<Breadcrumbs>;
export const ActionBar: FunctionComponent<ActionBar>;
export const ObjectView: FunctionComponent<ObjectView>;
export const CustomField: FunctionComponent<CustomField>;
export const FieldDecoration: FunctionComponent<FieldDecoration>;
export const TextField: FunctionComponent<TextField>;
export const TextAreaField: FunctionComponent<TextAreaField>;
export const TextEditorField: FunctionComponent<TextEditorField>;
export const PasswordField: FunctionComponent<PasswordField>;
export const DropdownField: FunctionComponent<DropdownField>;
export const CheckboxField: FunctionComponent<CheckboxField>;
export const SelectField: FunctionComponent<SelectField>;
export const MultiSelectField: FunctionComponent<MultiSelectField>;
export const GrowableItemsContainer: FunctionComponent<GrowableItemsContainer>;
export const Calendar: FunctionComponent<Calendar>;
export const DatePicker: FunctionComponent<DatePicker>;
export const MultiDatePicker: FunctionComponent<MultiDatePicker>;
export const MonthDatePicker: FunctionComponent<MonthDatePicker>;
export const DateField: FunctionComponent<DateField>;
export const MultiDateField: FunctionComponent<MultiDateField>;
export const MonthDateField: FunctionComponent<MonthDateField>;
export const TimePicker: FunctionComponent<TimePicker>;
export const TimeField: FunctionComponent<TimeField>;
export const FilePicker: FunctionComponent<FilePicker>;
export const FileField: FunctionComponent<FileField>;
/* Hooks */
export const useQueryParams: UseQueryParams;
export const useCountdown: UseCountdown;
export const useWindowBreakpoints: UseWindowBreakpoints;
export const useGrowableList: UseGrowableList;
/* Utilities */
export const debounce: Debounce;
