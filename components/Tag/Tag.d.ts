import { HTMLAttributes, ReactNode, MouseEvent } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const tagStyles: (props?: ({
    variant?: "solid" | "outline" | null | undefined;
    size?: "md" | "sm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface TagCloseProps {
    onClose: (e: MouseEvent) => void;
}
declare const TagClose: ({ onClose }: TagCloseProps) => import("react/jsx-runtime").JSX.Element;
interface TagCountProps {
    count: number;
}
declare const TagCount: ({ count }: TagCountProps) => import("react/jsx-runtime").JSX.Element;
interface TagProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof tagStyles> {
    rightComponent?: ReactNode;
}
declare const Tag: ({ children, className, variant, rightComponent, ...divProps }: TagProps) => import("react/jsx-runtime").JSX.Element;
export { Tag, TagClose, TagCount };
//# sourceMappingURL=Tag.d.ts.map