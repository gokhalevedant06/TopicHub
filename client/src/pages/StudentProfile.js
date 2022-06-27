import React, {useEffect, useState} from 'react'
import '../App.css'
import { MoonIcon, SunIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';
import NoData from "../Assets/Images/NoData.svg";
import {Flex, Box, Text, Button, Image, Input, useDisclosure, Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,} from '@chakra-ui/react'
import dp from '../Assets/Images/dp.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import StudentClassImage from '../Assets/Images/student_class.svg';
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
const StudentProfile = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const studentData = useSelector(selectUser);
  const { user } = useSelector((state) => state?.user);
  const student = useSelector(selectUser);
  const { email, groupDetails, joinedClassID, name, phone, _id } = user;
  const [classData, setClassData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: group,
    onOpen: onOpenGroup,
    onClose: onCloseGroup,
  } = useDisclosure();
  const {
    isOpen: member,
    onOpen: onOpenMembers,
    onClose: onCloseMembers,
  } = useDisclosure();
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
    console.log(classData);
  }, []);
  
  
  return (
    <>
    <Flex justify={"center"} flexDirection={"column"}>
          <Text textAlign={"center"} mt={'2.5rem'} fontSize={"2.1rem"} fontWeight={'bold'}>Personal Details</Text>
        <Flex  ml={"auto"} wrap={"wrap"} mt="3rem" height={"250px"} w={"80%"}>
          <Box width={"500px"}>
            <Image src={dp} height={"200px"}></Image>
          </Box>
          <Box>
            <Text fontSize={"1.3rem"} fontWeight={'medium'} >Name: {studentData.name}</Text>
            <Text fontSize={"1.3rem"} fontWeight={'medium'} >Email: {studentData.email}</Text>
            <Text fontSize={"1.3rem"} fontWeight={'medium'} >Phone: {studentData.phone} </Text>
          </Box>
        </Flex>
      </Flex>
      <Box>
      </Box>
    <Box width={"70%"} marginLeft="auto" marginRight={"auto"}>
    {student.joinedClassID ?(
    <Flex justify = {"center"} flexDirection="column">  
      <Text textAlign={"center"} fontSize={"2.1rem"} fontWeight={'bold'}>Class Details</Text >
      <Box borderRadius={60} ml = {'2rem'} zIndex={1}  bg='rgba(0,0,0,0)'>
        <Flex direction={'row'}>
              <Box width={"500px"} >
                <Image src={StudentClassImage} height={"350px"}></Image>
              </Box>
              <Flex flexDirection={"column"}  width={"80%"}>
            <Box mt={'3rem'} height={'100px'} ml={'5rem'}>
            {/* <Text fontSize={"1.3rem"} fontWeight={'medium'} >ID: {classData?._id} </Text> */}
              <Text fontSize={"1.3rem"} fontWeight={'medium'}>ID: {classData?._id}</Text>
              <Text fontSize={"1.3rem"} fontWeight={'medium'} >Title: {classData?.title} </Text>
              <Text fontSize={"1.3rem"} fontWeight={'medium'}>Description: {classData?.description}</Text>
            </Box>
          <Box ml={'2rem'} >
            <Button m={"1rem"} w={"200px"}  colorScheme={"purple"} onClick={()=>navigate('/student/subjectSection')} width = {'80%'} ><Text align='center' >My Subjects</Text></Button>
            <Button m={"1rem"} w={"200px"}  colorScheme={"yellow"} onClick={()=>navigate('/student/groupSection')} width = {'80%'} ><Text  align='center' >My Group</Text></Button>
            <Button onClick={onOpenGroup} colorScheme={'red'} m={"1rem"} w={"200px"}>
                    View Groups
                  </Button>
                  <Modal size={"4xl"} isOpen={group} onClose={onCloseGroup}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>List of Groups In Class </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <TableContainer>
                          <Table variant="simple">
                            <Thead>
                              <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Leader</Th>
                                <Th> Member List</Th>
                               
                              </Tr>
                            </Thead>
                            <Tbody>
                              {classData?.groups.map((group) => {
                                return (
                                  <Tr>
                                    <Td>{group._id}</Td>
                                    <Td>{group.name}</Td>
                                    <Td>{group?.groupLeader}</Td>
                                    <Td>
                                      <Button
                                        size={"sm"}
                                        onClick={onOpenMembers}
                                        colorScheme={"teal"}
                                      >
                                        Show Members
                                      </Button>
                                    </Td>
                                    
                                  </Tr>
                                );
                              })}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          colorScheme="blue"
                          mr={3}
                          onClick={onCloseGroup}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal> 
                  <Modal isOpen={member} size={"3xl"} onClose={onCloseMembers}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Group Members</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <TableContainer>
                          <Table variant="simple">
                            <Thead>
                              <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Phone</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {classData?.groups.map((grp) => {
                                return (
                                  <>
                                    {grp?.members?.map((member) => { 
                                      return (
                                        <Tr>
                                          <Td>{member?._id}</Td>
                                          <Td>{member?.name}</Td>
                                          <Td>{member?.phone}</Td>
                                        </Tr>
                                      );
                                    })}
                                  </>
                                );
                              })}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          colorScheme="blue"
                          mr={3}
                          onClick={onCloseMembers}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal> 
                  <Button onClick={onOpen} colorScheme={"green"} m={"1rem"} w={"200px"}>
                    View Joined Students
                  </Button>
                  <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>List of Students In Class </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <TableContainer>
                          <Table variant="simple">
                            <Thead>
                              <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Phone</Th>
                                <Th> Group Number</Th>
                              
                              </Tr>
                            </Thead>
                            <Tbody>
                              {classData?.studentsJoined?.map((student) => {
                                return (
                                  <>
                                    <Tr key={student._id}>
                                      <Td>{student._id}</Td>
                                      <Td>{student.name}</Td>
                                      <Td>{student.phone}</Td>
                                      {student?.groupDetails?.groupID?.name ? (
                                        <>
                                          <Td>
                                            {
                                              student?.groupDetails?.groupID
                                                ?.name
                                            }
                                          </Td>
                                        </>
                                      ) : (
                                        <>
                                          <Td textColor={"red"}>Not Joined</Td>
                                        </>
                                      )}
                                    </Tr>
                                  </>
                                );
                              })}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </ModalBody>
                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>        
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
    
    </Box>
    {/* </Flex> */}
    </>
  )
}

export default StudentProfile
