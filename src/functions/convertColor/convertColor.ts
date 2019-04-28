import {
    ColorTypes,
    ConvertColorFunction,
    ConvertHexToRgbFunction
} from '../../../types';

function parseHex(colorHex: string) {
    return parseInt(colorHex.padEnd(2, colorHex), 16);
}

const convertHexToRgb: ConvertHexToRgbFunction = (color) => {
    const result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);

    if (result) {
        const redHex = result[1];
        const greenHex = result[2];
        const blueHex = result[3];

        const red = parseHex(redHex);
        const green = parseHex(greenHex);
        const blue = parseHex(blueHex);

        return `rgb(${red}, ${green}, ${blue})`;
    } else {
        throw new Error();
    }
};


const convertColor: ConvertColorFunction = (color, fromType, toType) => {
    try {
        switch (fromType) {
            case ColorTypes.HEX: {
                switch (toType) {
                    case ColorTypes.RGB:
                        return convertHexToRgb(color);
                }
            }
        }
    } catch {

    }
};


export default convertColor;
