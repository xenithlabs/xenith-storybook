import { DateRange } from 'react-day-picker';
import { FormatOptions } from 'date-fns';

interface DateRangeTemplateProps {
    label: string;
    startDate: Date;
    endDate: Date;
    startDateFormat?: string;
    endDateFormat?: string;
    formatOptions?: FormatOptions;
    selected?: boolean;
    onClick?: (dateRange: DateRange) => void;
}
export declare const DateRangeTemplate: ({ label, startDate, endDate, startDateFormat, endDateFormat, formatOptions, selected, onClick, }: DateRangeTemplateProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DateRangeTemplate.d.ts.map