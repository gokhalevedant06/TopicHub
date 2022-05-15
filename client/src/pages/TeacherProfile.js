import React from 'react'
import {Flex, Box, Text, Button} from '@chakra-ui/react'
const TeacherProfile = () => {
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
              <Button m={"1rem"} w={"200px"} >View Joined Students</Button>
              <Button m={"1rem"} w={"200px"} >View Subjects </Button>

                </Box>
                <Box>

              <Button m={"1rem"} w={"200px"} >View Groups</Button>
              <Button m={"1rem"} w={"200px"} >View Teachers </Button>
                </Box>
              </Flex>
            </Flex>
    </Box>
    </>
  )
}

export default TeacherProfile
