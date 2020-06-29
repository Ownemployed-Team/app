import React from "react";
import { Flex, Box, Image } from "rebass";
import Text from "components/common/Text";

export const Initiative = () => {
  return (
    <Flex
      sx={{
        width: ["90%", "90%", "90%", "80%"],
        height: ["335px", "335px", "335px", "283px"],
        justifycontent: "center",
        alignItems: "center",
        marginBottom: ['56px', '56px', '56px',"100px"]
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Flex
          sx={{
            height: "100%",
            width: "100%",
            justifycontent: "center",
            alignItems: "center",
            flexDirection: [
              "column-reverse",
              "column-reverse",
              "column-reverse",
              "row",
            ],
          }}
        >
          <Box
            sx={{
              height: ["50%", "50%", "50%", "100%"],
              width: ["100%", "100%", "100%", "50%"],
            }}
          >
            <Image
              sx={{
                height: "100%",
                width: "100%",
                display: "block",
              }}
              src="/imgs/illustrations/social.svg"
            />
          </Box>
          <Box
            sx={{
              height: ["50%", "50%", "50%", "100%"],
              width: ["100%", "100%", "100%", "50%"],
            }}
          >
            <Flex
              sx={{
                flexDirection: "column",
              }}
            >
              <Text
                sx={{
                  fontFamily: "heading",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: ["h4", "h4", "h3", "h2"],
                  lineHeight: ["24px", "32px", "36px"],
                  color: "#000000",
                  width: "100%",
                }}
              >
                A COVID-19 Initiative
              </Text>
              <Text
                sx={{
                  fontFamily: "body",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: ["body", "body", "h4", "h3"],
                  lineHeight: ["18px", "24px", "32px"],
                  color: "#768598",
                  width: "100%",
                }}
              >
                We know this is a difficult time.We want to help you start
                something new and take control of your career.
              </Text>
              <Text
                sx={{
                  fontFamily: "body",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: ["body", "body", "h4", "h3"],
                  lineHeight: ["18px", "24px", "32px"],
                  color: "#768598",
                  width: "100%",
                }}
              >
                We believe the economy of the future will be driven by you.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
