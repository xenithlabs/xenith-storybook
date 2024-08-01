import { Dispatch, ElementType, PropsWithChildren, SetStateAction } from '../../../node_modules/react';

interface MultiDialogContextType<KeysUnion> {
    key: KeysUnion;
    setKey: Dispatch<SetStateAction<KeysUnion>>;
    open: boolean;
    onOpenChange: (bool: boolean) => void;
    dialogContentComponentsMap: Record<string, ElementType>;
}
export declare const MultiDialogContext: import('../../../node_modules/react').Context<MultiDialogContextType<unknown>>;
/**
 * If you need to render multiple dialog inside
 * dropdown / context menu use this MultiDialog Helper
 */
export declare const MultiDialog: import('../../../node_modules/react').FC<import('@radix-ui/react-dialog').DialogProps>;
export declare const MultiDialogTrigger: import('../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-dialog').DialogTriggerProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export declare const MultiDialogContent: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element | null;
type MultiDialogProviderProps<KeysUnion> = PropsWithChildren & Pick<MultiDialogContextType<KeysUnion>, "dialogContentComponentsMap">;
export declare const MultiDialogProvider: <KeysUnion>({ dialogContentComponentsMap, children, }: MultiDialogProviderProps<KeysUnion>) => import("react/jsx-runtime").JSX.Element;
export declare const useMultiDialog: <KeysUnion>() => MultiDialogContextType<KeysUnion>;
export {};
//# sourceMappingURL=MultiDialog.d.ts.map