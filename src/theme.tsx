import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: '"Montserrat", sans-serif',
    },
    palette: {
        primary: {
            main: '#121212',
        },
        secondary: {
            main: '#5d56ce',
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
