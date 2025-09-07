import { InputProps } from '../Input';
import { MultiSearchInputProps } from './MultiSearchInput';

export declare const SearchType: {
    readonly Basic: "basic";
    readonly Multi: "multi";
};
export type SearchType = (typeof SearchType)[keyof typeof SearchType];
interface MultiSearchProps {
    className?: string;
    containerClassName?: string;
    basicSearchProps?: Omit<BasicSearchProps, "leftComponent">;
    multiSearchProps?: Omit<MultiSearchInputProps, "leftComponent">;
    searchType?: SearchType;
    onSearchTypeChange?: (searchType: SearchType) => void;
}
export declare const MultiSearch: ({ className, containerClassName, basicSearchProps, multiSearchProps, searchType, onSearchTypeChange, }: MultiSearchProps) => import("react/jsx-runtime").JSX.Element;
interface BasicSearchProps extends InputProps {
    delay?: number;
}
export {};
//# sourceMappingURL=MultiSearch.d.ts.map