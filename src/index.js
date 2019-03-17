const excludeProperty = (object, excludedProperty) => {
    const {
        [excludedProperty]: property,
        ...rest
    } = object;

    return rest;
};

module.exports = {
    excludeProperty
};
