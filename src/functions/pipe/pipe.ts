import {PipeFunction} from '../../../types';


const pipe: PipeFunction = (...functions) => (args) =>
    functions.reduce(
        (arg: any, fn: (arg: any) => any) => fn(arg), args
    );


export default pipe;
