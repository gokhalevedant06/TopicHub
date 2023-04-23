import React from 'react'
import { Box, Flex, Input,Textarea, Image, Button  } from '@chakra-ui/react'
import jgmodal from '../Assets/Images/jgModal.svg'
import axios from '../axios'
import { useState } from 'react'

const JoinGroup = () => {
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
          url: `/student/joinGroup`,
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
                  <Input mb={"2rem"} onChange={(e)=>handleChange(e)} name="groupID" placeholder='Enter the Group ID provided by your Group Leader' ></Input>
              </Flex>
              <Flex w={"50%"} justify={"center"} >
                  <Image  w={"60%"} src={jgmodal}></Image>
              </Flex>
              <Button onClick={()=>onSubmit()} mt={"4rem"} colorScheme={"teal"} w={"10%"} mx={4} >Join Class</Button>
          </Flex>
      </Box>
      </>
    )
  }

export default JoinGroup
