import { MantineTheme } from "@mantine/core";


export const MantineLightTheme = {
    scale: 1,
    fontSmoothing: true,
    focusRing: "auto",
    colorScheme: 'light',
    white: "#fff",
    black: "#000",
    colors: {"dark": [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414"
    ],
    "gray": [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529"
    ]
  },
  primaryShade: {
    light: 6,
    dark: 8
  },
    fontFamily: CSSProperties['fontFamily'];
    lineHeight: CSSProperties['lineHeight'];
    transitionTimingFunction: CSSProperties['transitionTimingFunction'];
    fontFamilyMonospace: CSSProperties['fontFamily'];
    primaryColor: string;
  
    fontSizes: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
    radius: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
    spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
    shadows: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
  
    "headings": {
      "fontFamily": "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      "fontWeight": "700",
      "textWrap": "wrap",
      "sizes": {
        "h1": {
          "fontSize": "calc(2.125rem * var(--mantine-scale))",
          "lineHeight": "1.3"
        },
        "h2": {
          "fontSize": "calc(1.625rem * var(--mantine-scale))",
          "lineHeight": "1.35"
        },
        "h3": {
          "fontSize": "calc(1.375rem * var(--mantine-scale))",
          "lineHeight": "1.4"
        },
        "h4": {
          "fontSize": "calc(1.125rem * var(--mantine-scale))",
          "lineHeight": "1.45"
        },
        "h5": {
          "fontSize": "calc(1rem * var(--mantine-scale))",
          "lineHeight": "1.5"
        },
        "h6": {
          "fontSize": "calc(0.875rem * var(--mantine-scale))",
          "lineHeight": "1.5"
        }
      }
    },
  
}