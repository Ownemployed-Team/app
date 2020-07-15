import React from "react";
import Link from "next/link";
import { Flex, Box, Text, Image } from "rebass";
import Button from "components/common/Button";

export const Hero = () => {
  return (
    <>
      <Flex
        sx={{
          backgroundColor: "#FFFFFF",
          width: "80%",
          height: ["244px", "244px", "244px", "346px"],
          marginBottom: ["24px", "24px", "24px", "32px"],
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "85%",
            width: "90%",
            backgroundColor: "#red",
          }}
        >
          <Flex
            sx={{
              height: "100%",
              flexDirections: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: ["100%", "100%", "100%", "60%"],
                textAlign: ["center", "center", "center", "left"],
              }}
            >
              <Flex
                sx={{
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: [
                    "center",
                    "center",
                    "center",
                    "space-around",
                  ],
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Flex
                    sx={{
                      justifyContent: [
                        "center",
                        "center",
                        "center",
                        "flex-start",
                      ],
                      alignItems: "center",
                    }}
                  >
                    <Text
                      sx={{
                        fontFamily: "heading",
                        fontStyle: "normal",
                        fontWeight: "semibold",
                        fontSize: ["16px", "16px", "16px", "h2"],
                        lineHeight: ["20px", "20px", "20px", "36px"],
                        color: "baseBlack",
                      }}
                    >
                      Take control of your career
                    </Text>
                  </Flex>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Flex
                    sx={{
                      justifyContent: [
                        "center",
                        "center",
                        "center",
                        "flex-start",
                      ],
                      alignItems: "center",
                    }}
                  >
                    <Text
                      sx={{
                        fontFamily: "heading",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        lineHeight: ["36px", "36px", "36px", "66px"],
                        fontSize: ["h2", "h2", "h2", "44px"],
                      }}
                    >
                      Be{" "}
                      <span
                        style={{
                          textDecoration: "underline",
                          textDecorationColor: "#6F63AD",
                        }}
                      >
                        Own
                      </span>
                      employed!
                    </Text>
                  </Flex>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Flex
                    sx={{
                      justifyContent: [
                        "center",
                        "center",
                        "center",
                        "flex-start",
                      ],
                      alignItems: "center",
                    }}
                  >
                    <Text
                      sx={{
                        fontFamily: "body",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: ["body", "body", "body", "h3"],
                        lineHeight: ["18px", "18px", "18px", "32px"],
                        color: "#768598",
                      }}
                    >
                      Find cofounders, projects, resources, and a supportive
                      community that will help you make your idea into a
                      business.
                    </Text>
                  </Flex>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Flex
                    sx={{
                      justifyContent: [
                        "center",
                        "center",
                        "center",
                        "flex-start",
                      ],
                      alignItems: "center",
                    }}
                  >
                    <Link href="/projects">
                      <Button
                        sx={{
                          marginTop: "24px",
                          height: ["42px", "42px", "42px", "56px"],
                          width: ["205px", "205px", "205px", "318px"],
                          boxShadow: [
                            "box-shadow: 0px 3px 6px rgba(92, 92, 92, 0.25)",
                            "box-shadow: 0px 3px 6px rgba(92, 92, 92, 0.25)",
                            "box-shadow: 0px 3px 6px rgba(92, 92, 92, 0.25)",
                            "",
                          ],
                          borderRadius: "4px",
                        }}
                      >
                        <Text
                          sx={{
                            fontFamily: "body",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: ["body", "body", "body", "h3"],
                            lineHeight: ["18px", "18px", "18px", "32px"],
                            color: "baseWhite",
                            width:"100%"
                          }}
                        >
                          Create a Free Account
                        </Text>
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <Box
              sx={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: ["none", "none", "none", "block"],
                width: "40%",
                height: "100%",
              }}
            >
              <Flex
                sx={{
                  height: "100%",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Image
                  sx={{
                    display: ["none", "none", "none", "block"],
                    height: "242px",
                    width: "85%",
                  }}
                  src="/imgs/illustrations/homepage-ideas.svg"
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
