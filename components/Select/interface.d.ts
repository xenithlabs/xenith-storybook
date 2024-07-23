import { Props as ReactSelectProps } from 'react-select';

export interface BaseStylesProps {
    size?: "md" | "sm";
    noBorder?: boolean;
}
export interface SelectProps extends ReactSelectProps, BaseStylesProps {
    useBlurContainer?: boolean;
    isOptionSearchable?: boolean;
    as?: React.ElementType;
    placeholder?: "skeleton" | string;
    fetchOptions?: () => Promise<unknown[]>;
}
export interface OptionType {
    label: string;
    value: string;
}
export type CountryOptionType = {
    code: string;
    name: string;
    dial_code: string;
};
//# sourceMappingURL=interface.d.ts.map