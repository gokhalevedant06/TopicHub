import React from 'react'
import {
  Box, Flex, Heading, Input, Button, useColorMode, useColorModeValue,
   Link, InputGroup,  InputRightElement} from '@chakra-ui/react'
import { EmailIcon, UnlockIcon, InfoIcon, PhoneIcon,SunIcon,MoonIcon,ViewIcon,ViewOffIcon} from '@chakra-ui/icons'

const Signup = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const { colorMode, toggleColorMode } = useColorMode();
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

        <Button mb={6} colorScheme='teal'>Sign in</Button>

        <Button w={10} colorScheme='red' onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon/> : <SunIcon />}</Button>
        
      </Flex>

      <Box>
        Already Signed Up?{" "}
        <Link color="teal.500" href="http://localhost:3000/teacher/Login">
          Login
        </Link>
      </Box>

    </Flex>
  )
}


export default Signup