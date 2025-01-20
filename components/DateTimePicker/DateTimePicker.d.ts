import { PopoverContent } from '../Popover';
import * as React from "react";
interface DateTimePickerProps extends Omit<React.ComponentPropsWithoutRef<"input">, "onChange"> {
    date: Date | undefined;
    onChange: (date?: Date) => void;
    fromDate?: Date;
    toDate?: Date;
    error?: boolean;
    timeError?: boolean;
    timeMessage?: React.ReactNode;
    popoverProps?: React.ComponentProps<typeof PopoverContent>;
    withoutSaveButton?: boolean;
}
export declare const DateTimePicker: ({ date: dateProps, fromDate, toDate, onChange, error, timeError, timeMessage, withoutSaveButton, popoverProps, ...inputProps }: DateTimePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DateTimePicker.d.ts.map