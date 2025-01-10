import { DateRange } from 'react-day-picker';

interface DateRangeTemplateProps {
    label: string;
    startDate: Date;
    endDate: Date;
    startDateFormat?: string;
    endDateFormat?: string;
    selected?: boolean;
    onClick?: (dateRange: DateRange) => void;
}
export declare const DateRangeTemplate: ({ label, startDate, endDate, startDateFormat, endDateFormat, selected, onClick, }: DateRangeTemplateProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DateRangeTemplate.d.ts.map