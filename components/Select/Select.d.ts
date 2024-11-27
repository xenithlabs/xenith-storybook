import { default as React } from '../../../node_modules/react';
import { BaseStylesProps, SelectProps } from './interface';

declare const SelectBaseStyles: ({ size, noBorder, error, readonly, readOnlyWithCheck, optionBorder, isDisabled, }?: BaseStylesProps) => {
    readonly container: () => string;
    readonly control: () => string;
    readonly valueContainer: () => string;
    readonly groupHeading: () => string;
    readonly placeholder: () => string;
    readonly indicatorSeparator: () => string;
    readonly clearIndicator: () => string;
    readonly dropdownIndicator: () => string;
    readonly singleValue: () => string;
    readonly multiValue: () => string;
    readonly multiValueRemove: () => string;
    readonly menu: () => string;
    readonly menuList: () => string;
    readonly option: () => string;
};
declare const Select: React.ForwardRefExoticComponent<SelectProps<unknown> & React.RefAttributes<never>>;
declare const CountrySelect: React.ForwardRefExoticComponent<SelectProps<unknown> & React.RefAttributes<never>>;
interface CurrenciesSelectProps extends SelectProps {
    withFlag?: boolean;
    currencyOptions?: string[];
}
declare const CurrenciesSelect: React.ForwardRefExoticComponent<CurrenciesSelectProps & React.RefAttributes<never>>;
declare const PhoneSelect: React.ForwardRefExoticComponent<SelectProps<unknown> & React.RefAttributes<never>>;
export { Select, SelectBaseStyles, CountrySelect, CurrenciesSelect, PhoneSelect, };
//# sourceMappingURL=Select.d.ts.map