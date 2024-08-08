import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from '../../../node_modules/react';

interface SidebarItemProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
    icon?: ReactNode;
    text: string;
    badgeNumber?: number;
    active?: boolean;
    expanded?: boolean;
}
declare const SidebarItem: ({ icon, text, disabled, active, children, badgeNumber, expanded, ...buttonProps }: SidebarItemProps) => import("react/jsx-runtime").JSX.Element;
export { SidebarItem };
//# sourceMappingURL=SidebarItem.d.ts.map