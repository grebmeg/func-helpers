import {SleepFunction} from '../../../types';


export const sleep: SleepFunction = (ms) => {
    return new Promise(resolve =>
        setTimeout(() => resolve(ms), ms)
    );
};
