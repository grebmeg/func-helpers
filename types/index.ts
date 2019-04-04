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

export type ConvertBytesFunction = (
    bytes: number
) => string;

export type RemoveDuplicatesFunction = (
    items: any[]
) => any[];

export type RandomHexColorFunction = () => string;

export type SleepFunction = (
    ms: number,
    async?: boolean
) => Promise<number> | number;

export type ReplaceAllFunction = (
    str: string,
    replacerMap: {
        [goal: string]: any
    }
) => string;

export type RetryFunction = (
    callback: () => any,
    options?: {
        timeout: number,
        maxCount: number
    }
) => any;

export type InnerRetryFunction = () => any;
