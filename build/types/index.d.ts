interface GeneralObjectInterface {
    [key: string]: any;
}
export declare type ExcludePropertyFunction = (object: GeneralObjectInterface, excludedProperty: string, options?: {
    immutable?: boolean;
}) => object;
export {};
