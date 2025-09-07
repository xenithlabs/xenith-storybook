export declare const ModifierKey: {
    readonly Shift: "Shift";
    readonly Ctrl: "Ctrl";
    readonly Alt: "Alt";
    readonly Cmd: "Cmd";
};
export type ModifierKey = (typeof ModifierKey)[keyof typeof ModifierKey];
export declare const isModifierKey: (key: string) => key is ModifierKey;
/**
 * This hook listens for key presses and calls the given callback when one of
 * the given shortcuts is triggered.
 * Meta key is mapped to Command on macOS and Ctrl on Windows.
 *
 * The following keys are supported:
 *  - Letter keys (e.g. "a", "P", "Shift + A")
 *  - Number keys (e.g. "1", "2", "Shift + 1")
 *  - Symbols (e.g. "@", "!", "#")
 *  - Function keys (e.g. "F1", "F2", "F12")
 *  - Special keys (e.g. "Enter", "Escape", "Tab")
 *  - Navigation keys (e.g. "ArrowLeft", "ArrowRight", "Home")
 *  - Modifier keys (e.g. "Shift", "Ctrl", "Alt", "Cmd")
 *
 * Cmd is mapped to Command on macOS and Ctrl on Windows.
 *
 * Combinations of keys (e.g. "Shift + A", "Ctrl + Shift + A") are also
 * supported.
 *
 * @example
 * useShortcut("a", () => console.log("Pressed 'a'"))
 * useShortcut(["Shift + A", "Ctrl + Shift + A"], () => console.log("Pressed 'A' or 'Shift + A'"))
 */
export declare function useShortcut(shortcut: string | string[], onShortcut: () => void): void;
//# sourceMappingURL=useShortcut.d.ts.map