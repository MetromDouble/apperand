export type ButtonTypes = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'clean';
export type ButtonSizes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'wide';
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
type ButtonSizesIndex = {
  [index in ButtonSizes]: {
    height: string;
    paddingHorizontal: string;
    fontSize: string;
  }
}

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

export const sizeMap: ButtonSizesIndex = {
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

export const btnColorMap: ButtonTypesIndex = {
  default: {
    default: {
      color: palette.asphalt,
      background: palette.wetPaper,
      border: palette.steel,
    },
    hover: {
      color: palette.wetAsphalt,
      background: palette.wetPaper,
      border: palette.steel,
    },
    active: {
      color: palette.wetAsphalt,
      background: palette.steel,
      border: palette.iron,
    },
    disabled: {
      color: palette.iron,
      background: palette.wetPaper,
      border: palette.wetPaper,
    },
  },
  primary: {
    default: {
      color: palette.maxLight,
      background: palette.primaryStrong,
      border: palette.primaryStrong,
    },
    hover: {
      color: palette.maxLight,
      background: palette.primary,
      border: palette.primary,
    },
    active: {
      color: palette.maxLight,
      background: palette.primaryWeak,
      border: palette.primary,
    },
    disabled: {
      color: palette.iron,
      background: palette.primaryWeak,
      border: palette.primaryWeak,
    },
  },
  success: {
    default: {
      color: palette.maxLight,
      background: palette.successStrong,
      border: palette.successStrong,
    },
    hover: {
      color: palette.maxLight,
      background: palette.success,
      border: palette.success,
    },
    active: {
      color: palette.maxLight,
      background: palette.successWeak,
      border: palette.success,
    },
    disabled: {
      color: palette.iron,
      background: palette.successWeak,
      border: palette.successWeak,
    },
  },
  warning: {
    default: {
      color: palette.maxLight,
      background: palette.warningStrong,
      border: palette.warningStrong,
    },
    hover: {
      color: palette.maxLight,
      background: palette.warning,
      border: palette.warning,
    },
    active: {
      color: palette.maxLight,
      background: palette.warningWeak,
      border: palette.warning,
    },
    disabled: {
      color: palette.iron,
      background: palette.warningWeak,
      border: palette.warningWeak,
    },
  },
  danger: {
    default: {
      color: palette.maxLight,
      background: palette.dangerStrong,
      border: palette.dangerStrong,
    },
    hover: {
      color: palette.maxLight,
      background: palette.danger,
      border: palette.danger,
    },
    active: {
      color: palette.maxLight,
      background: palette.dangerWeak,
      border: palette.danger,
    },
    disabled: {
      color: palette.steel,
      background: palette.dangerWeak,
      border: palette.dangerWeak,
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
