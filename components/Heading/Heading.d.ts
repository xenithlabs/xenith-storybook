import { HTMLAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

export declare const headingStyles: (props?: ({
    variant?: "titleLg" | "h1" | "h2" | "titleMd" | "titleSm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingStyles> {
    asChild?: boolean;
}
declare const Heading: ({ asChild, variant, className, ...props }: HeadingProps) => import("react/jsx-runtime").JSX.Element;
export { Heading };
//# sourceMappingURL=Heading.d.ts.map