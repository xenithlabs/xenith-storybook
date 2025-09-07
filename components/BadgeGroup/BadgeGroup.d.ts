import { default as React, HTMLAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { Badge } from '../Badge';

declare const badgeGroupStyles: (props?: ({
    gap?: "md" | "sm" | "xs" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface BadgeGroupProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeGroupStyles> {
    children: React.ReactNode;
    maxVisible?: number;
    maxBadgeWidth?: number | string;
    truncateBadges?: boolean;
    middleTruncate?: boolean;
    middleTruncateEndLength?: number;
    overflowBadgeProps?: React.ComponentProps<typeof Badge>;
    onOverflowChange?: (count: number) => void;
}
declare const BadgeGroup: ({ children, className, gap, maxVisible, maxBadgeWidth, truncateBadges, middleTruncate, middleTruncateEndLength, overflowBadgeProps, onOverflowChange, ...props }: BadgeGroupProps) => import("react/jsx-runtime").JSX.Element;
export { BadgeGroup };
//# sourceMappingURL=BadgeGroup.d.ts.map