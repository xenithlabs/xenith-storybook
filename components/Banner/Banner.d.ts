import { HTMLAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const bannerStyles: (props?: ({
    variant?: "simple" | null | undefined;
    theme?: "success" | "destructive" | "neutral" | "warning" | "accent" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface BannerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof bannerStyles> {
    icon?: React.ReactNode;
    rightComponent?: React.ReactNode;
}
declare const Banner: ({ children, className, variant, theme, icon, rightComponent, }: BannerProps) => import("react/jsx-runtime").JSX.Element;
export { Banner };
//# sourceMappingURL=Banner.d.ts.map