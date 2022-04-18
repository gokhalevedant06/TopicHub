import React from "react";
import { Flex, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Flex w="100%" direction={"column"}>
      <Image
        src={"LandingPage.png"}
        w={"100%"}
        h={"100vh"}
        position={"absolute"}
        top={"0"}
        left={"0"}
      ></Image>

      <Flex>
        <Flex
          width={"40%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
        >
          <Text zIndex={1} fontSize={"5rem"} color={"white"} fontWeight={"700"}>
            TopicHub
          </Text>
          <Flex>
            <Link to="/student/Login">
              <Button
                m={"2rem"}
                height={"3rem"}
                fontSize={"1.2rem"}
                fontWeight={"bold"}
                colorScheme={"red"}
              >
                Login as Student
              </Button>
            </Link>
            <Link to="/teacher/Login">
              <Button
                m={"2rem"}
                height={"3rem"}
                fontSize={"1.2rem"}
                fontWeight={"bold"}
                colorScheme={"red"}
              >
                Login as Teacher
              </Button>
            </Link>
          </Flex>
        </Flex>

        <Flex
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
        >
          <Image src={"LandingImage2.svg"} w={"70%"} zIndex={1}></Image>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Landing;
