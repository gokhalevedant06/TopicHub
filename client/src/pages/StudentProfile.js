import React from 'react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';
import {Flex, Box, Text, Button, Image} from '@chakra-ui/react'
import dp from '../Assets/Images/profilePic.jpg';
const StudentProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex wrap={'wrap'} justifyContent={'center'} >
<Flex  wrap={"wrap"} alignItems={'center'} justifyContent={"start"} mt="7rem"  backgroundColor={"#9999ff"} 
height={"250px"} w={"80%"} >
    <Box width={"300px"} ml="10%" >
      <Image 
      boxSize='200px'
      objectFit={'cover'}
      src={dp} 
      // width={"300px"}  
      alt={"dp"}
      borderRadius={"full"}>
      
      </Image>
    </Box>
    <Box width={"300px"} margin="10px" >
        <Text padding={"2px"}>Name: </Text>
        <Text padding={"2px"}>Email: </Text>  
        <Text padding={"2px"}>Phone: </Text>
        <Text padding={"2px"}></Text>
        
    </Box>
    <Box >
    <Text padding={"2px"}>PRN No:</Text>
    <Text padding={"2px"}>Roll No: </Text>  
    <Text padding={"2px"}>Division: </Text>
    
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
              {/* <Box>
                Image
              </Box> */}
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
