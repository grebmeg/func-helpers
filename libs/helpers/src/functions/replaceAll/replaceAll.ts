import {ReplaceAllFunction} from '../../../types';


const replaceAll: ReplaceAllFunction = (str, replacerMap = {}) => {
    return Object.entries(replacerMap)
        .reduce((strNext, [goal, replacer]) => {
            return strNext.replace(new RegExp(goal, 'g'), replacer);
        }, str);
};


export default replaceAll;
