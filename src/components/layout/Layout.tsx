import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Flex, Box } from "rebass";
import CookieConsent from "react-cookie-consent";

<<<<<<< HEAD
import Navbar from 'components/layout/Navbar'
import Footer from 'components/layout/Footer'
import { useEffect } from 'react'
=======
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
>>>>>>> Adjusted Layout

type Props = {
  children?: ReactNode;
  title?: string;
  boxed?: boolean;
};

const Main = ({ children, boxed }) => {
<<<<<<< HEAD
    return (
        <Box
            py={3}
            sx={{
                flex: 1,
                px: boxed ? [4, 4, 5] : 0,
                fontFamily: 'body',
            }}
        >
            <main>{children}</main>
        </Box>
    )
}

const Layout = ({ children, boxed = true, title = 'Ownemployed' }: Props) => {
    return (
        <Flex
            flexDirection="column"
            px={0}
            py={0}
            sx={{
                minHeight: '100vh',
            }}
        >
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="stylesheet" href="/reset.css" />
            </Head>
            <header>
                <Navbar />
            </header>
            <Main boxed={boxed}>{children}</Main>
            <CookieConsent
                acceptOnScroll={true}
                buttonStyle={{}}
                buttonText="Agree"
                cookieName="ownemployed-cookie-accepted"
                enableDeclineButton
                contentStyle={{ flex: 'none' }}
                location="bottom"
                style={{ justifyContent: 'center', background: '#124780' }}
            >
                By continuing you agree to our terms of service. Read our
                Privacy Policy{' '}
                <Link href="/legal">
                    <a>here</a>
                </Link>
            </CookieConsent>
            <Footer />
        </Flex>
    )
}
=======
  return (
    <Box
      sx={{
        fontFamily: "body",
        width: "100%",
      }}
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {children}
      </main>
    </Box>
  );
};

const Layout = ({ children, boxed = true, title = "Ownemployed" }: Props) => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    sx={{
      width: "100%",
      minHeight: "100vh",
    }}
  >
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <Main boxed={boxed}>{children}</Main>
    <CookieConsent
      acceptOnScroll={true}
      buttonStyle={{}}
      buttonText="Agree"
      cookieName="ownemployed-cookie-accepted"
      enableDeclineButton
      contentStyle={{ flex: "none" }}
      location="bottom"
      style={{ justifyContent: "center", background: "#124780" }}
    >
      By continuing you agree to our terms of service. Read our Privacy Policy{" "}
      <Link href="/legal">
        <a>here</a>
      </Link>
    </CookieConsent>
    <Footer />
  </Flex>
);
>>>>>>> Adjusted Layout

export default Layout;
