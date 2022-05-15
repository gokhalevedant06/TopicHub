import React, {useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import { Image, Flex, Text, Button} from '@chakra-ui/react'
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
        user.MyClass?<>{user.MyClass}</>:<>
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