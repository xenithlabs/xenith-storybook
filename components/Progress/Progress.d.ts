import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
declare const Progress: React.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface ProgressWithTooltipProps extends React.ComponentPropsWithoutRef<typeof Progress> {
    text: string;
}
declare const ProgressWithTooltip: ({ text, ...progressProps }: ProgressWithTooltipProps) => import("react/jsx-runtime").JSX.Element;
export { Progress, ProgressWithTooltip };
//# sourceMappingURL=Progress.d.ts.map