import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
type CheckboxPrimitiveProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;
interface CheckboxProps extends CheckboxPrimitiveProps {
    indeterminate?: boolean;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox };
//# sourceMappingURL=Checkbox.d.ts.map