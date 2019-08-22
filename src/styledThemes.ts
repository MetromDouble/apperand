import { DefaultTheme } from 'styled-components';
import { palette, newPalette} from './utils/uikit';

export const theme: DefaultTheme = {
  palette: {
    ...palette,
    ...newPalette
  }
};
