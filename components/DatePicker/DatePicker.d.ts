import * as React from "react";
interface DatePickerProps extends Omit<React.ComponentPropsWithoutRef<"input">, "onChange"> {
    date?: Date;
    onChange: (date?: Date) => void;
}
export declare const DatePicker: ({ date: dateProps, onChange, ...inputProps }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DatePicker.d.ts.map