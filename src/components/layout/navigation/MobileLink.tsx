import React from 'react';
import { Link } from 'components/common/Link';
import { Flex, Box } from 'rebass';

export function MobileLink({
  title,
  href,
  subtext,
}: {
  title: string;
  href: string;
  subtext?: string;
}) {
  return (
    <Link href={href}>
      <Flex flexDirection="column" p={3} color="white">
        <Box>
          <strong>{title}</strong>
        </Box>
        {subtext && <Box color="secondaryGrey">{subtext}</Box>}
      </Flex>
    </Link>
  );
}