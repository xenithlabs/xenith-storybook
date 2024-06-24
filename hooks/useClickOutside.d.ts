/// <reference types="react" />
interface UseClickOutsideParam {
    onClickOutside: () => void;
    ignoreClass?: string;
}
/**
 * Custom hook that detects clicks outside of a specified element.
 * @param onClickOutside The callback function to be called when a click outside the element occurs.
 * @param ignoreClass The class name of the element(s) to be ignored when detecting clicks outside.
 * @returns A ref object that should be attached to the element you want to detect clicks outside of.
 */
export declare const useClickOutside: ({ onClickOutside, ignoreClass, }: UseClickOutsideParam) => import('../../node_modules/react').RefObject<HTMLDivElement>;
export {};
//# sourceMappingURL=useClickOutside.d.ts.map