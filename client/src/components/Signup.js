import React, {useState} from 'react'
import {
  Box, Flex, Heading, Input, Button, useColorModeValue,
   InputGroup,  InputRightElement} from '@chakra-ui/react'
import { EmailIcon, UnlockIcon, InfoIcon, PhoneIcon,ViewIcon,ViewOffIcon} from '@chakra-ui/icons'
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

const Signup = () => {
  const [isTeacher,setTeacher] = useState(false);
  if(window.location.href[22]=='t' && isTeacher==false) setTeacher(true)
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const pageBackground = useColorModeValue("blue.100", "gray.600");
  
  const navigate = useNavigate();

  const [signUp, setSignup] = useState();
  const handleChange = (e) => {
    setSignup({
      ...signUp,
      [e.target.name]: e.target.value,
    });
    console.log(signUp)
  };

  const userSignup = async () => {
    const user = isTeacher?'teacher':'student'
    try {
      const response = await axios({
        method: "POST",
        url: `/${user}/signup`,
        data:signUp
      });
      console.log(response);
      window.alert(response.data)
      navigate(`/${user}/login`)
    } catch (error) {
      window.alert("Try Again!")
      console.log(error);
    }
  };


  return (
    <Flex background={pageBackground} direction="column" height="100vh" alignItems='center' justifyContent='center'>
      <Flex width="70vh" direction="column" background={formBackground} p={10} rounded={6}>
        <Heading mb={6}>Sign Up</Heading>

        <Flex alignItems='center'>
          <InfoIcon />
          <Input name='name' onChange={(e)=>handleChange(e)} ml={5} mb={3} placeholder="Enter Name" type="text" />
        </Flex>

        <Flex alignItems='center'>
          <PhoneIcon />
          <Input name='phone' onChange={(e)=>handleChange(e)} ml={5} mb={3} type='tel' placeholder='Phone number' />
        </Flex>

        <Flex alignItems='center'  >
          <EmailIcon />
          <Input name='email' onChange={(e)=>handleChange(e)} ml={5} mb={3} placeholder="Enter Email ID" varient="filled" type="email" />
        </Flex>

        <Flex alignItems='center'>
          <UnlockIcon />
          <InputGroup size='md'>
            <Input ml={5} mb={5}
            name='password' onChange={(e)=>handleChange(e)}
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

        <Flex alignItems='center'>
          <UnlockIcon />
          <InputGroup size='md'>
            <Input ml={5} mb={5}
            name='cpassword' onChange={(e)=>handleChange(e)}
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

        <Button onClick={userSignup} mb={6} colorScheme='teal'>SignUp</Button>    

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