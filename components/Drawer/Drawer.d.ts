import { VariantProps } from 'class-variance-authority';
import { ButtonProps } from '../Button';
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
declare const Drawer: React.FC<DialogPrimitive.DialogProps>;
declare const DrawerTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DrawerClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DrawerPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const DrawerOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const drawerVariants: (props?: ({
    side?: "left" | "right" | "top" | "bottom" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof drawerVariants> {
}
declare const DrawerContent: React.ForwardRefExoticComponent<DrawerContentProps & React.RefAttributes<HTMLDivElement>>;
interface DrawerHeaderActionProps extends ButtonProps {
    shortcut?: string;
}
declare const DrawerHeaderAction: React.ForwardRefExoticComponent<DrawerHeaderActionProps & React.RefAttributes<HTMLButtonElement>>;
interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    showCloseButton?: boolean;
    hasDivider?: boolean;
}
declare const DrawerHeader: {
    ({ className, showCloseButton, hasDivider, children, ...props }: DrawerHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DrawerTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerHeaderAction, DrawerTitle, DrawerDescription, };
//# sourceMappingURL=Drawer.d.ts.map