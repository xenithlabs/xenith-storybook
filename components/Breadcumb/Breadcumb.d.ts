import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../node_modules/react';

declare const breadcumbStyles: (props?: ({
    theme?: "primary" | "neutral" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface BreadcumbProps extends VariantProps<typeof breadcumbStyles> {
    children: ReactNode;
    className?: string;
}
declare const Breadcumb: ({ children, className, theme }: BreadcumbProps) => import("react/jsx-runtime").JSX.Element;
declare const BreadcumbItem: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<import('@/main').ButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export { Breadcumb, BreadcumbItem };
//# sourceMappingURL=Breadcumb.d.ts.map