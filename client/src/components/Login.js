import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
  Checkbox,
  InputGroup,
  Text,
  InputRightElement,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser,isLoggedIn } from "../Redux/userSlice";



const Login = () => {
  const [isTeacher,setTeacher] = useState(false);
  if(window.location.href[22]=='t' && isTeacher==false) setTeacher(true)
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();
  const [showPassword, setShowPassword] = useState(false);
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const pageBackground = useColorModeValue("blue.100", "gray.600");
  const user = useSelector(isLoggedIn);

  const navigate = useNavigate();

  const [login, setLogin] = useState();
  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
    console.log(login)
  };

  const dispatch = useDispatch();
  

  const userLogin = async () => {
    const user = isTeacher?'teacher':'student'
    try {
      const response = await axios({
        method: "POST",
        url: `/${user}/login`,
        data:login
      });
      console.log("response",response);
      dispatch(loginUser({
        user:response.data.userLogin,
      }))
      // if(user==='student'){
      //   localStorage.setItem("studentToken", response.data.token)
      // }else{
      //   localStorage.setItem("teacherToken", response.data.token)
      // }
        localStorage.setItem("token", response.data.token)
      window.alert(response.data.message)
      navigate(`/${user}/Profile`)
    } catch (error) {
      window.alert("Try Again!")
      console.log(error);
    }
  };

  return (
    <Flex
      background={pageBackground}
      direction="column"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        width="70vh"
        direction="column"
        background={formBackground}
        p={10}
        rounded={6}
      >
        <Heading mb={6}> LOGIN</Heading>

        {/* Email Input */}
        <Flex alignItems="center">
          <EmailIcon />
          <Input
            ml={5}
            placeholder="Enter Email ID"
            varient="filled"
            mb={3}
            type="email"
            name='email'
            onChange={(e)=>handleChange(e)}
          />
        </Flex>

        <Flex alignItems="center">
          <UnlockIcon />
          <InputGroup size="md">
            {/* Password Input */}
            <Input
              ml={5}
              mb={5}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              name='password' 
              onChange={(e)=>handleChange(e)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Checkbox defaultChecked mb={5}>
          Remember my credentials.
        </Checkbox>

        <Button onClick={userLogin} mb={6} colorScheme="teal">
          Sign in
        </Button>

        <Box textAlign={"center"}>
            <Link to="/teacher/Signup" colorScheme={"teal"}>
            Dont have an Account ? Signup
            </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;

