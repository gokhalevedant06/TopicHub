import React, {useEffect, useState} from 'react'
import '../App.css'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';
import {Flex, Box, Text, Button, Image, Input} from '@chakra-ui/react'
import dp from '../Assets/Images/dp.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import axios from "axios";
const StudentProfile = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const studentData = useSelector(selectUser);
  const [classData, setClassData] = useState();
  const getClassData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/student/getClass`,
        headers: {
          Authorization: token,
        },
      });
      setClassData(response.data.classDetails);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Flex direction={'column'}>
    <Box borderRadius={60} zIndex={1} m={20} bg='rgba(0,0,0,0)'>
        <Text ml={500} text={'center'}  fontWeight={"bold"} fontSize={"2.1rem"} >My Profile</Text >
        <Flex mt={"2rem"} ml = {"10rem"} mr = {'2rem'} mb = {'2rem'}>
              <Box width={"500px"} mr = {'2rem'}>
                <Image src={dp} height={"200px"}></Image>
              </Box>
          <Flex flexDirection={"column"}  width={"80%"}>
      <Box width={"300px"} margin="10px" ml = {'2rem'}>
        <Text padding={"2px"} fontSize={"1.3rem"} fontWeight={'medium'}> Name: {studentData.name}</Text>
        <Text padding={"2px"} fontSize={"1.3rem"} fontWeight={'medium'}>Email: {studentData.email} </Text>  
        <Text padding={"2px"} fontSize={"1.3rem"} fontWeight={'medium'}>Phone No: {studentData.phone} </Text>
      </Box>
      <Box>
      <Button m={"1rem"} w={"200px"} width = {'80%'} colorScheme={'purple'} onClick={()=>navigate('/student/classSection')}>My Class</Button>
      </Box>
       
    </Flex>
        </Flex>
    </Box>
    </Flex>
  
    </>
  )
}

export default StudentProfile
