import {ExcludePropertyFunction} from '../../types';

export const excludeProperty: ExcludePropertyFunction = (object, excludedProperty) => {
    const {
        [excludedProperty]: property,
        ...rest
    } = object;

    return rest;
};
