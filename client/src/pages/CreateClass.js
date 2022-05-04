import React from 'react'
import { Box, Flex, Input,Textarea, Image, Button  } from '@chakra-ui/react'
import Class from '../Assets/Images/Class.svg'
const CreateClass = () => {
  return (
    <>
    <Box>
        <Flex direction={"column"} justify={"center"} align={"center"}>
            <Flex mt={"6%"} justify={"center"} direction={"column"} mx={"5rem"} w={"50%"}>
                <Input mb={"2rem"} placeholder='Enter Title of Class' ></Input>
                <Textarea mb={"1rem"}  placeholder='Enter Description for Class'></Textarea>
            </Flex>
            <Flex w={"50%"} justify={"center"} >
                <Image  w={"60%"} src={Class}></Image>
            </Flex>
            <Button mt={"4rem"} colorScheme={"teal"} w={"30%"} mx={4} >Create Class</Button>
        </Flex>
    </Box>
    </>
  )
}

export default CreateClass