interface GeneralObjectInterface {
    [key: string]: any
}

export type ExcludePropertyFunction = (
    object: GeneralObjectInterface,
    excludedProperty: string,
    options?: {
        immutable?: boolean;
    }
) => object;
