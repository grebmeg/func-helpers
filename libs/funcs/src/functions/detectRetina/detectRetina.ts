import {DetectRetinaFunction} from '../../../types';


const detectRetina: DetectRetinaFunction = () => {
    return window.devicePixelRatio > 1;
};


export default detectRetina;
