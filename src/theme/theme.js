import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { breakpoints } from './breakpoints.js';
import { typography } from './typography';
import { buttonStyles } from './components/button';
import { badgeStyles } from './components/badge';
import { linkStyles } from './components/link';
import { inputStyles } from './components/input';
import { CardComponent } from './additions/card/Card';
import { MainPanelComponent } from './additions/layout/MainPanel';
import { PanelContentComponent } from './additions/layout/PanelContent';
import { PanelContainerComponent } from './additions/layout/PanelContainer';
import { spacing } from '@/theme/spacing.js';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const theme = extendTheme(
  { config, breakpoints,spacing },
  globalStyles,
  buttonStyles,
  badgeStyles,
  inputStyles,
  linkStyles,
  typography,
  CardComponent,
  MainPanelComponent,
  PanelContentComponent,
  PanelContainerComponent,
  {
    shadows: {
      common: '0px 4px 8px rgba(79, 91, 100, 0.12);',
    },
    borderRadius: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
  }
);
export default theme;
