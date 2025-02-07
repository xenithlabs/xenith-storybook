import { Dispatch, RefObject, SetStateAction } from '../../../node_modules/react';
import { Props as ReactSelectProps } from 'react-select';

export interface BaseStylesProps {
    size?: "md" | "sm";
    noBorder?: boolean;
    error?: boolean;
    readonly?: boolean;
    optionBorder?: boolean;
    isDisabled?: boolean;
    readOnlyWithCheck?: boolean;
}
export interface SelectProps extends ReactSelectProps, BaseStylesProps {
    error?: boolean;
    useBlurContainer?: boolean;
    isOptionSearchable?: boolean;
    readonly?: boolean;
    as?: React.ElementType;
    overrideClickoutsideRef?: RefObject<HTMLElement>;
    placeholder?: "skeleton" | string | React.ReactNode;
    fetchOptions?: () => Promise<unknown[]>;
    optionBorder?: boolean;
    readOnlyWithCheck?: boolean;
    float?: boolean;
    searchValue?: string;
    setSearchValue?: Dispatch<SetStateAction<string>>;
    withSelectAll?: boolean;
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
export type CurrencyOptionType = {
    code: string;
    decimals: 2;
    name: string;
    number: string;
    country: string;
};
//# sourceMappingURL=interface.d.ts.map