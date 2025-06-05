import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from '../../../node_modules/react';

interface SidebarItemProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
    icon?: ReactNode;
    text: ReactNode;
    disableHoverInteraction?: boolean;
    rightComponent?: ReactNode;
    badgeNumber?: number;
    active?: boolean;
    expanded?: boolean;
}
declare const SidebarItem: import('../../../node_modules/react').ForwardRefExoticComponent<SidebarItemProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export { SidebarItem };
//# sourceMappingURL=SidebarItem.d.ts.map