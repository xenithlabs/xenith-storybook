import { DateArg } from 'date-fns';
import { PopoverContent } from '../Popover';
import * as React from "react";
interface DateTimePickerProps extends Omit<React.ComponentPropsWithoutRef<"input">, "onChange"> {
    date: Date | undefined;
    onChange: (date?: Date) => void;
    dateTransformer?: (date?: Date) => Date | undefined;
    formatFn?: (date: DateArg<Date> | string, format: string) => string;
    fromDate?: Date;
    toDate?: Date;
    error?: boolean;
    timeError?: boolean;
    timeMessage?: React.ReactNode;
    popoverProps?: React.ComponentProps<typeof PopoverContent>;
    withoutSaveButton?: boolean;
}
export declare const DateTimePicker: ({ date: dateProps, fromDate, toDate, onChange, error, timeError, dateTransformer, timeMessage, withoutSaveButton, popoverProps, formatFn, ...inputProps }: DateTimePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DateTimePicker.d.ts.map