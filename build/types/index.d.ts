interface GeneralObjectInterface {
    [key: string]: any;
}
export declare type ExcludePropertyFunction = (object: GeneralObjectInterface, excludedProperty: string, options?: {
    immutable?: boolean;
}) => object;
export declare type ConvertBytesFunction = (bytes: number) => string;
export declare type RemoveDuplicatesFunction = (items: any[]) => any[];
export declare type RandomHexColorFunction = () => string;
export {};
