import React from 'react'
import { useState, useEffect } from 'react';
import NoData from "../Assets/Images/NoData.svg";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {
  Flex,
  useDisclosure,
  Spacer,
  Box,
  FormControl,
  Drawer,DrawerOverlay,DrawerContent,DrawerBody,DrawerHeader,
  Input,
  Text,
  Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,
  Button,
  Image,
  Menu,MenuItem,MenuList,MenuButton} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { AddIcon, HamburgerIcon, InfoIcon,ChevronDownIcon } from '@chakra-ui/icons'
import StudentClassImage from '../Assets/Images/student_class.svg';

const StudentClassSection = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state?.user);
  const student = useSelector(selectUser);
  const { email, groupDetails, joinedClassID, name, phone, _id } = user;
  const { isOpen , onOpen, onClose } = useDisclosure();
  const token = localStorage.getItem("token");
  const [classData, setClassData] = useState();
  // const { isOpen: isEditOpen , onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
  // const { isOpen: isDeleteOpen , onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  // const studentData = useSelector(selectUser);

  const getClassData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/student/getClassData`,
        headers: {
          Authorization: token,
        },
      });
      console.log(classData);
      setClassData(response.data.classData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClassData()
    console.log(classData)
  }, []);
  
  return (
    <>
    {student.joinedClassID ?(
    <Flex direction="column">  
      <Box borderRadius={60} zIndex={1} m={20} bg='rgba(0,0,0,0)'>
        <Text ml={'35%'} text={'center'}  fontWeight={"bold"} fontSize={"2.1rem"} >Class Details</Text >
        <Flex mt={"2rem"} ml = {"10rem"} direction={'row'}>
              <Box width={"500px"} >
                <Image src={StudentClassImage} height={"400px"}></Image>
              </Box>
              <Flex flexDirection={"column"}  width={"80%"}>
            <Box mt={'4rem'} height={'200px'} ml={'5rem'}>
            <Text fontSize={"1.3rem"} fontWeight={'medium'} >ID: {classData?._id} </Text>
              <Text fontSize={"1.3rem"} fontWeight={'medium'} >Title: {classData?.title} </Text>
              <Text fontSize={"1.3rem"} fontWeight={'medium'}>Description: {classData?.description}</Text>
            </Box>
          <Box ml={'3rem'}>
      <Button m={"1rem"} w={"200px"}  colorScheme={"purple"} onClick={()=>navigate('/student/subjectSection')} width = {'80%'} ><Text fontSize='xl' align='center' >My Subjects</Text></Button>
      <Button m={"1rem"} w={"200px"}  colorScheme={"yellow"} onClick={()=>navigate('/student/groupSection')} width = {'80%'} ><Text fontSize='xl' align='center' >My Group</Text></Button>
      </Box>
          </Flex>
          </Flex>
        </Box>
      <Flex direction={"row"} justify="center" width={"100%"} wrap = {'wrap'}>
      </Flex>
      </Flex>
   
    ):(
      <>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Image my={"3rem"} src={NoData} w={"25%"}></Image>
            <Text my={"2rem"} fontSize="1.5rem">
              You haven't joined any classes yet. Join a class and start Learning!
            </Text>
            <Link to="/student/joinClass">
              <Button
                m={"2rem"}
                height={"3rem"}
                fontSize={"1.2rem"}
                fontWeight={"bold"}
                colorScheme={"teal"}
              >
                Join A Class
              </Button>
            </Link>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>dfhhf</ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
    )}
    </>
  );
};

export default StudentClassSection