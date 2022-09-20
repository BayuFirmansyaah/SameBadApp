export const COLORS = {
    primary: '#FF5722',
    secondary: '#E6E6E6',
    success: '#27A643',
    danger: '#C35555',
    black: '#000',
    white: '#fff',
    gray: '##74858C'
}

export const SIZE = {
    base: 8,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24
}

export const SHADOW = {
    light: {
        shadowColor: COLORS.gray,
        shadowOffest: {
            width:0,
            height:1,
        },
        shadowOpacity: .2,
        shadowRadius: 2.22,
        elevation:3,
    },

    medium: {
        shadowColor: COLORS.gray,
        shadowOffest: {
            width: 0,
            height:3,
        },
        shadowOpacity:.29,
        shadowRadius:4.65,
        elevation: 7
    },
    dark: {
        shadowColor: COLORS.gray,
        shadowOffest: {
            width: 0,
            height: 7,
        },
        shadowOpacity: .41,
        shadowRadius: 9.11,
        elevation:14
    }
}