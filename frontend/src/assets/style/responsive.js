const sizes = {
  iphone: "376px",
  lgPhone: "637px",
  ipad: "769px",
  desktop: "1025px",
};

export const devices = {
  iphone: `(max-width: ${sizes.iphone})`,
  lgPhone: `(max-width: ${sizes.lgPhone})`,
  ipad: `(max-width: ${sizes.ipad})`,
  desktop: `(max-width: ${sizes.desktop})`,
};
