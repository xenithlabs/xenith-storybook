import { InputHTMLAttributes, ReactNode } from '../../../node_modules/react';
import { SelectProps } from '../Select/interface';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftComponent?: ReactNode;
    rightComponent?: ReactNode;
    containerClassName?: string;
    clearable?: boolean;
    onClear?: () => void;
    error?: boolean;
    rawPlaceholder?: boolean;
}
declare const Input: import('../../../node_modules/react').ForwardRefExoticComponent<InputProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
interface InputAddonProps {
    children: ReactNode;
    className?: string;
    noBorder?: boolean;
}
declare const InputLeftAddon: ({ children, className, noBorder }: InputAddonProps) => import("react/jsx-runtime").JSX.Element;
declare const InputRightAddon: ({ children, noBorder, className, }: InputAddonProps) => import("react/jsx-runtime").JSX.Element;
declare const InputSelectAddon: ({ className, as, size, noBorder, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
declare const SearchInput: import('../../../node_modules/react').ForwardRefExoticComponent<InputProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export { SearchInput, Input, InputLeftAddon, InputRightAddon, InputSelectAddon, };
//# sourceMappingURL=Input.d.ts.map