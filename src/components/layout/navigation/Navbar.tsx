import React from "react";
import { Box } from "rebass";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";

export default function Navbar() {
  return (
    <>
      <Box display={["initial", "none"]}>
        <MobileNavbar />
      </Box>
      <Box display={["none", "initial"]}>
        <DesktopNavbar />
      </Box>
    </>
  );
}
