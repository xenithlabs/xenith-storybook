import { HTMLAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const badgeStyles: (props?: ({
    variant?: "solid" | "outline" | "soft" | null | undefined;
    theme?: "primary" | "destructive" | "neutral" | "success" | "warning" | null | undefined;
    size?: "md" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeStyles> {
}
declare const Badge: ({ children, className, variant, theme, size }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export { Badge };
//# sourceMappingURL=Badge.d.ts.map