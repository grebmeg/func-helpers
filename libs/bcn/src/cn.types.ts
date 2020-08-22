export type ModificatorValue = string | boolean | number;

export interface GenerateClassName {
    (
        block: string,
        ...args: (string | Record<string, ModificatorValue>)[]
    ): string;
}

export interface BemClassNames {
    (block: string): (
        ...args: (string | Record<string, ModificatorValue>)[]
    ) => string;
}

export interface GenerateElement {
    (block: string, elementName: string): string;
}

export interface GenerateModificator {
    (
        block: string,
        elementName: string,
        modifictorName: string,
        modicatorValue: ModificatorValue
    ): string;
}
