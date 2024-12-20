import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
    showBorder?: boolean;
}
declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
    rightComponent?: React.ReactNode;
}
declare const AccordionTrigger: React.ForwardRefExoticComponent<AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
//# sourceMappingURL=Accordion.d.ts.map