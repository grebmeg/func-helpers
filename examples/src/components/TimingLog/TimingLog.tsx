import * as React from 'react';

import Timing from '../../../../src/functions/timing/timing';
import sleep from '../../../../src/functions/sleep/sleep';

import {TimingLog} from '../../types';

export default function TimingLog(props: TimingLog) {
    const {console} = props;

    if (console) {
        Timing.setup({type: Timing.types.CONSOLE_API});
    }

    const component = (
        <h1>
            Hello!
        </h1>
    );

    Timing.mark();

    sleep(200);

    Timing.mark();

    sleep(300);

    Timing.mark();

    sleep(500);

    Timing.display();

    return component;
}
