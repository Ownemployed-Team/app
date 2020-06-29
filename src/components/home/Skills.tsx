import React from "react";
import { Flex, Box, Image } from "rebass";
import Text from "components/common/Text";

export const Skills = () => {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "column", "row"],
        width: "75%",
        height: ['252px', '252px', '252px', '250px'],
        marginTop: ["48px", "48px", "48px", "100px"],
        marginBottom: ["40px", "40px", "40px", "80px"],
      }}
    >
      <Box
        sx={{
          width: ["100%", "100%", "100%", "50%"],
          height: ['50%', '50%', '50%','100%'],
        }}
      >
        <Flex 
        sx={{ 
          flexDirection: "column",
          justifyContent:'center',
          alignItems:'center',
          height:'100%'
          }}>
          <Text
            sx={{
              fontFamily: "heading",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: ["h4", "h4", "h4", "h2"],
              lineHeight: ["24px", "24px", "24px", "36px"],
              textAlign: ["center", "center", "center", "left"],
              color: "#000000",
            }}
          >
            Be your own boss and do the things you love.
          </Text>

          <Text
            sx={{
              fontFamily: "body",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: ["body", "body", "body", "h3"],
              lineHeight: ["18px", "24px", "32px"],
              textAlign: ["center", "center", "center", "left"],
              color: "#768598",
            }}
          >
            With our help and suport you can turn ideas into projects and start
            something new.
          </Text>
        </Flex>
      </Box>

      <Box 
        sx={{
          height: ['50%', '50%', '50%', '100%'],
          width: ["100%", "100%", "100%", "50%"],
        }}
      >
        <Flex
        sx={{
            height:'100%',
            width:'100%',
            flexDirection: ['column', 'column', 'column',],
            justifyContent: ["center", "center", "center","flex-end"],
            alignItems:['center']
      }}
        >
          <Image
            sx={{
              width: "80%",
              height: '100%',
              align: 'right'
            }}
            src="/imgs/illustrations/board.svg"
          />
        </Flex>
      </Box>
    </Flex>
  );
};
