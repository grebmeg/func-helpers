import {ComposeFunction} from '../../../types';


export const compose: ComposeFunction = (...functions) => (args) =>
    functions.reduceRight(
        (arg: any, fn: (arg: any) => any) => fn(arg), args
    );
