interface StepsProps<StepType extends string, ActiveType extends StepType | number> {
    active: ActiveType;
    steps: StepType[] | readonly StepType[];
    onStepChange?: (step: ActiveType) => void;
    getStepLabel?: (step: StepType) => string;
    horizontal?: boolean;
    className?: string;
}
export declare const Steps: <StepType extends string, ActiveType extends number | StepType>({ active, steps, onStepChange, getStepLabel, horizontal, className, }: StepsProps<StepType, ActiveType>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Steps.d.ts.map