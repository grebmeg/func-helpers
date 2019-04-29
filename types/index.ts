export enum ColorTypes {
    HEX,
    RGB,
    RGBA,
    CMYK,
    HSL,
    HWB
}
export enum TimingTypes {
    PERFORMANCE_API,
    CONSOLE_API
}

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

export type ConvertHexToRgbFunction = (
    color: string
) => any;
export type ConvertHexToRgbaFunction = (
    color: string,
    alpha?: number
) => any;
export type ConvertHexToCmykFunction = (
    color: string
) => any;
export type ConvertColorFunction = (
    color: string,
    fromColorType: ColorTypes,
    toColorType: ColorTypes
) => any;

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

export type ComposeFunction = (...functions: any[]) => (...args: any[]) => any;
export type PipeFunction = (...functions: any[]) => (...args: any[]) => any;

export type DetectRetinaFunction = () => boolean;


export interface TimingSetupConfig {
    type: TimingTypes;
}
