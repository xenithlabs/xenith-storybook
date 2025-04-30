import { DateRange, PropsRange, PropsRangeRequired } from 'react-day-picker';
import { RANGE_TEMPLATES } from './templates';

export type DateRangeType = DateRange;
type DateRangePickerProps = Omit<PropsRange | PropsRangeRequired, "selected" | "onSelect" | "mode"> & {
    value?: DateRange | undefined;
    showTemplateInValue?: boolean;
    placeholder?: string;
    onChange?: (value: DateRange | undefined) => void;
    required?: boolean;
    fromDate?: Date;
    rangeTemplates?: typeof RANGE_TEMPLATES;
    toDate?: Date;
    error?: boolean;
    dateFormat?: string | [string, string];
};
export declare const DateRangePicker: ({ value, onChange, required, fromDate, toDate, rangeTemplates: rangeTemplatesProps, placeholder, error, dateFormat, showTemplateInValue, }: DateRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DateRangePicker.d.ts.map