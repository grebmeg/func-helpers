import {
    ColorTypes,
    ConvertColorFunction,
    ConvertHexToRgbFunction,
    ConvertHexToRgbaFunction
} from '../../../types';

function parseHex(colorHex: string) {
    return parseInt(colorHex.padEnd(2, colorHex), 16);
}

function parseColor(color: string) {
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
    } = parseColor(color);

    return `rgb(${red}, ${green}, ${blue})`;
};

const convertHexToRgba: ConvertHexToRgbaFunction = (color, alpha = 1) => {
    const {
        red,
        green,
        blue
    } = parseColor(color);

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
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
                }
            }
        }
    } catch {

    }
};


export default convertColor;
