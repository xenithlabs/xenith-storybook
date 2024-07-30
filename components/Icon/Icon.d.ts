import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from '../../../node_modules/react';

declare const iconStyles: (props?: ({
    size?: "md" | "sm" | "xs" | "lg" | "xl" | "2xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface IconProps extends VariantProps<typeof iconStyles>, HTMLAttributes<HTMLDivElement> {
    icon: ReactNode;
    className?: string;
    spin?: boolean;
}
export declare const Icon: ({ icon, size, className, spin }: IconProps) => import("react/jsx-runtime").JSX.Element;
interface IconExpandedProps extends IconProps {
    closed: ReactNode;
}
/**
 * Icon that can changed by listening to the aria-expanded props
 * using aria-expanded props because it is a HTML Props that almost
 * any element have, so that this component can be used inside trigger by
 * <DropdownTrigger asChild aria-expanded={true}>
 *  <IconExpanded icon={<OpenedIcon />} closed={<ClosedIcon />} />
 * </DropdownTrigger>
 */
export declare const IconExpanded: ({ closed, icon, ...props }: IconExpandedProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Icon.d.ts.map