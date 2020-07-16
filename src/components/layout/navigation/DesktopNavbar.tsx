import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "emotion";
import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Box, Button } from "rebass";
import { FaChevronDown } from "react-icons/fa";

import Link from "components/common/Link";
import { Brand } from "./Brand";
import { PAGE_MAPPINGS } from "./pageMappings";

const links = css`
  a {
    margin: 0 0.5em;
  }
`;

function DesktopLink({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href}>
      <Box p={2}>{title}</Box>
    </Link>
  );
}

const ProfileMenu = ({ logoutHandler }) => {
  const [show, setShow] = useState(false);
  let clearId: () => void = () => {};

  useEffect(() => {
    clearId = () => {
      window.localStorage.removeItem("user_id");
    };
  }, []);

  return (
    <>
      <Box
        display="inline-block"
        sx={{ position: "relative" }}
        onClick={() => {
          setShow(!show);
        }}
      >
        <Link onClick={() => setShow(!show)}>
          Your account <FaChevronDown />
        </Link>
        {show && (
          <Flex
            flexDirection="column"
            sx={{
              position: "absolute",
              backgroundColor: "white",
              width: "10rem",
              boxShadow: "0px 4px 8px rgba(92, 92, 92, 0.25)",
              left: "-3rem",
            }}
            p={2}
          >
            <DesktopLink
              href={PAGE_MAPPINGS.profile.href}
              title={PAGE_MAPPINGS.profile.title}
            />
            <DesktopLink
              title={PAGE_MAPPINGS.yourProjects.title}
              href={PAGE_MAPPINGS.yourProjects.href}
            />
            <DesktopLink
              title={PAGE_MAPPINGS.createProject.title}
              href={PAGE_MAPPINGS.createProject.href}
            />

            <Button
              onClick={() => {
                clearId();

                logoutHandler({
                  returnTo: "http://localhost:3000/",
                });
              }}
            >
              Sign Out
            </Button>
          </Flex>
        )}
      </Box>{" "}
    </>
  );
};

export function DesktopNavbar() {
  const { pathname, query } = useRouter();
  const {
    isLoading,
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <Flex className={links} px={5} py={2} bg="white" alignItems="center">
      <Brand />
      <Box mx="auto" />
      <Link href={PAGE_MAPPINGS.joinProject.href}>{PAGE_MAPPINGS.joinProject.title}</Link>
      <Link href={PAGE_MAPPINGS.findMembers.href}>{PAGE_MAPPINGS.findMembers.title}</Link>
      <Link href={PAGE_MAPPINGS.learn.href}>{PAGE_MAPPINGS.learn.title}</Link>
      <a href={PAGE_MAPPINGS.community.href}>{PAGE_MAPPINGS.community.title}</a>
      {!isLoading &&
        (isAuthenticated ? (
          <ProfileMenu logoutHandler={logout} />
        ) : (
          <Button
            onClick={() => {
              loginWithRedirect({
                appState: {
                  returnTo: {
                    pathname,
                    query,
                  },
                },
              });
            }}
          >
            Sign In
          </Button>
        ))}
    </Flex>
  );
}
