import { Props as ReactSelectProps } from 'react-select';

export interface SelectProps extends ReactSelectProps {
    useBlurContainer?: boolean;
    as?: React.ElementType;
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