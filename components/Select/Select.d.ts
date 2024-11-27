import { default as React } from '../../../node_modules/react';
import { Props as SelectPrimitiveProps } from 'react-select';
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
declare const CountrySelect: React.ForwardRefExoticComponent<SelectProps<unknown> & React.RefAttributes<never>>;
interface CurrenciesSelectProps extends SelectProps {
    withFlag?: boolean;
    currencyOptions?: string[];
}
declare const CurrenciesSelect: React.ForwardRefExoticComponent<CurrenciesSelectProps & React.RefAttributes<never>>;
declare const PhoneSelect: React.ForwardRefExoticComponent<SelectProps<unknown> & React.RefAttributes<never>>;
declare const GenericSelect: <Option = unknown>(props: SelectProps<Option> & {
    ref?: React.Ref<React.ElementRef<React.ComponentType<SelectPrimitiveProps>>>;
}) => React.ReactNode;
export { GenericSelect as Select, SelectBaseStyles, CountrySelect, CurrenciesSelect, PhoneSelect, };
//# sourceMappingURL=Select.d.ts.map