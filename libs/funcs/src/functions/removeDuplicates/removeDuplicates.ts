import {RemoveDuplicatesFunction} from '../../../types';


const removeDuplicates: RemoveDuplicatesFunction = (items) => {
    return [... new Set(items)];
};


export default removeDuplicates;
