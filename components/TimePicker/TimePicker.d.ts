import { ReactNode } from '../../../node_modules/react';

export type TimePickerValue = `${number}:${number}:${number}`;
export interface TimePickerProps {
    value?: string | TimePickerValue;
    onChange?: (value: TimePickerValue) => void;
    title?: ReactNode;
    withoutSaveButton?: boolean;
    placeholder?: string;
    rawPlaceholder?: boolean;
    className?: string;
    maxHours?: number;
}
export declare const TimePicker: ({ value: propValue, onChange, title, withoutSaveButton, placeholder, rawPlaceholder, className, maxHours, }: TimePickerProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TimePicker.d.ts.map