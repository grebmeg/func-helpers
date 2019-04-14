import {PipeFunction} from '../../../types';


export const pipe: PipeFunction = (...functions) => (args) =>
    functions.reduce(
        (arg: any, fn: (arg: any) => any) => fn(arg), args
    );
