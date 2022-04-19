import React from "react";
import { Box, Stack, Flex, Spacer, Text, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const TeacherProfile = () => {
  const { user } = useSelector((state) => state?.user);
  const { email, name, phone, _id } = user;
  console.log("USER", user);
  return (
    <Flex justifyContent={"center"}>
      <Box w="70%" h="90vh" bg="gray.100" mt="10" rounded={"3xl"}>
        <Box p={6} mt="50">
          <Stack spacing={2} align={"center"} mb={5}>
            <Text fontSize={"4xl"} fontWeight={500} fontFamily={"body"}>
              Welcome!
            </Text>
            <Spacer />
            <Text fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {name}
            </Text>

            {/* <Text color={"gray.500"}>{joinedClassID.title}</Text> */}
            <Text color={"gray.500"}>{email}</Text>
          </Stack>
    
        </Box>
      </Box>
    </Flex>
  );
};

export default TeacherProfile;
