import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
interface LabelProps {
    required?: boolean;
}
declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: import('class-variance-authority/types').ClassProp | undefined) => string> & LabelProps & React.RefAttributes<HTMLLabelElement>>;
export { Label };
//# sourceMappingURL=Label.d.ts.map