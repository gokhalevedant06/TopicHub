import React from 'react'
import { useSelector } from "react-redux";
import { Image, Flex, Text, Button} from '@chakra-ui/react'
import NoData from '../Assets/Images/NoData.svg'
import { Link } from 'react-router-dom';
const TeacherClassSection = () => {
  const { user } = useSelector((state) => state?.user);
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
                Login as Teacher
              </Button>
            </Link>
        </Flex>
        </>
    }
    </>
  )
}

export default TeacherClassSection