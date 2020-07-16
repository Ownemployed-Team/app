import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Button, Box } from "rebass";
import { BsList } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { Brand } from "./Brand";
import { MobileLink } from "./MobileLink";
import { PAGE_MAPPINGS } from "./pageMappings";

export function MobileNavbar() {
  const [show, setShow] = useState(false);

  const { pathname, query } = useRouter();
  const {
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <Flex
      color="black"
      alignItems={["strech", "center"]}
      bg="#fff"
      flexDirection={["column", "row"]}
      justifyContent="space-around"
      id="navigation-header"
      width="100%"
    >
      <Flex
        pl={[0, 5]}
        pr={[0, 5]}
        flexDirection={["row", "column"]}
        justifyContent="space-around"
      >
        <Brand />
        <Button
          variant="nav"
          onClick={() => setShow(!show)}
          sx={{
            backgroundColor: "transparent",
            color: "black",
            alignSelf: "flex-end",
            fontSize: "2rem",
          }}
        >
          <BsList />
        </Button>
      </Flex>

      {show && (
        <Box
          id="navigation--items"
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "primaryDark",
            width: "80%",
            boxShadow: "0px 3px 6px rgba(92, 92, 92, 0.25)",
            borderRadius: "4px",
          }}
        >
          <Flex flexDirection="column">
            <Flex justifyContent="space-around" pt={1}>
              <Flex p={2} sx={{ width: "100%" }}>
                {!isLoading && !isAuthenticated && (
                  <Flex sx={{ width: "100%" }} justifyContent="space-between">
                    <Box alignSelf="flex-start">
                      <Button
                        variant="secondaryOutlined"
                        sx={{ backgroundColor: "primaryDark" }}
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
                    </Box>
                    <Box alignSelf="flex-end">
                      <Button
                        variant="outline"
                        sx={{ backgroundColor: "transparent", paddingTop: "2" }}
                        onClick={() => setShow(false)}
                      >
                        <FaTimes />
                      </Button>
                    </Box>
                  </Flex>
                )}

                {isAuthenticated && (
                  <>
                    <Flex flexDirection="column">
                      <Flex justifyContent="space-around">
                        <Button
                          variant="secondaryOutlined"
                          sx={{ backgroundColor: "primaryDark" }}
                          onClick={() => logout()}
                        >
                          Sign out
                        </Button>
                        <Button
                          variant="secondaryOutlined"
                          sx={{
                            backgroundColor: "primaryDark",
                            color: "white",
                          }}
                        >
                          <a
                            href={PAGE_MAPPINGS.createProject.href}
                            style={{ color: "white" }}
                          >
                            {PAGE_MAPPINGS.createProject.title}
                          </a>
                        </Button>
                        <Box alignSelf="flex-end">
                          <Button
                            variant="outline"
                            sx={{
                              backgroundColor: "transparent",
                              paddingTop: "2",
                            }}
                            onClick={() => setShow(false)}
                          >
                            <FaTimes />
                          </Button>
                        </Box>
                      </Flex>
                      <MobileLink
                        title={PAGE_MAPPINGS.yourProjects.title}
                        subtext={PAGE_MAPPINGS.yourProjects.subtext}
                        href={PAGE_MAPPINGS.yourProjects.href}
                      />
                      <MobileLink
                        title={PAGE_MAPPINGS.profile.title}
                        subtext={PAGE_MAPPINGS.profile.subtext}
                        href={PAGE_MAPPINGS.profile.href}
                      />
                    </Flex>
                  </>
                )}
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              sx={{ backgroundColor: "primaryLight" }}
            >
              <MobileLink
                title={PAGE_MAPPINGS.joinProject.title}
                subtext={PAGE_MAPPINGS.joinProject.subtext}
                href={PAGE_MAPPINGS.joinProject.href}
              />
              <MobileLink
                title={PAGE_MAPPINGS.findMembers.title}
                subtext={PAGE_MAPPINGS.findMembers.subtext}
                href={PAGE_MAPPINGS.findMembers.href}
              />
              <MobileLink
                title={PAGE_MAPPINGS.learn.title}
                href={PAGE_MAPPINGS.learn.href}
              />
              <MobileLink
                title={PAGE_MAPPINGS.community.title}
                href={PAGE_MAPPINGS.community.href}
              />
            </Flex>
          </Flex>
        </Box>
      )}
    </Flex>
  );
}
