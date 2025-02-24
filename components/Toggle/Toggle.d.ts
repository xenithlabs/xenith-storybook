import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
declare const toggleVariants: (props?: ({
    variant?: "outline" | "default" | "rounded" | null | undefined;
    size?: "sm" | "xs" | "default" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "outline" | "default" | "rounded" | null | undefined;
    size?: "sm" | "xs" | "default" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
export { Toggle, toggleVariants };
//# sourceMappingURL=Toggle.d.ts.map