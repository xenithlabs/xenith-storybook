import { default as React, ImgHTMLAttributes } from '../../../node_modules/react';

export declare const BANK_IMAGE: {
    readonly BNI: "bni";
    readonly BCA: "bca";
    readonly ARTHA_GRAHA: "artha_graha";
    readonly MAYBANK: "maybank";
    readonly MANDIRI: "mandiri";
    readonly PERMATA: "permata";
    readonly BRI: "bri";
    readonly CIMB: "cimb";
    readonly QRIS: "qris";
    readonly INA: "ina";
    readonly OVO: "ovo";
    readonly BSS: "bss";
    readonly DANA: "dana";
    readonly VIENTIN: "vientin";
    readonly SACOMBANK: "sacombank";
    readonly VIETCOMBANK: "vietcom";
    readonly VIETQR: "vietqr";
    readonly ACB: "acb";
    readonly BIDV: "bidv";
    readonly DONGA: "donga";
    readonly TECHOM: "techom";
};
export declare const PAYMENT_CHANNEL_TO_BANK_IMAGE: {
    readonly "BCA.VA": "bca";
    readonly "MDR.VA": "mandiri";
    readonly "BMI.VA": "maybank";
    readonly "BSS.VA": "bss";
    readonly "PTB.VA": "permata";
    readonly "BAG.VA": "artha_graha";
    readonly "INA.VA": "ina";
    readonly "CIMBN.VA": "cimb";
    readonly "BRI.VA": "bri";
    readonly "BNI.VA": "bni";
    readonly QRIS: "qris";
    readonly EWALLET: "dana";
    readonly VIETQR: "vietqr";
};
export declare const bankImages: ("bni" | "bca" | "artha_graha" | "maybank" | "mandiri" | "permata" | "bri" | "cimb" | "qris" | "ina" | "ovo" | "bss" | "dana" | "vientin" | "sacombank" | "vietcom" | "vietqr" | "acb" | "bidv" | "donga" | "techom")[];
interface BankImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    bank: (typeof bankImages)[number];
}
export declare const BankImage: React.FC<BankImageProps>;
export {};
//# sourceMappingURL=BankImage.d.ts.map