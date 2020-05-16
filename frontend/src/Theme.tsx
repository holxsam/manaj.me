import React from "react";

// state management:
import { useRecoilValue } from "recoil";
import { themeState } from "./recoil/ThemeState";

// custom components:
import App from "./App";

// styling:
import { Global, css } from "@emotion/core";
import { ThemeProvider, useTheme } from "emotion-theming";

export interface Font {
  size: String;
  family: String;
  weight: String;
}

export interface Theme {
  colors: {
    primary: String;
    secondary: String;

    background: String;
    surface: String;

    onPrimary: String;
    onSecondary: String;

    error: String;
  };
  font: Font;
  breakpoints?: {
    xs: String;
    x: String;
    m: String;
    l: String;
    xl: String;
  };
}

const baseFont: Font = {
  size: "14px",
  family: "Fira Code, sans-serif",
  weight: "normal",
};

const themeDark: Theme = {
  colors: {
    primary: "#afb9f1",
    secondary: "#e87b9b",

    background: "#373e4d",
    surface: "#444c60",

    onPrimary: "black",
    onSecondary: "white",

    error: "red",
  },
  font: baseFont,
};

const themeLight: Theme = {
  colors: {
    primary: "#e87b9b",
    secondary: "#afb9f1",

    background: "#e5e5e5",
    surface: "white",

    onPrimary: "black",
    onSecondary: "black",

    error: "red",
  },
  font: baseFont,
};

const GlobalReset = () => {
  const theme: any = useTheme();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;

          font-family: ${theme.font.family};
          font-size: ${theme.font.size};
          font-weight: ${theme.font.weight};
          color: ${theme.colors.onPrimary};
        }

        html,
        body,
        #root {
          width: 100vw;
          height: 100vh;
        }

        a,
        a:link,
        a:visited,
        a:hover,
        a:active {
          cursor: pointer;
          text-decoration: none;
          color: ${theme.colors.primary};
        }

        ul,
        ol {
          list-style-type: none;
        }

        button {
          border: 0;
          cursor: pointer;
        }

        button:active,
        button:focus {
          outline: 0;
          /* outline: 1px solid red; */
        }
      `}
    />
  );
};

const ThemedApp = () => {
  const darkTheme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
      <GlobalReset />
      <App />
    </ThemeProvider>
  );
};

export default ThemedApp;
