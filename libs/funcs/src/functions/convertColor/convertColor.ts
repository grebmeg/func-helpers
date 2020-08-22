import {
    ColorTypes,
    ConvertColorFunction,
    ConvertHexToRgbFunction,
    ConvertHexToRgbaFunction,
    ConvertHexToCmykFunction
} from '../../../types';

function parseHex(colorHex: string) {
    return parseInt(colorHex.padEnd(2, colorHex), 16);
}

function parseHexColor(color: string) {
    const result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);

    if (result) {
        const [,
            redHex,
            greenHex,
            blueHex
        ] = result;

        const red = parseHex(redHex);
        const green = parseHex(greenHex);
        const blue = parseHex(blueHex);

        return {
            red,
            green,
            blue
        }
    } else {
        throw new Error();
    }
}

const convertHexToRgb: ConvertHexToRgbFunction = (color) => {
    const {
        red,
        green,
        blue
    } = parseHexColor(color);

    return `rgb(${red}, ${green}, ${blue})`;
};

const convertHexToRgba: ConvertHexToRgbaFunction = (color, alpha = 1) => {
    const {
        red,
        green,
        blue
    } = parseHexColor(color);

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const convertHexToCmyk: ConvertHexToCmykFunction = (color) => {
    const {
        red,
        green,
        blue
    } = parseHexColor(color);

    let cyan = 1 - (red/255);
    let magenta = 1 - (green/255);
    let yellow = 1 - (blue/255);

    const key = Math.min(cyan, Math.min(magenta, yellow));

    cyan = (cyan - key) / (1 - key) ;
    magenta = (magenta - key) / (1 - key) ;
    yellow = (yellow - key) / (1 - key) ;

    return `cmyk(${cyan}, ${magenta}, ${yellow}, ${key})`;
};


const convertColor: ConvertColorFunction = (color, fromType, toType) => {
    try {
        switch (fromType) {
            case ColorTypes.HEX: {
                switch (toType) {
                    case ColorTypes.RGB:
                        return convertHexToRgb(color);
                    case ColorTypes.RGBA:
                        return convertHexToRgba(color);
                    case ColorTypes.CMYK:
                        return convertHexToCmyk(color);
                }
            }
        }
    } catch {

    }
};


export default convertColor;
