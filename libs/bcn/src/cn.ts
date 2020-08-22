import {
    BemClassNames,
    GenerateClassName,
    GenerateElement,
    GenerateModificator,
    ModificatorValue,
} from './cn.types';

const CN_SETTINGS = {
    elementDelimiter: '__',
    modificatorDelimiter: '_',
    insideModificatorsDelimiter: '_',
};

const generateElement: GenerateElement = (block, elementName) =>
    [block, elementName].join(CN_SETTINGS.elementDelimiter);

const generateModifactor: GenerateModificator = (
    block,
    element,
    modifictorName,
    modicatorValue
) => {
    const modifcatorDefinitins = [modifictorName, modicatorValue];
    if (typeof modicatorValue === 'boolean') {
        modifcatorDefinitins.pop();
    }
    const modifcatorDefinitin = modifcatorDefinitins.join(
        CN_SETTINGS.insideModificatorsDelimiter
    );

    if (element) {
        return [element, modifcatorDefinitin].join(
            CN_SETTINGS.modificatorDelimiter
        );
    } else {
        return [block, modifcatorDefinitin].join(
            CN_SETTINGS.modificatorDelimiter
        );
    }
};

const generateClassName: GenerateClassName = (block, ...args) => {
    const classNames: string[] = [block];
    let element: string;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (typeof arg === 'string') {
            if (i > 0) {
                classNames.push(arg);
            } else {
                element = generateElement(block, arg);

                classNames.push(element);
            }
        } else if (typeof arg === 'object' && arg !== null) {
            for (const [modicatorName, modicatorValue] of Object.entries<
                ModificatorValue
            >(arg)) {
                const modificator = generateModifactor(
                    block,
                    element,
                    modicatorName,
                    modicatorValue
                );

                classNames.push(modificator);
            }
        }
    }

    return classNames.join(' ');
};

const cn: BemClassNames = (block) => (...args): string =>
    generateClassName(block, ...args);

export default cn;
