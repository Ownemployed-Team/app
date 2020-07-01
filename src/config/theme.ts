import { theme as chakraTheme } from '@chakra-ui/core'

//export default chakraTheme

export default {
    ...chakraTheme,

    breakpoints: ['40em', '55em', '64em'],
    //breakpoints: ['720px', '920px', '1440px'],
    fontSizes: {
        body: '14px',
        h1: '34px',
        h2: '28px',
        h3: '22px',
        h4: '18px',
        small: '12px',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        monospace: 'Menlo, monospace',
        body: 'Rubik, sans-serif',
        heading: 'Poppins, sans-serif',
    },
    fontWeights: {
        semibold: 600,
        regular: 400,
        medium: 500,
    },
    lineHeights: {
        body: '26px',
        heading: '52px',
    },
    shadows: {
        small: '0px 0px 8px rgba(0,0,0,0.15);',
        large: '0 0 24px rgba(0, 0, 0, .125)',
    },
    radii: {
        button: 4,
        default: 12,
        small: 3,
        large: 39,
        round: '100%',
    },
}

export const theme = {
    breakpoints: ['40em', '55em', '64em'],
    //breakpoints: ['720px', '920px', '1440px'],
    fontSizes: {
        body: '14px',
        h1: '34px',
        h2: '28px',
        h3: '22px',
        h4: '18px',
        small: '12px',
    },
    colors: {
        primary: '#6F63AD',
        primaryHover: '#D0CDE1',
        primaryLight: '#6E6895',
        secondary: '#124780',
        secondaryHover: '#FFE180',
        alert: '#FF5252',
        alertHover: '#ff8080',
        success: '#33d9b2',
        successHover: '#53dfbf',
        heading: '#000000',
        body: '#768598',
        white: '#fff',
        secondaryGrey: '#c4c4c4',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        monospace: 'Menlo, monospace',
        body: 'Rubik, sans-serif',
        heading: 'Poppins, sans-serif',
    },
    fontWeights: {
        semibold: 600,
        regular: 400,
        medium: 500,
    },
    lineHeights: {
        body: '26px',
        heading: '52px',
    },
    shadows: {
        small: '0px 0px 8px rgba(0,0,0,0.15);',
        large: '0 0 24px rgba(0, 0, 0, .125)',
    },
    radii: {
        button: 4,
        default: 12,
        small: 3,
        large: 39,
        round: '100%',
    },
    variants: {
        box: {},
        card: {
            primary: {
                backgroundColor: 'white',
                borderRadius: 'default',
                boxShadow: 'small',
                padding: 2,
                width: 'auto',
            },
            secondary: {
                bg: '#F3F3F3',
                borderRadius: '0',
                minHeight: 385,
                mx: '0',
                padding: '0',
            },
        },
        flex: {},
        image: {},
        link: {},
    },
    text: {},
    buttons: {
        primary: {
            backgroundColor: 'primary',
            borderRadius: 'button',
            boxSizing: 'border-box',
            padding: '6px 8px 6px 8px',
            outline: 'none',
            '&:hover': {
                backgroundColor: 'primaryHover',
                cursor: 'pointer',
            },
        },
        secondary: {
            backgroundColor: 'secondary',
            borderRadius: 'button',
            boxSizing: 'border-box',
            padding: '6px 8px 6px 8px',
            outline: 'none',
            '&:hover': {
                backgroundColor: 'secondaryHover',
                cursor: 'pointer',
            },
        },
        outlined: {
            backgroundColor: 'white',
            color: 'primary',
            borderRadius: 'button',
            border: '1px solid',
            boxSizing: 'border-box',
            padding: '6px 8px 6px 8px',
            '&:hover': {
                borderColor: 'primaryHover',
                cursor: 'pointer',
            },
        },
        secondaryOutlined: {
            backgroundColor: 'primary',
            color: 'white',
            borderRadius: 'button',
            border: '1px solid white',
            boxSizing: 'border-box',
            padding: '6px 8px 6px 8px',
            '&:hover': {
                borderColor: 'primaryHover',
                cursor: 'pointer',
            },
        },
        disabled: {
            backgroundColor: 'primaryHover',
            borderRadius: 'button',
            boxSizing: 'border-box',
            padding: '6px 8px 6px 8px',
            outline: 'none',
        },
    },
}
