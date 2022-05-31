import React from 'react'
import { Box, Flex, Input,Textarea, Image, Button  } from '@chakra-ui/react'
import Class from '../Assets/Images/Class.svg'
import axios from 'axios'
import joinClass from '../Assets/Images/joinClass.jpg'
import { useState } from 'react'

const JoinClass = () => {
    const [data, setData] = useState();
    const token = localStorage.getItem("token");
    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
      console.log(data)
    }; 
  
    const onSubmit = async()=>{
      try {
        const response = await axios({
          method: "POST",
          url: `/teacher/createClass`,
          data:data,
          headers: {
            'Authorization': token
          }
        });
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    return (
      <>
      <Box>
          <Flex direction={"column"} justify={"center"} align={"center"}>
              <Flex mt={"6%"} justify={"center"} direction={"column"} mx={"5rem"} w={"30%"}>
                  <Input mb={"2rem"} onChange={(e)=>handleChange(e)} name="title" placeholder='Enter the Class Code provided by your Teacher' ></Input>
              </Flex>
              <Flex w={"50%"} justify={"center"} >
                  <Image  w={"60%"} src={Class}></Image>
              </Flex>
              <Button onClick={()=>onSubmit()} mt={"4rem"} colorScheme={"teal"} w={"10%"} mx={4} >Join Class</Button>
          </Flex>
      </Box>
      </>
    )
  }

export default JoinClass