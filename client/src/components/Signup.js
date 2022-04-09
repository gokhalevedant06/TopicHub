import React from 'react'
import {
  Box, Flex, Heading, Input, Button, useColorModeValue,
   InputGroup,  InputRightElement} from '@chakra-ui/react'
import { EmailIcon, UnlockIcon, InfoIcon, PhoneIcon,ViewIcon,ViewOffIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const pageBackground = useColorModeValue("blue.100", "gray.600");
  return (
    <Flex background={pageBackground} direction="column" height="100vh" alignItems='center' justifyContent='center'>
      <Flex width="70vh" direction="column" background={formBackground} p={10} rounded={6}>
        <Heading mb={6}>Sign Up</Heading>

        <Flex alignItems='center'>
          <InfoIcon />
          <Input ml={5} mb={3} placeholder="Enter Name" type="text" />
        </Flex>

        <Flex alignItems='center'>
          <PhoneIcon />
          <Input ml={5} mb={3} type='tel' placeholder='Phone number' />
        </Flex>

        <Flex alignItems='center'  >
          <EmailIcon />
          <Input ml={5} mb={3} placeholder="Enter Email ID" varient="filled" type="email" />
        </Flex>

        <Flex alignItems='center'>
          <UnlockIcon />
          <InputGroup size='md'>
            <Input ml={5} mb={5}
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? <ViewOffIcon/> : <ViewIcon/>}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Button mb={6} colorScheme='teal'>Sign up</Button>    

        <Box textAlign={"center"}>
            <Link to="/student/Login" colorScheme={"teal"}>
            Already a User ? Login
            </Link>
        </Box>
      </Flex>

    </Flex>
  )
}


export default Signup