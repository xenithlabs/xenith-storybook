import { ReactNode } from '../../../node_modules/react';

export type TimePickerValue = `${number}:${number}:${number}`;
export type TimePickerShortValue = `${number}:${number}`;
export interface TimePickerProps {
    value?: string | TimePickerValue | TimePickerShortValue;
    onChange?: (value: TimePickerValue) => void;
    title?: ReactNode;
    withoutSaveButton?: boolean;
    placeholder?: string;
    rawPlaceholder?: boolean;
    className?: string;
    maxHours?: number | null;
    hideSeconds?: boolean;
    error?: boolean;
    min?: string | TimePickerValue | TimePickerShortValue;
    max?: string | TimePickerValue | TimePickerShortValue;
}
export declare const TimePicker: ({ value: propValue, onChange, title, withoutSaveButton, placeholder, rawPlaceholder, className, maxHours, hideSeconds, error, min, max, }: TimePickerProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TimePicker.d.ts.map