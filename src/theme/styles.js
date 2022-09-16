import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
  colors: {
    themeBackground: '#0c111f',
    white: '#FFFFFF',
    progress: 'rgba(255,255,255,.1)',
    primaryGreen: '#4cceac',
    secondaryGreen: '#A1C038',
    darkGreen: '#003722',
    orange: '#CE8E00',
    primaryGold: '#A79866',
    secondaryGold: '#AD8800',
    vcbGolden: '#A78D58',
    lightYellow: '#EEDDA4',
    brownBlack: '#382D24',
    brownPriority: '#553716',
    brownWhite: '#4C3327',
    sidebarBackground: '#0e1627',
    header: '#0A0E19',
    mainBackground: '#121729',
    red: 'rgb(247, 82, 95)',
    gray: {
      light: '#F7F8FA',
      700: '#1f2733',
    },
    point: '#CE8E00',
    contactLink: '#0077CB',
    navy: {
      50: '#d0dcfb',
      100: '#aac0fe',
      200: '#a3b9f8',
      300: '#728fea',
      400: '#3652ba',
      500: '#1b3bbb',
      600: '#24388a',
      700: '#1b254b',
      800: '#111c44',
      900: '#0b1437',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: 'hidden',
        bg: mode('#F5F5F5', '#0c111f')(props),
        fontFamily: 'Arial, sans-serif',
        color: '#ffffff',
      },
      html: {
        fontFamily: 'Arial, sans-serif',
      },
    }),
  },
};
