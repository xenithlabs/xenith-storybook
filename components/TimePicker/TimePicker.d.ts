import { ReactNode } from '../../../node_modules/react';

export type TimePickerValue = `${number}:${number}:${number}`;
export interface TimePickerProps {
    value?: TimePickerValue;
    onChange?: (value: TimePickerValue) => void;
    title?: ReactNode;
    withoutSaveButton?: boolean;
    placeholder?: string;
    rawPlaceholder?: boolean;
    className?: string;
}
export declare const TimePicker: ({ value: propValue, onChange, title, withoutSaveButton, placeholder, rawPlaceholder, className, }: TimePickerProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TimePicker.d.ts.map