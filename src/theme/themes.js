import { css } from "styled-components";

const withOpacity = (hex, opacity) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const defaultTheme = {
  color: {
    primary: withOpacity("#f77f00", 0.4),
    secondary: withOpacity("#003049", 0.4),
    success: withOpacity("#28a745", 0.4),
    info: withOpacity("#17a2b8", 0.4),
    warning: withOpacity("#FFCE00", 0.2),
    danger: withOpacity("#FF0000", 0.4),
    light: withOpacity("#f8f9fa", 0.4),
    dark: withOpacity("#343a40", 0.4),
  },
  // same colors but with no opacity
  text: {
    primary: "#f77f00",
    secondary: "#003049",
    success: "#28a745",
    info: "#17a2b8",
    warning: "#FFCE00",
    danger: "#FF0000",
    light: "#f8f9fa",
    dark: "#343a40",
  },
  font: {
    primary: "Arial, sans-serif",
    secondary: "Roboto, sans-serif",
  },
  padding: {
    xs: "5px",
    sm: "10px",
    md: "15px",
    lg: "20px",
    xl: "25px",
  },
  size: {
    sm: css`
      padding: 0.6rem 0.6rem;
      font-size: 12px;
    `,
    md: css`
      padding: 0.7rem 0.7rem;
      font-size: 14px;
    `,
    lg: css`
      padding: 0.8rem 0.8rem;
      font-size: 16px;
    `,
  },
  border: {
    width: "1px",
    style: "solid",
  },
  shadow: {
    small: "2px 2px 5px #000000",
    medium: "4px 4px 10px #000000",
    large: "6px 6px 15px #000000",
  },
};

defaultTheme.margin = { ...defaultTheme.padding };
defaultTheme.border.radius = { ...defaultTheme.padding };
defaultTheme.border.color = { ...defaultTheme.text };

//inverted theme
const invertedTheme = {
  color: {
    primary: defaultTheme.text.primary,
    secondary: defaultTheme.text.secondary,
    success: defaultTheme.text.success,
    info: defaultTheme.text.info,
    warning: defaultTheme.text.warning,
    danger: defaultTheme.text.danger,
    light: defaultTheme.text.light,
    dark: defaultTheme.text.dark,
    disabled: {
      primary: withOpacity("#f77f00", 0.6),
      secondary: withOpacity("#003049", 0.6),
      success: withOpacity("#28a745", 0.6),
      info: withOpacity("#17a2b8", 0.6),
      warning: withOpacity("#FFCE00", 0.6),
      danger: withOpacity("#FF0000", 0.6),
      light: withOpacity("#f8f9fa", 0.6),
      dark: withOpacity("#343a40", 0.6),
    },
  },
  text: {
    primary: defaultTheme.text.light,
    secondary: defaultTheme.text.light,
    success: defaultTheme.text.light,
    info: defaultTheme.text.light,
    warning: defaultTheme.text.light,
    danger: defaultTheme.text.light,
    light: defaultTheme.text.light,
    dark: defaultTheme.text.light,
  },
  font: {
    primary: defaultTheme.font.primary,
    secondary: defaultTheme.font.secondary,
  },
  padding: { ...defaultTheme.padding },
  border: { ...defaultTheme.border },
  size: { ...defaultTheme.size },
  shadow: { ...defaultTheme.shadow },
};

invertedTheme.margin = { ...invertedTheme.padding };
invertedTheme.border.radius = { ...invertedTheme.padding };
invertedTheme.border.color = { ...invertedTheme.text };

export { defaultTheme, invertedTheme };