import React from "react";
import { Box, Flex } from "rebass";
//import Link from 'components/Link'
import Link from "next/link";

import Text from "components/common/Text";

export const Footer = ({ ...props }) => {
  return (
    <Flex
      sx={{
        bg: "white",
        minHeight: "136px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "body",
        width: "100%",
        padding: ["10px 0", "10px 0", "10px 0", 0],
      }}
      {...props}
    >
      <Box
        sx={{
          height: ["80%", "90%", "90%", "100%"],
          width: "90%",
        }}
      >
        <Flex
          sx={{
            flexDirection: ["column", "column", "column", "row"],
            justifyContent: "space-between",
            alignItems: ["flex-start", "flex-start", "flex-start", "center"],
          }}
        >
          <Box>
            <Text>Ownemployed</Text>
            <Link href="/about">
              <a>About</a>
            </Link>
          </Box>
          <Box>
            <Text>Terms of use</Text>
            <Link href="/legal/terms-of-use">
              <a>Terms of Use</a>
            </Link>
          </Box>
          <Box>
            <Text>Privacy policy</Text>
            <Link href="/legal/privacy-policy">
              <a>Privacy policy</a>
            </Link>
          </Box>
          <Box>
            <Text>Contact</Text>
            <Text sx={{ color: "muted" }}>
              <a href="mailto:ownemployed@gmail.com" />
              ownemployed@gmail.com
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
