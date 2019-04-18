import * as React from "react";

import {TestProps} from '../../types';

export default function Test(props: TestProps) {
    return (
        <h1>
            Hello from {props.compiler} and {props.framework}!
        </h1>
    );
}
