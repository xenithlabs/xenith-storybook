import * as React from "react";
interface AmountRangeInputProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
    range?: [number | null, number | null];
    onChange?: (range: [number | null, number | null]) => void;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    leftInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    rightInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
export declare const AmountRangeInput: ({ range: rangeProps, onChange, inputProps, leftInputProps, rightInputProps, className, ...containerProps }: AmountRangeInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AmountRangeInput.d.ts.map