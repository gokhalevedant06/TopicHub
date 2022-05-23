import React from 'react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';
import {Flex, Box, Text, Button} from '@chakra-ui/react'
const StudentProfile = () => {
  const navigate = useNavigate();
  return (
    <>
    <Flex>
<Flex  wrap={"wrap"} justify={"center"} mt="7rem" height={"250px"} w={"80%"}>
    <Box width={"300px"}>Image</Box>
    <Box>
        <Text>Name:</Text>
        <Text>Email: </Text>
        <Text>Phone: </Text>
    </Box>
</Flex>
    </Flex>
    <Box width={"70%"} marginLeft="auto" marginRight={"auto"}>

            <Text textAlign={"center"}>
              Class Details
            </Text>
            <Box marginLeft={"5rem"}>
              <Text>
                Title: 
              </Text>
              <Text>
                Description: 
              </Text>
            </Box>
            <Flex>
              <Box>
                Image
              </Box>
              <Flex flexDirection={"column"} align="center" width={"80%"}>
                <Box>
              <Button onClick={()=>navigate('/student/classSection')} m={"1rem"} w={"200px"} >My Class</Button>
              {/* <Button m={"1rem"} w={"200px"} >My Teachers </Button> */}

                </Box>
                <Box>

                </Box>
              </Flex>
            </Flex>
    </Box>
    </>
  )
}

export default StudentProfile
