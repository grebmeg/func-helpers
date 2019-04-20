import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
.add('with text', () => (
    <span>Hello Button</span>
))
.add('with emoji', () => (
    <span><span role="img" aria-label="so cool">😀 😎 👍 💯</span></span>
));
