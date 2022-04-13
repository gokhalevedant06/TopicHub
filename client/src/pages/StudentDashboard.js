import React, { useState } from "react";
import {
  Box,
  Stack,
  Flex,
  Spacer,
  Text,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const StudentDashboard = () => {
  const { user } = useSelector((state) => state?.user)
  const { email, groupDetails, joinedClassID, name, phone, _id } = user;
  console.log("USER",user)
  return (
      <>
       <Flex >
          <Box w="20%" h="90vh" bg="gray.100" ml="250" mt="10" rounded={"3xl"}>
            <Box p={6} mt="50">
              <Stack spacing={2} align={"center"} mb={5}>
                <Text fontSize={"4xl"} fontWeight={500} fontFamily={"body"}>
                  Welcome!
                </Text>
                <Spacer />
                <Text fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  {name}
                </Text>
    
                <Text color={"gray.500"}>{joinedClassID.title}</Text>
                <Text color={"gray.500"}>{email}</Text>
              </Stack>
              <Button size="lg" colorScheme="orange" ml="50" rounded={"full"}>
                My Account
              </Button>
            </Box>
          </Box>
          <Spacer />
    
          <Box
            w="20%"
            h="90vh"
            bg={"lightgoldenrodyellow"}
            mr={"100"}
            mt="10"
            rounded={"3xl"}
          >
            <Box p={10}>
              <Stack spacing={6} align={"center"} mb={5}>
                <Text
                  fontSize={"4xl"}
                  fontWeight={500}
                  fontFamily={"body"}
                  align="center"
                >
                  Student Dashboard
                </Text>
                <Stack spacing={6} direction="column" align={"initial"}>
                  <Button
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                    colorScheme="teal"
                  >
                    Join Class
                  </Button>
                  <Button
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                    colorScheme="teal"
                  >
                    Class and Subject Information
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Spacer />
    
          <Box
            w="20%"
            h="90vh"
            bg={"linkedin.100"}
            mt="10"
            mr={"100"}
            rounded={"3xl"}
            ml="-100"
          >
            <Box p={10}>
              <Stack spacing={6} align={"center"} mb={5}>
                <Text
                  fontSize={"4xl"}
                  fontWeight={500}
                  fontFamily={"body"}
                  align="center"
                >
                  Group Activites
                </Text>
                <Stack spacing={6} direction="column" align={"initial"}>
                  <Button
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                    colorScheme="telegram"
                  >
                    View Student List
                  </Button>
                  <Button
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                    colorScheme="telegram"
                  >
                    Create a group
                  </Button>
                  <Button
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                    colorScheme="telegram"
                  >
                    Join a group
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Flex>
    </>
    )
  
};

export default StudentDashboard;
