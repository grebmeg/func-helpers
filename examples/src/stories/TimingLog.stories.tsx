import React from 'react';
import {storiesOf} from '@storybook/react';

import TimingLog from '../components/TimingLog/TimingLog';

storiesOf('TimingLog', module)
    .add('performance browser api', () => (
        <TimingLog/>
    ));
