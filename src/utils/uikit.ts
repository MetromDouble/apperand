export type ButtonTypes = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'clean';
type ButtonTypesIndex = {
  [index in ButtonTypes]: {
    default: {
      color: string;
      background: string;
      border: string;
    },
    hover: {
      color: string;
      background: string;
      border: string;
    },
    active: {
      color: string;
      background: string;
      border: string;
    },
    disabled: {
      color: string;
      background: string;
      border: string;
    },
  }
}

export type Sizes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'wide';
type ButtonSizesIndex = Record<Sizes, {
  height: string;
  paddingHorizontal: string;
  fontSize: string;
}>;
type InputSizesIndex = Record<Sizes, {
  height: string;
  fontSize: string;
}>;

export type IconSizes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
type IconSizesIndex = Record<IconSizes, number>;

export type Directions = 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw' | 'ns' | 'ew' | 'nesw' | 'nwse';

export const palette = {
  maxLight: '#ffffff',
  minLight: '#000000',
  wetAsphalt: '#2b2b2b',
  asphalt: '#5e5e5e',
  steel: '#d8d8d8',
  iron: '#b2b2b2',
  wetPaper: '#ebebeb',
  paper: '#f7f7f7',
  primary: '#3551Af',
  primaryWeak: '#607dd8',
  primaryStrong: '#27378a',
  success: '#53b953 ',
  successWeak: '#76dd76',
  successStrong: '#3d9d3d',
  danger: '#e24949',
  dangerWeak: '#f07b7b',
  dangerStrong: '#db2626',
  warning: '#ffda15',
  warningWeak: '#ffe664',
  warningStrong: '#ecc600',
};

export const newPalette = {
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

export const buttonSizeMap: ButtonSizesIndex = {
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
  wide: {
    height: '100%',
    paddingHorizontal: '0',
    fontSize: '16px',
  },
};

export const inputSizeMap: InputSizesIndex = {
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
  wide: {
    height: '100%',
    fontSize: '16px',
  },
};

export const iconWidthMap: IconSizesIndex = {
  xxs: 12,
  xs: 16,
  s: 24,
  m: 32,
  l: 36,
  xl: 40,
};

export const btnColorMap: ButtonTypesIndex = {
  default: {
    default: {
      color: newPalette.gs70,
      background: newPalette.gs10,
      border: newPalette.gs20,
    },
    hover: {
      color: newPalette.gs80,
      background: newPalette.gs10,
      border: newPalette.gs30,
    },
    active: {
      color: newPalette.gs80,
      background: newPalette.gs20,
      border: newPalette.gs30,
    },
    disabled: {
      color: newPalette.gs20,
      background: newPalette.gs10,
      border: newPalette.gs10,
    },
  },
  primary: {
    default: {
      color: newPalette.maxLight,
      background: newPalette.primary,
      border: newPalette.primary,
    },
    hover: {
      color: newPalette.maxLight,
      background: newPalette.primaryLight,
      border: newPalette.primary,
    },
    active: {
      color: newPalette.maxLight,
      background: newPalette.primary,
      border: newPalette.primaryDark,
    },
    disabled: {
      color: newPalette.gs20,
      background: newPalette.primaryLightest,
      border: newPalette.primaryLightest,
    },
  },
  success: {
    default: {
      color: newPalette.maxLight,
      background: newPalette.success,
      border: newPalette.success,
    },
    hover: {
      color: newPalette.maxLight,
      background: newPalette.successLight,
      border: newPalette.success,
    },
    active: {
      color: newPalette.maxLight,
      background: newPalette.success,
      border: newPalette.successDark,
    },
    disabled: {
      color: newPalette.gs30,
      background: newPalette.successLightest,
      border: newPalette.successLightest,
    },
  },
  warning: {
    default: {
      color: newPalette.maxLight,
      background: newPalette.warning,
      border: newPalette.warning,
    },
    hover: {
      color: newPalette.maxLight,
      background: newPalette.warningLight,
      border: newPalette.warning,
    },
    active: {
      color: newPalette.maxLight,
      background: newPalette.warning,
      border: newPalette.warningDark,
    },
    disabled: {
      color: newPalette.gs30,
      background: newPalette.warningLightest,
      border: newPalette.warningLightest,
    },
  },
  danger: {
    default: {
      color: newPalette.maxLight,
      background: newPalette.danger,
      border: newPalette.danger,
    },
    hover: {
      color: newPalette.maxLight,
      background: newPalette.dangerLight,
      border: newPalette.danger,
    },
    active: {
      color: newPalette.maxLight,
      background: newPalette.danger,
      border: newPalette.dangerDark,
    },
    disabled: {
      color: newPalette.gs20,
      background: newPalette.dangerLightest,
      border: newPalette.dangerLightest,
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
