import {SleepFunction} from '../../../types';


export const sleep: SleepFunction = (ms, async = false) => {
    if (async) {
        return new Promise(resolve =>
            setTimeout(() => resolve(ms), ms)
        );
    } else {
        const timeLimit = Date.now() + ms;

        while(Date.now() < timeLimit) {}

        return ms;
    }
};

export default sleep;
