import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../node_modules/react';

declare const iconStyles: (props?: ({
    size?: "md" | "sm" | "xs" | "lg" | "xl" | "2xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface IconProps extends VariantProps<typeof iconStyles> {
    icon: ReactNode;
    className?: string;
    spin?: boolean;
}
export declare const Icon: ({ icon, size, className, spin }: IconProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Icon.d.ts.map