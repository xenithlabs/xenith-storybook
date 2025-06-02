import { default as React, ReactNode, HTMLAttributes } from '../../../node_modules/react';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
    logo?: ReactNode;
    collapsed?: boolean;
    disableCollapsible?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    shortcut?: string;
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;
export { Sidebar };
//# sourceMappingURL=Sidebar.d.ts.map