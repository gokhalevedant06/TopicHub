import React, {useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import { Image, Flex, Text, Button, Box} from '@chakra-ui/react'
import NoData from '../Assets/Images/NoData.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';
const TeacherClassSection = () => {
  const { user } = useSelector((state) => state?.user);
  const [classData,setClassData] = useState();
  const token = localStorage.getItem("token");
  const getClassData = async()=>{
    try {
      const response = await axios({
        method: "GET",
        url: `/teacher/getClasss`,
        headers: {
          'Authorization': token
        }
      });
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getClassData();
    console.log("USER",user)
  }, [])
  
  return (
    <>
    {
        user.MyClass?<>
        <Flex justify={"center"}>
          <Box>
          <Text mt={"5rem"} >Class Details</Text>
          </Box>
        </Flex>
          <Box>
          <Flex wrap={"wrap"} justify={"center"} height={"250px"} w={"80%"}>
    <Box width={"300px"}>Image</Box>
    <Box>
        <Text>Class ID: </Text>
        <Text>Title:</Text>
        <Text>Description: </Text>
    </Box>
</Flex>
          </Box>
          <Flex justify={"center"} wrap={"wrap"}>
            <Box>
              <Button m={"1rem"} w={"200px"}>View Joined Students</Button>
              <Button m={"1rem"} w={"200px"}>Show All Teachers</Button>
              <Button m={"1rem"} w={"200px"} >View All Groups</Button>
              <Button m={"1rem"} w={"200px"}>View All Subjects</Button>
            </Box>
            <Box>
              <Button m={"1rem"} w={"200px"}>Remove Students </Button>
              <Button m={"1rem"} w={"200px"}>Add Teachers</Button>
              <Button m={"1rem"} w={"200px"} >Remove Groups</Button>
              <Button m={"1rem"} w={"200px"}>Remove Teachers</Button>
            </Box>
          </Flex>
        </>:<>
        <Flex direction={"column"} justify={"center"} align={"center"} >
        <Image my={"3rem"} src={NoData} w={"25%"} ></Image>
        <Text  my={"2rem"} fontSize="1.5rem">You havent made any classes yet.  Make a class and start teaching !</Text>
        <Link to="/teacher/createClass">
              <Button
                m={"2rem"}
                height={"3rem"}
                fontSize={"1.2rem"}
                fontWeight={"bold"}
                colorScheme={"teal"}
              >
                Create A Class
              </Button>
            </Link>
        </Flex>
        </>
    }
    </>
  )
}

export default TeacherClassSection