import { InputProps } from '../Input';

export interface MultiSearchInputProps {
    className?: string;
    value?: string[];
    onChange?: (value: string[]) => void;
    columnOptions?: string[] | {
        value: string;
        label: string;
    }[];
    column?: string;
    defaultColumn?: string;
    onColumnChange?: (column: string) => void;
    leftComponent?: React.ReactNode;
    inputProps?: InputProps;
}
export declare const MultiSearchInput: import('../../../node_modules/react').ForwardRefExoticComponent<MultiSearchInputProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MultiSearchInput.d.ts.map