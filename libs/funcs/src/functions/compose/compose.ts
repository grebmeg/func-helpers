import {ComposeFunction} from '../../../types';


const compose: ComposeFunction = (...functions) => (args) =>
    functions.reduceRight(
        (arg: any, fn: (arg: any) => any) => fn(arg), args
    );


export default compose;
