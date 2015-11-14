export const types = {
  big: 'big',
  mini: 'mini',
  normal: 'normal',
};

export const sizeMaps = {
  [types.mini]: {
    height: 16,
    width: 16,
    viewBox: null,
    strokeWidth: 1.5,
  },
  [types.normal]: {
    height: 35,
    width: 47,
    viewBox: null,
    strokeWidth: 2,
  },
  [types.big]: {
    height: 70,
    width: 94,
    viewBox: '0 0 47 35',
    strokeWidth: 2,
  },
};

export default {
  types,
  sizeMaps,
};
