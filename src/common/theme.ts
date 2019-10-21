import { Sizes } from 'src/common/types/Sizes';
import { InteractiveContextTypes } from 'src/common/types/InteractiveContextTypes';
import { HTMLElementStates } from 'src/common/types/HTMLElementStates';

export const palette: Record<string, string> = {
  maxLight: '#ffffff',
  minLight: '#000000',

  gs90: '#1A1A1A',
  gs80: '#333333',
  gs70: '#4D4D4D',
  gs60: '#666666',
  gs50: '#808080',
  gs40: '#999999',
  gs30: '#B2B2B2',
  gs20: '#CCCCCC',
  gs10: '#E5E5E5',
  gs05: '#F2F2F2',

  primary: '#0B61A4',
  primaryDark: '#25567B',
  primaryDarkest: '#033E6B',
  primaryLight: '#3F92D2',
  primaryLightest: '#66A3D2',

  success: '#1DD300',
  successDark: '#389E28',
  successDarkest: '#138900',
  successLight: '#52E93A',
  successLightest: '#7AE969',

  warning: '#FF9F00',
  warningDark: '#BF8930',
  warningDarkest: '#A66800',
  warningLight: '#FFB740',
  warningLightest: '#FFCA73',

  danger: '#FF1E00',
  dangerDark: '#BF4030',
  dangerDarkest: '#A61300',
  dangerLight: '#FF5640',
  dangerLightest: '#FF8373',

  brand: '#00A287',
  brandDark: '#1E796A',
  brandDarkest: '#006957',
  brandLight: '#34D0B6',
  brandLightest: '#5ED0BD',
};

export const buttonSizeMap: Record<Sizes, Record<string, string>> = {
  xxs: {
    height: '20px',
    paddingHorizontal: '4px',
    fontSize: '12px',
  },
  xs: {
    height: '24px',
    paddingHorizontal: '8px',
    fontSize: '14px',
  },
  s: {
    height: '32px',
    paddingHorizontal: '8px',
    fontSize: '14px',
  },
  m: {
    height: '40px',
    paddingHorizontal: '12px',
    fontSize: '16px',
  },
  l: {
    height: '48px',
    paddingHorizontal: '16px',
    fontSize: '16px',
  },
  xl: {
    height: '56px',
    paddingHorizontal: '20px',
    fontSize: '16px',
  },
  xxl: {
    height: '64px',
    paddingHorizontal: '24px',
    fontSize: '20px',
  },
};

export const inputSizeMap: Record<Sizes, Record<string, string>> = {
  xxs: {
    height: '20px',
    fontSize: '12px',
  },
  xs: {
    height: '24px',
    fontSize: '14px',
  },
  s: {
    height: '32px',
    fontSize: '14px',
  },
  m: {
    height: '40px',
    fontSize: '16px',
  },
  l: {
    height: '48px',
    fontSize: '18px',
  },
  xl: {
    height: '56px',
    fontSize: '24px',
  },
  xxl: {
    height: '64px',
    fontSize: '24px',
  },
};

export const iconSizeMap: Record<Sizes, number> = {
  xxs: 12,
  xs: 16,
  s: 24,
  m: 32,
  l: 36,
  xl: 40,
  xxl: 48,
};

export const buttonColorMap: Record<InteractiveContextTypes, Record<HTMLElementStates, Record<string, string>>> = {
  default: {
    default: {
      color: palette.gs70,
      background: palette.gs10,
      border: palette.gs20,
    },
    hover: {
      color: palette.gs80,
      background: palette.gs10,
      border: palette.gs30,
    },
    active: {
      color: palette.gs80,
      background: palette.gs20,
      border: palette.gs30,
    },
    disabled: {
      color: palette.gs20,
      background: palette.gs10,
      border: palette.gs10,
    },
  },
  primary: {
    default: {
      color: palette.maxLight,
      background: palette.primary,
      border: palette.primary,
    },
    hover: {
      color: palette.maxLight,
      background: palette.primaryLight,
      border: palette.primary,
    },
    active: {
      color: palette.maxLight,
      background: palette.primary,
      border: palette.primaryDark,
    },
    disabled: {
      color: palette.gs20,
      background: palette.primaryLightest,
      border: palette.primaryLightest,
    },
  },
  success: {
    default: {
      color: palette.maxLight,
      background: palette.success,
      border: palette.success,
    },
    hover: {
      color: palette.maxLight,
      background: palette.successLight,
      border: palette.success,
    },
    active: {
      color: palette.maxLight,
      background: palette.success,
      border: palette.successDark,
    },
    disabled: {
      color: palette.gs30,
      background: palette.successLightest,
      border: palette.successLightest,
    },
  },
  warning: {
    default: {
      color: palette.maxLight,
      background: palette.warning,
      border: palette.warning,
    },
    hover: {
      color: palette.maxLight,
      background: palette.warningLight,
      border: palette.warning,
    },
    active: {
      color: palette.maxLight,
      background: palette.warning,
      border: palette.warningDark,
    },
    disabled: {
      color: palette.gs30,
      background: palette.warningLightest,
      border: palette.warningLightest,
    },
  },
  danger: {
    default: {
      color: palette.maxLight,
      background: palette.danger,
      border: palette.danger,
    },
    hover: {
      color: palette.maxLight,
      background: palette.dangerLight,
      border: palette.danger,
    },
    active: {
      color: palette.maxLight,
      background: palette.danger,
      border: palette.dangerDark,
    },
    disabled: {
      color: palette.gs20,
      background: palette.dangerLightest,
      border: palette.dangerLightest,
    },
  },
  clean: {
    default: {
      color: 'inherit',
      background: 'transparent',
      border: 'transparent',
    },
    hover: {
      color: 'inherit',
      background: 'transparent',
      border: 'transparent',
    },
    active: {
      color: 'inherit',
      background: 'transparent',
      border: 'transparent',
    },
    disabled: {
      color: 'inherit',
      background: 'transparent',
      border: 'transparent',
    },
  },
};
