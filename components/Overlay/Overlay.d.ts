import { DialogHeader, DialogFooter } from '../Dialog';
import * as React from "react";
declare const Overlay: React.FC<import('@radix-ui/react-dialog').DialogProps>;
declare const OverlayTrigger: React.ForwardRefExoticComponent<import('@radix-ui/react-dialog').DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const OverlayPortal: React.FC<import('@radix-ui/react-dialog').DialogPortalProps>;
declare const OverlayClose: React.ForwardRefExoticComponent<import('@radix-ui/react-dialog').DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const OverlayContent: React.ForwardRefExoticComponent<Omit<Omit<import('@radix-ui/react-dialog').DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const OverlayHeader: {
    ({ containerClassName, ...props }: React.ComponentProps<typeof DialogHeader>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const OverlayFooter: {
    ({ className, ...props }: React.ComponentProps<typeof DialogFooter>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const OverlayTitle: React.ForwardRefExoticComponent<Omit<import('@radix-ui/react-dialog').DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const OverlayDescription: React.ForwardRefExoticComponent<Omit<import('@radix-ui/react-dialog').DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const OverlayBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Overlay, OverlayPortal, OverlayTrigger, OverlayClose, OverlayContent, OverlayHeader, OverlayBody, OverlayFooter, OverlayTitle, OverlayDescription, };
//# sourceMappingURL=Overlay.d.ts.map