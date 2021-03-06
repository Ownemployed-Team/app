import preset from '@rebass/preset'

export default {
<<<<<<< HEAD
    ...preset,
    breakpoints: ['40em', '55em', '64em'],
    //breakpoints: ['720px', '920px', '1440px'],
    // fontSizes: {
    //     body: '14px',
    //     h1: '34px',
    //     h2: '28px',
    //     h3: '22px',
    //     h4: '18px',
    //     small: '12px',
    // },
=======
    breakpoints: ['33em', '40em', '55em', '64em'],
    //breakpoints: ['600px','720px', '920px', '1440px'],
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fontSizes: {
        body: '14px',
        h1: '34px',
        h2: '28px',
        h3: '22px',
        h4: '18px',
        small: '12px',
    },
>>>>>>> Updated theme.ts file
    colors: {
        baseWhite: '#FFFFFF',
        baseGrey: '#F3F3F3',
        baseBlack: '#1D1D1D',
        baseYellow: '#FFDA63',
        baseBlue: '#124780',
        basePurple: '#6F63AD',
        backgroundGrey: '#F7F8FC',
        secondaryGrey: '#C4C4C4',
        secondaryBlue: '#124780',
        secondaryPurple: '#D0CDE1',
        errorRed: '#CB1528',
        primaryLight: '#6E6895',
        primary: '#6F63AD',
        primaryHover: '#D0CDE1',
        secondary: '#124780',
        secondaryHover: '#FFE180',
        alert: '#FF5252',
        alertHover: '#ff8080',
        success: '#33d9b2',
        successHover: '#53dfbf',
        heading: '#000000',
        body: '#768598',
        white: '#fff',
    },
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
<<<<<<< HEAD
    lineHeights: {
        body: '26px',
        heading: '52px',
    },
    shadows: {
        small: '0px 0px 8px rgba(0,0,0,0.25);',
        large: '0 0 24px rgba(0, 0, 0, .125)',
=======
    lineHeights: ['16px', '18px', '24px', '32px', '36px', '44px'],
    letterSpacings: {},
    sizes: {},
    borders: {
        secondary: '1px solid #6F63AD',
>>>>>>> Updated theme.ts file
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
        button: 4,
        default: 12,
        small: 3,
        large: 39,
        round: '100%',
    },
    shadows: {
        small: '0px 4px 8px rgba(92, 92, 92, 0.25);',
        large: '0 0 24px rgba(0, 0, 0, 0.125)',
    },
    zIndices: {},
    transitions: {},
    variants: {
        //box: {},
        card: {
            primary: {
                backgroundColor: 'basePurple',
                borderRadius: 'default',
                boxShadow: 'small',
                padding: 2,
                width: 'auto',
            },
            secondary: {
                bg: '#F3F3F3',
                borderRadius: '3px',
                mx: '0',
                padding: '0',
                boxShadow: 'small',
            },
        },
        flex: {},
        image: {},
        link: {},
        text: {},
        heading: {},
    },
    //text: {},
    buttons: {
        primary: {
            backgroundColor: 'basePurple',
            borderRadius: 'button',
            boxSizing: 'border-box',
            padding: '6px 8px 6px 8px',
            outline: 'none',
            '&:hover': {
                cursor: 'pointer',
            },
        },
        secondary: {
            backgroundColor: '#E5E5E5',
            borderRadius: 'button',
            border: 'secondary',
            boxSizing: 'border-box',
            padding: '6px 8px 6px 8px',
            outline: 'none',
        },
        primaryInactive: {
            backgroundColor: 'secondaryPurple',
            borderRadius: 'button',
            boxSizing: 'border-box',
            padding: '6px 8px 6px 8px',
            outline: 'none',
            color: 'baseWhite',
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
            '&:hover': {
                backgroundColor: 'secondaryPurple',
                color: '#6356A6',
            },
        },
    },
}