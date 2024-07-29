import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { LabelProps } from '../Label/interfaces';
import * as React from "react";
declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(props: import('react-hook-form').FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: import('react-hook-form').FieldError | undefined;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const FormLabel: React.ForwardRefExoticComponent<LabelProps & React.HTMLAttributes<HTMLLabelElement> & React.RefAttributes<HTMLLabelElement>>;
declare const FormControl: React.ForwardRefExoticComponent<Omit<import('@radix-ui/react-slot').SlotProps & React.RefAttributes<HTMLElement>, "ref"> & {
    error?: boolean | undefined;
} & React.RefAttributes<HTMLElement>>;
declare const FormDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, };
//# sourceMappingURL=Form.d.ts.map