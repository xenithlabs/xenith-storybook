import { DateRange, PropsRange, PropsRangeRequired } from 'react-day-picker';
import { RANGE_TEMPLATES } from './templates';
import { DateTimePicker } from '../DateTimePicker';

export type DateRangeType = DateRange;
type DateRangePickerProps = Omit<PropsRange | PropsRangeRequired, "selected" | "onSelect" | "mode"> & {
    timezone?: string;
    value?: DateRange | undefined;
    showTemplateInValue?: boolean;
    dividerIndex?: number;
    placeholder?: string;
    onChange?: (value: DateRange | undefined) => void;
    required?: boolean;
    fromDate?: Date;
    rangeTemplates?: typeof RANGE_TEMPLATES | Record<string, (timezone?: string) => DateRange>;
    toDate?: Date;
    timePickerProps?: Partial<React.ComponentPropsWithoutRef<typeof DateTimePicker>>;
    fromTimePickerProps?: Partial<React.ComponentPropsWithoutRef<typeof DateTimePicker>>;
    toTimePickerProps?: Partial<React.ComponentPropsWithoutRef<typeof DateTimePicker>>;
    error?: boolean;
    dateFormat?: string | [string, string];
    customLabel?: string;
};
export declare const DateRangePicker: ({ value, onChange, required, fromDate, toDate, rangeTemplates: rangeTemplatesProps, placeholder, timePickerProps, fromTimePickerProps, toTimePickerProps, error, dateFormat, dividerIndex: dividerIndexProps, showTemplateInValue, customLabel, timezone, }: DateRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DateRangePicker.d.ts.map