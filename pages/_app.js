import "../styles/globals.css";
import { store } from "./../store/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";

export default function App({ Component, pageProps }) {
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
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    );
  }
}
