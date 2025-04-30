import { ReactNode } from '../../../node_modules/react';

export interface SelectPopoverOptionType<T = unknown> {
    label: string;
    value: T;
}
interface SelectPopoverProps {
    value?: SelectPopoverOptionType;
    onChange?: (value: SelectPopoverOptionType<any>) => void;
    placeholder?: string;
    children: ReactNode;
}
interface SelectPopoverOptionProps {
    label: string;
    value: SelectPopoverOptionType;
}
interface SelectPopoverContextProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    selectedValue: SelectPopoverOptionType | undefined;
    onSelect: (value: SelectPopoverOptionType) => void;
    placeholder: string | undefined;
    buttonRef: React.RefObject<HTMLButtonElement>;
    buttonWidth: number;
}
export declare const useSelectPopoverContext: () => SelectPopoverContextProps;
export declare const SelectPopover: ({ value, onChange, placeholder, children, }: SelectPopoverProps) => import("react/jsx-runtime").JSX.Element;
export declare const SelectPopoverTrigger: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<import('@/main').ButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export declare const SelectPopoverValue: () => import("react/jsx-runtime").JSX.Element;
export declare const SelectPopoverOptions: {
    ({ children, className, }: {
        children: ReactNode;
        className?: string;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const SelectPopoverOption: ({ label, value, }: SelectPopoverOptionProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SelectPopover.d.ts.map