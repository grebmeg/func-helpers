import {RemoveDuplicatesFunction} from '../../../types';

export const removeDuplicates: RemoveDuplicatesFunction = (items) => {
    return [... new Set(items)];
};
