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
    maxHours?: number | null;
    zeroLimitOnMaxHours?: boolean;
    hideSeconds?: boolean;
}
/**
 * @param zeroLimitOnMaxHours if true, when maxHours is reached, the limit for minutes and seconds will be 0
 * @returns
 */
export declare const TimePicker: ({ value: propValue, onChange, title, withoutSaveButton, placeholder, rawPlaceholder, className, maxHours, zeroLimitOnMaxHours, hideSeconds, }: TimePickerProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TimePicker.d.ts.map