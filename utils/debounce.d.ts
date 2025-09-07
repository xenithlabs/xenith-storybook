type GenericFunction<TFunc extends (...args: any[]) => unknown> = (...args: Parameters<TFunc>) => ReturnType<TFunc>;
/**
 * Creates a debounced version of a function. Only calling it after a specified amount of time has passed without any new calls.
 *
 * **Methods:**
 * - `cancel()` will cancel the next invocation of the debounced function.
 * - `flush()` will immediately invoke the debounced function and cancel any pending invocations.
 * - `pending()` returns true if the debounced function is set to invoke.
 *
 * This function can be used as a decorator with {@link decDebounce}.
 *
 * @example
 * const sayHello = (name: string) => console.log(`Hello, ${name}!`);
 * const debouncedSayHello = debounce(sayHello, 200);
 *
 * debouncedSayHello("John");
 * debouncedSayHello("Jane");
 * // => Only the second invocation of `debouncedSayHello` is executed, after a delay of 200ms.
 * @param func The function to debounce.
 * @param wait The number of milliseconds to wait before invoking `func`.
 * @returns A debounced version of `func` with `cancel` and `flush` methods.
 */
export declare function debounce<TFunc extends GenericFunction<TFunc>>(func: TFunc, wait: number): TFunc & {
    cancel: () => void;
    flush: () => void;
    pending: () => boolean;
};
export {};
//# sourceMappingURL=debounce.d.ts.map