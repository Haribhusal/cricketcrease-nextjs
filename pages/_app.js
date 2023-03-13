import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";

import { store } from "./../store/store";
import { Provider } from "react-redux";
import { NextUIProvider, createTheme, Theme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

import Layout from "../components/Layout";
export default function App({ Component, pageProps }) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const darkMode = useDarkMode(false);

  const fonts = {
    sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
  };

  const sharedTheme = {
    theme: {
      fonts,
    },
  };

  const lightTheme = createTheme({
    ...sharedTheme,
    type: "light",
  });

  const darkTheme = createTheme({
    ...sharedTheme,
    type: "dark",
    theme: {
      colors: {},
    },
  });

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <NextThemesProvider
          defaultTheme={darkTheme}
          attribute="class"
          // themes={darkTheme}
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NextUIProvider>
        </NextThemesProvider>
      </Provider>
    );
  }
}
