import {DetectRetinaFunction} from '../../../types';


export const detectRetina: DetectRetinaFunction = () => {
    return window.devicePixelRatio > 1;
};
