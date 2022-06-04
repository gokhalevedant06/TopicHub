import React from 'react'
import '../App.css'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';
import {Flex, Box, Text, Button, Image, Input} from '@chakra-ui/react'
import dp from '../Assets/Images/profilePic.jpg';
const StudentProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex wrap={'wrap'} justifyContent={'center'} flexDirection={'row'}>
      <Flex  wrap={"wrap"} alignItems={'center'} justifyContent={"start"} mt="7rem"  backgroundColor={"#9999ff"} 
      height={"50px"} w={"90%"} >
      <Text fontSize={"30px"} textColor={'#FFFFFF'} ml = {"5rem"} fontFamily={'Roboto'}>My Profile</Text>
        </Flex>
      <Flex  wrap={"wrap"} alignItems={'center'} justifyContent={"start"} mt="3rem"  backgroundColor={"#9999ff"} 
      height={"300px"} w={"90%"} >
      <Box width={"300px"} ml="10%" >
        <Image 
        boxSize='200px'
        objectFit={'cover'}
        src={dp} 
        // width={"300px"}  
        alt={"dp"}
        borderRadius={"full"}
        onClick={()=>alert("Update Image")}
        >
          
        </Image>
        {/* <Button m={"1rem"} w={"200px"} fontSize='xs'>My Class</Button> */}
      </Box>
      <Box width={"300px"} margin="10px" >
        <Text padding={"2px"}> <b>Name:</b> Adwait Gharpure</Text>
        <Text padding={"2px"}><b>Email:</b> adwait.gharpure20@vit.edu</Text>  
        <Text padding={"2px"}><b>Phone:</b> 9545831983</Text>
        <Text padding={"2px"}><b>Branch: </b> Artificial Intelligence and Data Science</Text>
        
      </Box>
        <Box width={"300px"} margin="10px" >
        <Text padding={"2px"}><b>PRN No:</b>12010440</Text>
        <Text padding={"2px"}><b>Roll No:</b> 36</Text>  
        <Text padding={"2px"}><b>Division: </b>AI-A</Text>
      
      </Box>
  </Flex>
      <Flex>
    
        <Flex flexDirection={"column"} align="center" width={"80%"}>
          <Box>
        <Button onClick={()=>navigate('/student/classSection')} m={"1rem"} w={"200px"} fontSize='xl'>My Class</Button>
          </Box>
        </Flex>
      </Flex>
  </Flex>
  <Input type={"file"} hidden/>
    
    </>
  )
}

export default StudentProfile
