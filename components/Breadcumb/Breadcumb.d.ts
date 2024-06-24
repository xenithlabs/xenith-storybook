import { VariantProps } from 'class-variance-authority';

declare const breadcumbStyles: (props?: ({
    theme?: "primary" | "neutral" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface BreadcumbProps extends VariantProps<typeof breadcumbStyles> {
    paths: string[];
    className?: string;
}
declare const Breadcumb: ({ paths, className, theme }: BreadcumbProps) => import("react/jsx-runtime").JSX.Element;
export { Breadcumb };
//# sourceMappingURL=Breadcumb.d.ts.map