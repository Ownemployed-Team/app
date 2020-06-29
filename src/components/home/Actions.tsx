import React from "react";
import Link from "next/link";
import { Flex, Box, Image } from "rebass";
import Text from "components/common/Text";

export const Actions = () => {
  const actions = [
    {
      body: "Find projects that are right for you and need your help.",
      image: "/imgs/illustrations/actions_find_projects.svg",
      title: "Find projects",
      url: "/projects",
    },

    {
      body: "Find people with the skills your project needs.",
      image: "/imgs/illustrations/actions_find_people.svg",
      title: "Find people",
      url: "/members",
    },

    {
      body: "Share ideas and collaborate with other like-minded people.",
      image: "/imgs/illustrations/actions_comunity.svg",
      title: "Community",
      url: "https://ownemployed.tribe.so/",
    },
  ];

  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "column", "row"],
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        height: ["392px", "392px", "392px", "140px"],
      }}
    >
      {actions.map(({ body, image, title, url }, index) => {
        return (
          <Box
            key={index}
            sx={{
              height: ["120px", "120px", "120px", "140px"],
              width: ["100%", "100%", "100%", "30%"],
              background: "#FFFFFF",
              boxShadow: `0px 2px 4px rgba(92, 92, 92, 0.25)`,
            }}
          >
            <Flex
              sx={{
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "90%",
                  width: "90%",
                }}
              >
                <Flex
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {url.startsWith("http") ? (
                    <Box
                      sx={{
                        width: "40%",
                        height: "100%",
                      }}
                    >
                      <a href={url} style={{ cursor: "pointer",}}>
                        <Image
                          sx={{
                            width: "80%",
                            height: "100%",
                          }}
                          src={image}
                        />
                      </a>
                    </Box>
                  ) : (
                    <Link href={url}>
                      <Box
                        sx={{
                          width: "40%",
                          height: "100%",
                        }}
                      >
                        <Image
                          sx={{
                            width: "80%",
                            height: "100%",
                          }}
                          src={image}
                        />
                      </Box>
                    </Link>
                  )}

                  <Box
                    sx={{
                      width: "60%",
                      height: "100%",
                    }}
                  >
                    <Flex
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="flex-start"
                    >
                      <Text
                        sx={{
                          fontFamily: "heading",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontsize: ["h3", "h4"],
                          lineHeight: ["24px", "24px", "24px", "32px"],
                          color: "#000000",
                        }}
                      >
                        {title}
                      </Text>

                      <Text
                        sx={{
                          fontFamily: "body",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontsize: "body",
                          lineHeight: "18px",
                          color: "#768598",
                        }}
                      >
                        {body}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};
