import { AllHTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { FieldHelperProps, FieldInputProps, FieldMetaProps } from "formik";

/** DialogProvider */
export interface Dialog {
  id: string;
  widget?: JSX.Element;
  options?: DialogOptions;
  onDismiss?: () => void;
}

export interface DialogOptions {
  size?: DialogSize;
  escapeDismissible?: boolean;
  backgroundDismissible?: boolean;
  onDismissed?: (returnValue?: any) => void;
}

export enum DialogSize {
  SMALL,
  MEDIUM,
  WIDE,
  FULL
}

export interface DialogHelper {
  dismiss: (returnValue?: any) => void;
}

export type DialogBuilder = (helper: DialogHelper) => JSX.Element;

export interface DialogViewProps {
  dialog: Dialog;
}

export interface DialogProviderContext {
  showDialog: (builder: DialogBuilder, options?: DialogOptions) => void;
}

export interface DialogProviderProps {
  children: any;
}

/** FlashProvider */
export interface Flash {
  type: FlashType;
  title: string;
  message: any;
  btnText?: string;
  closeTimerMs?: number;
  onDismissed?: () => void;
}

export enum FlashType {
  ERROR,
  WARNING,
  INFO,
  SUCCESS
}

export interface FlashOptionalArgs {
  btnText?: string;
  closeTimerMs?: number;
}

export type FlashFunction = (
  title: string,
  message?: any,
  onFlashDismissed?: () => void,
  optionalArgs?: FlashOptionalArgs
) => void;

export type FlashViewBuilder = (flash: Flash) => JSX.Element;

export interface FlashViewProps {
  type: FlashType;
  title: string;
  message: string;
  buttonText: string;
  closeTimerMs?: number;
  onDismiss: () => void;
}

export interface FlashProviderContext {
  flashError: FlashFunction;
  flashWarning: FlashFunction;
  flashInfo: FlashFunction;
  flashSuccess: FlashFunction;
}

export interface FlashProviderProps {
  children: any;
  builder?: FlashViewBuilder;
}

/** LocalStorageProvider */
export interface LocalStorageProviderContext {
  getItem: (key: string) => string;
  setItem: (key: string, value: string) => void;
  removeItems: (...keys: Array<string>) => void;
  clear: () => void;
}

export interface LocalStorageProviderProps {
  children: any;
}

/** PopupMenu */
export type PopupMenuFunctionChild = (closePopup: () => void) => any;

export type PopupMenuChild = string | JSX.Element | PopupMenuFunctionChild;

export interface PopupMenuProps {
  children: PopupMenuChild | Array<PopupMenuChild>;
}

/** TableView */
export enum SortDirection {
  NONE = 0,
  ASC = 1,
  DESC = -1
}

export interface TableViewSortData {
  prop: string;
  direction: SortDirection;
}

export type TableViewCellResolverFunction = (item: any, itemIndex?: number) => any;

export type TableViewCellResolver = string | TableViewCellResolverFunction;

export type TableViewHeaderRowBuilder = (columnValues: Array<string>, sort?: TableViewSortData) => JSX.Element;

export type TableViewBodyRowBuilder = (
  item: any,
  cellResolvers: Array<TableViewCellResolver>,
  itemIndex?: number
) => JSX.Element;

export type TableViewFooterRowBuilder = () => JSX.Element;

export type TableViewCaptionBuilder = () => JSX.Element;

export type TableViewOptionsBuilder = (item: any, itemIndex?: number) => JSX.Element;

export type TableViewSortChangeCallback = (prop: string, direction: SortDirection) => void;

export interface TableViewProps extends AllHTMLAttributes<HTMLTableElement> {
  items: Array<any>;
  props: Array<[string, TableViewCellResolver, string?]>;
  headerRowBuilder?: TableViewHeaderRowBuilder;
  bodyRowBuilder?: TableViewBodyRowBuilder;
  footerRowBuilder?: TableViewFooterRowBuilder;
  captionBuilder?: TableViewCaptionBuilder;
  optionsBuilder?: TableViewOptionsBuilder;
  onSort?: TableViewSortChangeCallback;
}

/** Pagination */
export interface PaginationProps extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  page: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
}

/** BusyButton */
export interface BusyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  busy?: boolean;
  invert?: boolean;
}

/** Loader */
export interface LoaderProps extends AllHTMLAttributes<HTMLDivElement> {
  children?: any;
  invert?: boolean;
}

/** ConfirmButton */
export interface ConfirmButtonDialogProps {
  helper: DialogHelper;
  message: any;
  confirmButtonClassName?: string;
  cancelButtonClassName?: string;
}

export type ConfirmButtonDialogBuilder = (helper: DialogHelper, message: any) => JSX.Element;

export interface ConfirmButtonProps extends BusyButtonProps {
  message?: any;
  busy?: boolean;
  confirmButtonClassName?: string;
  cancelButtonClassName?: string;
  builder?: ConfirmButtonDialogBuilder;
  onCancel?: () => void;
  onConfirm: () => void;
}

/** Breadcrumbs */
export interface BreadcrumbsProps extends AllHTMLAttributes<HTMLDivElement> {
  children?: any;
}

/** ActionBar */
export interface ActionBarProps extends AllHTMLAttributes<HTMLDivElement> {
  children?: any;
}

/** ObjectView */
export type ObjectViewCellResolverFunction = (item: any) => any;

export type ObjectViewCellResolver = string | ObjectViewCellResolverFunction;

export interface ObjectViewProps extends AllHTMLAttributes<HTMLTableElement> {
  object: any;
  props: Array<[string, ObjectViewCellResolver]>;
  split?: number;
}

/** CustomField */
export type CustomFieldBuilder = (options: FieldMetaProps<any> & FieldInputProps<any> & FieldHelperProps<any>) => any;

export type CustomFieldErrorBuilder = (originalError: any) => string;

export interface CustomFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "children"> {
  errorBuilder?: CustomFieldErrorBuilder;
  children: CustomFieldBuilder;
}

/** FieldDecoration */
export interface FieldDecorationBuilderProps {
  onFieldFocus: () => void;
  onFieldBlur: () => void;
}

export type FieldDecorationBuilder = (hooks: FieldDecorationBuilderProps) => JSX.Element;

export interface FieldDecorationProps extends Omit<AllHTMLAttributes<HTMLDivElement>, "children"> {
  label?: any;
  error?: any;
  helper?: any;
  disabled?: boolean;
  leading?: JSX.Element;
  trailing?: JSX.Element;
  children: FieldDecorationBuilder;
}

/** TextField */
export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">,
    Pick<FieldDecorationProps, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (value: string) => void;
}

/** TextEditorField */
export interface TextEditorFieldProps extends Pick<FieldDecorationProps, "label" | "helper"> {
  name: string;
  disabled?: boolean;
  onChange?: (data: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

/** TextAreaField */
export interface TextAreaFieldProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "onChange">,
    Pick<FieldDecorationProps, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (value: string) => void;
}

/** PasswordField */
export type PasswordFieldProps = Omit<TextFieldProps, "trailing" | "type">;

/** DropdownField */
export interface DropdownFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange">,
    Pick<FieldDecorationProps, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (value: string) => void;
}

/** CheckboxField */
export interface CheckboxFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange">,
    Pick<FieldDecorationProps, "label"> {
  onChange?: (checked: boolean) => void;
}

/** SelectField */
export interface SelectOptionProps extends AllHTMLAttributes<HTMLInputElement> {
  label: string;
  multi?: boolean;
  selected?: boolean;
  onFocus?: () => void;
  onSelect: () => void;
}

export interface SelectFieldProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, "label" | "onChange">,
    Pick<FieldDecorationProps, "label"> {
  name: string;
  label?: string;
  inline?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  options: Array<[any, any]>;
  onChange?: (value: any) => void;
}

/** MultiSelectField */
export interface MultiSelectFieldProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, "label" | "onChange">,
    Pick<FieldDecorationProps, "label"> {
  name: string;
  label?: string;
  inline?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  options: Array<[any, any]>;
  onChange?: (value: Array<any>) => void;
}

/** InfiniteList */
export interface InfiniteListProps extends AllHTMLAttributes<HTMLDivElement> {
  busy: boolean;
  total: number;
  count: number;
  error?: boolean;
  onLoadMore: () => void;
}

/** Calendar */
export interface CalendarProps extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  initialDate: string;
  isDateOutlined?: (year: number, month: number, day: number) => boolean;
  isDateActive?: (year: number, month: number, day: number) => boolean;
  validator?: (date: string) => string;
  onChange: (date: string) => void;
}

/** DatePicker */
export interface DatePickerProps extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  displayFormat?: string;
  validator?: (date: string) => string;
  onChange: (date: string) => void;
}

/** DateField */
export interface DateFieldProps
  extends Omit<DatePickerProps, "label" | "value" | "onChange">,
    Pick<FieldDecorationProps, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (date: string) => void;
}

/** MultiDatePicker */
export interface MultiDatePickerProps extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  value: Array<string>;
  displayFormat?: string;
  validator?: (date: string) => string;
  onChange: (dates: Array<string>) => void;
}

/** MultiDateField */
export interface MultiDateFieldProps
  extends Omit<MultiDatePickerProps, "label" | "value" | "onChange">,
    Pick<FieldDecorationProps, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (dates: Array<string>) => void;
}

/** MonthDatePicker */
export interface MonthDatePickerProps extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  validator?: (date: string) => string;
  onChange: (date: string) => void;
}

/** MonthDateField */
export interface MonthDateFieldProps
  extends Omit<MonthDatePickerProps, "label" | "value" | "onChange">,
    Pick<FieldDecorationProps, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (date: string) => void;
}

/** TimePicker */
export interface TimePickerProps extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (time: string) => void;
}

/** TimeField */
export interface TimeFieldProps
  extends Omit<TimePickerProps, "label" | "value" | "onChange">,
    Pick<FieldDecorationProps, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (time: string) => void;
}

/** FilePicker */
export type FilePickerValidator = (file: File) => boolean;

export interface FilePickerProps extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  limit?: number;
  extensions?: Array<string>;
  validator?: FilePickerValidator;
  onChange?: (file: File) => void;
}

export interface FilePickerDialogProps extends FilePickerProps {
  helper: DialogHelper;
}

/** FileField */
export interface FileFieldProps
  extends Omit<FilePickerProps, "label" | "onChange">,
    Pick<FieldDecorationProps, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (file: File) => void;
}

/** UseQueryParams */
export type UseQueryParamsState = {
  set: (key: string, value: string) => void;
  unset: (key: string) => void;
  [k: string]: any;
};

export type UseQueryParams = () => UseQueryParamsState;

/** UseCountdown */
export type UseCountdownState = [number, boolean, () => void, () => void];

export type UseCountdown = (countdown: number) => UseCountdownState;

/** UseWindowBreakpoints */
export interface UseWindowBreakpointsState {
  width: number;
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
}

export type UseWindowBreakpoints = () => UseWindowBreakpointsState;

/** Debounce */
export type Debounce = (label: string, callback: Function, delay: number) => void;

/** UseInfiniteList */
export type InfiniteListLoadMoreTrigger = (resetPage?: boolean) => void;

export type InfiniteListOnLoadMore = (newItems: Array<any>, totalCount: number) => void;

export type InfiniteListOnLoadFailed = () => void;

export type UseInfiniteListState = [
  itemList: Array<any>,
  currentPageNumber: number,
  totalItemsInSource: number,
  triggeredLoadMore: boolean,
  loadMore: InfiniteListLoadMoreTrigger,
  onLoadMoreSuccess: InfiniteListOnLoadMore,
  onLoadMoreFailed: InfiniteListOnLoadFailed
];

export type UseInfiniteList = () => UseInfiniteListState;
