import {Timing} from '../../../types';

class TimingAPI {
    constructor() {}

    log() {
        console.log('TIMING_API');
    }
}


export const timing: Timing = new TimingAPI();
