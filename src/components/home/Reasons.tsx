import React from "react";
import { Flex, Box, Image } from "rebass";
import Text from "components/common/Text";

export const Reasons = () => {
  const reasons = [
    {
      title: "New starts in difficult times",
      icon: "/imgs/icons/idea.svg",
      body:
        "Instagram, Whatsapp, Uber, Pintrest, Slack, Groupon, and Venmo were all founded during the 2008 global recession.",
    },

    {
      title: "Fewer jobs for more people",
      icon: "/imgs/icons/bars.svg",
      body:
        "There are fewer jobs, and more people want them. Being your own boss means you can choose your work.",
    },

    {
      title: "The world is changing",
      icon: "/imgs/icons/conn.svg",
      body:
        "The world is changing, and the way people work is changing. Taking control of your career and starting something new can prepare you for this change.",
    },
  ];

  return (
    <Flex
      sx={{
        backgroundImage: 'url("/imgs/sectionbg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: ['40px', '40px', '40px','90px'],
        height: ["769px", "769px", "769px", "560px"],
      }}
    >
      <Box
        sx={{
          height: ["70%"],
          width: "80%",

        }}
      >
        <Flex
          sx={{
            flexDirection: ["column", "column", "column", "row"],
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          {reasons.map((reason, index) => {
            return (
              <Box
                key={index}
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Flex
                  sx={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "100%",
                    padding: '5px'
                  }}
                >
                  <Box
                    sx={{
                      height: "30%",
                    }}
                  >
                    <Image
                      sx={{
                        height:'100%',
                        width: "100%",
                        display:'block'
                      }}
                      src={reason.icon}
                    />
                  </Box>
                  <Text
                    sx={{
                      fontFamily: "heading",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: ["h4", "h4", "h3"],
                      lineHeight: ["24px", "24px", "32px"],
                      color: "#000000",
                      textAlign: "center",
                      width: "100%",
                      margin:0
                    }}
                  >
                    {reason.title}
                  </Text>
                  <Text
                    sx={{
                      fontFamily: "body",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: ["body", "body", "h4"],
                      lineHeight: ["18px", "24px"],
                      color: "#768598",
                      width: "100%",
                      margin:0
                    }}
                  >
                    {reason.body}
                  </Text>
                </Flex>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};
