import { InputHTMLAttributes, ReactNode } from '../../../node_modules/react';
import { SelectProps } from '../Select/interface';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftComponent?: ReactNode;
    rightComponent?: ReactNode;
    containerClassName?: string;
    error?: boolean;
}
declare const Input: import('../../../node_modules/react').ForwardRefExoticComponent<InputProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
interface InputLeftAddonProps {
    children: ReactNode;
    className?: string;
    noBorder?: boolean;
}
declare const InputLeftAddon: ({ children, className, noBorder, }: InputLeftAddonProps) => import("react/jsx-runtime").JSX.Element;
declare const InputRightAddon: ({ children, className }: InputLeftAddonProps) => import("react/jsx-runtime").JSX.Element;
declare const InputSelectAddon: ({ className, as, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export { Input, InputLeftAddon, InputRightAddon, InputSelectAddon };
//# sourceMappingURL=Input.d.ts.map