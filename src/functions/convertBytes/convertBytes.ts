import {ConvertBytesFunction} from '../../../types';
import {UNIT_BYTES_PREFIX} from './index';

const convertBytes: ConvertBytesFunction = (bytes) => {
    if (bytes === 0) {
        return '0 Byte';
    }

    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const convertedBytes = Math.round(bytes / Math.pow(1024, i));

    return `${convertedBytes} ${UNIT_BYTES_PREFIX[i]}`;
};

export default convertBytes;
