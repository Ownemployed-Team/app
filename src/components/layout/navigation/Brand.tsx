import React from "react";
import Link from "components/common/Link";
import { Image } from "rebass";

export function Brand() {
  return (
    <Link href="/">
      <Image alt="logo" src="/ownemployed_logo.png" width="245px" />
    </Link>
  );
}
