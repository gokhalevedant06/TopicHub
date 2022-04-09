import React from 'react'
import {
  Box, Flex, Heading, Input, Button, useColorMode, useColorModeValue, Checkbox,
   Link, InputGroup,  InputRightElement, 
} from '@chakra-ui/react'
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from "react";

const Login = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const { colorMode, toggleColorMode } = useColorMode();
  const [showPassword, setShowPassword] = useState(false);
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const pageBackground = useColorModeValue("blue.100", "gray.600");
  return (

    <Flex background={pageBackground} direction="column" height="100vh" alignItems='center' justifyContent='center'>
      <Flex width="70vh" direction="column" background={formBackground} p={10} rounded={6}>
        <Heading mb={6}> LOGIN</Heading>

        {/* Email Input */}
        <Flex alignItems='center'  >
          <EmailIcon />
          <Input ml={5} placeholder="Enter Email ID" varient="filled" mb={3} type="email" />
        </Flex>

        <Flex alignItems='center'>
          <UnlockIcon />
          <InputGroup size='md'>
            {/* Password Input */}
            <Input ml={5} mb={5}
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Link href='https://chakra-ui.com' textAlign="right">forgot password?</Link>

        <Checkbox defaultChecked mb={5}>Remember my credentials.</Checkbox>

        <Button mb={6} colorScheme='teal'>Sign in</Button>

        
      </Flex>

      <Box>
        New to us?{" "}
        <Link color="teal.500" href="http://localhost:3000/teacher/Signup">
          Sign Up
        </Link>
      </Box>

    </Flex>
  )
}


export default Login