import React, {useState} from 'react'
import { Box, Flex, Input,Textarea, Image, Button  } from '@chakra-ui/react'
import Class from '../Assets/Images/Class.svg'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';

const CreateClass = () => {
  const [data, setData] = useState();  // to get data from input tags
  const token = localStorage.getItem("token");
  const handleChange = (e) => {  // this function will create an object to send to server using Axios
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data)
  }; 
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  const onSubmit = async()=>{
    let response;
    try {
       response = await axios({
        method: "POST",
        url: `/teacher/createClass`,
        data:data,
        headers: {
          'Authorization': token
        }
      });
      console.log(response)
      enqueueSnackbar(response.data.message, { variant: 'success' });
      navigate(`/teacher/profile`)
    } catch (error) {
      enqueueSnackbar("Failed To Create Class", { variant: 'error' });
      console.log(error)
    }
  }
  
  return (
    <>
    <Box>
        <Flex direction={"column"} justify={"center"} align={"center"}>
            <Flex mt={"6%"} justify={"center"} direction={"column"} mx={"5rem"} w={"50%"}>
                <Input mb={"2rem"} onChange={(e)=>handleChange(e)} name="title" placeholder='Enter Title of Class' ></Input>
                <Textarea mb={"1rem"} onChange={(e)=>handleChange(e)} name="description"  placeholder='Enter Description for Class'></Textarea>
            </Flex>
            <Flex w={"50%"} justify={"center"} >
                <Image  w={"60%"} src={Class}></Image>
            </Flex>
            <Button onClick={()=>onSubmit()} mt={"4rem"} colorScheme={"teal"} w={"30%"} mx={4} >Create Class</Button>
        </Flex>
    </Box>
    </>
  )
}

export default CreateClass
