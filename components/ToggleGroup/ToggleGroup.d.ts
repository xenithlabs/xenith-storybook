import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
declare const ToggleGroup: React.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React.RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: ({
    variant?: "outline" | "default" | "rounded" | null | undefined;
    size?: "sm" | "xs" | "default" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string>) & React.RefAttributes<HTMLDivElement>>;
declare const ToggleGroupItem: React.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "outline" | "default" | "rounded" | null | undefined;
    size?: "sm" | "xs" | "default" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
export { ToggleGroup, ToggleGroupItem };
//# sourceMappingURL=ToggleGroup.d.ts.map