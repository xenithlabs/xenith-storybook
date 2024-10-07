import * as React from "react";
interface DatePickerProps extends Omit<React.ComponentPropsWithoutRef<"input">, "onChange"> {
    date?: Date;
    onChange?: (date?: Date) => void;
    fromDate?: Date;
    toDate?: Date;
}
export declare const DatePicker: ({ date: dateProps, fromDate, toDate, onChange, ...inputProps }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DatePicker.d.ts.map