import {RandomHexColorFunction} from '../../../types';


export const randomHexColor: RandomHexColorFunction = () => {
    const hex = Math.floor(Math.random() * 0xFFFFFF)
        .toString(16)
        .padStart(6, '0');

    return `#${hex}`
};
