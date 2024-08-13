import { RefObject } from '../../../node_modules/react';
import { Props as ReactSelectProps } from 'react-select';

export interface BaseStylesProps {
    size?: "md" | "sm";
    noBorder?: boolean;
}
export interface SelectProps extends ReactSelectProps, BaseStylesProps {
    useBlurContainer?: boolean;
    isOptionSearchable?: boolean;
    as?: React.ElementType;
    overrideClickoutsideRef?: RefObject<HTMLElement>;
    placeholder?: "skeleton" | string | React.ReactNode;
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