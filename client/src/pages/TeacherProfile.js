import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CloseIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import TeacherProfileImage from "../Assets/Images/TeacherProfile.svg";
import ProfilePhoto from "../Assets/Images/ProfilePhoto.svg";

const TeacherProfile = () => {
  const token = localStorage.getItem("token");
  const [classData, setClassData] = useState();
  const [studentData, setClassStudentData] = useState();
  const teacherData = useSelector(selectUser);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [membersData,setMembers] = useState()

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
  const {
    isOpen: allTeachers,
    onOpen: onOpenAllTeachers,
    onClose: onCloseAllTeachers,
  } = useDisclosure();
  const {
    isOpen: subject,
    onOpen: onOpenSubject,
    onClose: onCloseSubject,
  } = useDisclosure();

  const getClassData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/teacher/getClass`,
        headers: {
          Authorization: token,
        },
      });
      setClassData(response.data.classDetails);
    } catch (error) {
      console.log(error);
    }
  };
  const getClassStudentData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/teacher/getAllStudentsInClass`,
        headers: {
          Authorization: token,
        },
      });
      setClassStudentData(response.data.studentsJoined);
    } catch (error) {
      console.log(error);
    }
  };

  const setGroupMembers=async(groupID)=>{
    const gp = classData.groups.find(g=>g._id ==groupID)
    console.log(gp,"GSHFHF")
    setMembers(gp.members);
    onOpenMembers()
}

  useEffect(() => {
    getClassData();
    getClassStudentData();
  }, []);

  return (
    <>
      <Flex justify={"center"} flexDirection={"column"}>
          <Text textAlign={"center"} mt={'3rem'} fontSize={"2.1rem"} fontWeight={'bold'}>Personal Details</Text>
        <Flex  ml={"auto"} wrap={"wrap"} mt="3rem" height={"250px"} w={"80%"}>
          <Box width={"500px"}>
            <Image src={ProfilePhoto} height={"200px"}></Image>
          </Box>
          <Box>
            <Text fontSize={"1.3rem"} fontWeight={'medium'} >Name: {teacherData.name}</Text>
            <Text fontSize={"1.3rem"} fontWeight={'medium'} >Email: {teacherData.email}</Text>
            <Text fontSize={"1.3rem"} fontWeight={'medium'} >Phone: {teacherData.phone} </Text>
          </Box>
        </Flex>
      </Flex>
      <Box width={"70%"} marginLeft="auto" marginRight={"auto"}>
        {classData ? (
          <>
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={"2.1rem"}>Class Details</Text>
   
            <Flex mt={"2rem"} >
              <Box width={"500px"}>
                <Image src={TeacherProfileImage} height={"200px"}></Image>
              </Box>
              
              <Flex flexDirection={"column"}  width={"80%"}>
            <Box mb={'1rem'} >
              <Text fontSize={"1.3rem"} fontWeight={'medium'}>Title: {classData?.title}</Text>
              <Text fontSize={"1rem"} fontWeight={'medium'}>Description: {classData?.description}</Text>
            </Box>
                <Box>
                  <Button onClick={onOpen} colorScheme={"purple"} m={"1rem"} w={"200px"}>
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
                                <Th> Remove</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {studentData?.map((student) => {
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
                                      <Td>
                                        <CloseIcon
                                        id="checkicon"
                                          color={"red"}
                                          backgroundColor={"red.200"}
                                          p={1}
                                          borderRadius={2}
                                          boxSize={6}
                                        />
                                      </Td>
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
                  <Button m={"1rem"} colorScheme={'yellow'} onClick={onOpenSubject} w={"200px"}>
                    View Subjects{" "}
                  </Button>
                  <Modal isOpen={subject} onClose={onCloseSubject}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Subject Details</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Tabs isFitted variant="enclosed">
                          <TabList mb="1em">
                            <Tab>Subject1</Tab>
                            <Tab>Subject2</Tab>
                            <Tab>Subject3</Tab>
                            <Tab>Subject4</Tab>
                          </TabList>
                          <TabPanels>
                            {classData?.subjects.map((subject) => {
                              return (
                                <TabPanel>
                                  <Text>Title: {subject.title}</Text>
                                  <Text>
                                    Description: {subject.description}
                                  </Text>
                                  <Text>
                                    Subject Teacher:{" "}
                                    {subject?.subjectTeacher?.name}
                                  </Text>
                                  <Text>
                                    Number of Assesments:{" "}
                                    {subject.assesments.length}
                                  </Text>
                                </TabPanel>
                              );
                            })}
                          </TabPanels>
                        </Tabs>
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          colorScheme="blue"
                          mr={3}
                          onClick={onCloseSubject}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Box>
                <Box>
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
                                <Th> Remove</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {classData?.groups.map((group) => {
                                return (
                                  <Tr>
                                    <Td>{group._id}</Td>
                                    <Td>{group.name}</Td>
                                    <Td>{group?.groupLeader?.name}</Td>
                                    <Td>
                                      <Button
                                        size={"sm"}
                                        colorScheme={"teal"}
                                        onClick={()=>setGroupMembers(group._id)}
                                      >
                                        Show Members
                                      </Button>
                                    </Td>
                                    <Td>
                                      <CloseIcon
                                      id="checkicon"
                                        color={"red"}
                                        backgroundColor={"red.200"}
                                        p={1}
                                        borderRadius={2}
                                        boxSize={6}
                                      />
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
                                <Th>Remove</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                            {membersData?.map((member) => {
                                      return (
                                        <Tr>
                                          <Td>{member?._id}</Td>
                                          <Td>{member?.name}</Td>
                                          <Td>{member?.phone}</Td>
                                          <Td>
                                            <CloseIcon
                                            id="checkicon"
                                              color={"red"}
                                              backgroundColor={"red.200"}
                                              p={1}
                                              borderRadius={2}
                                              boxSize={6}
                                            />
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
                          onClick={onCloseMembers}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  <Button m={"1rem"} colorScheme={'green'} onClick={onOpenAllTeachers} w={"200px"}>
                    View Teachers{" "}
                  </Button>
                  <Modal
                    size={"4xl"}
                    isOpen={allTeachers}
                    onClose={onCloseAllTeachers}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>
                        List of Subject Teachers In Class{" "}
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <TableContainer>
                          <Table variant="simple">
                            <Thead>
                              <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Phone</Th>
                                <Th> Email</Th>
                                <Th> Remove</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {classData?.teachers.map((teacher) => {
                                return (
                                  <Tr>
                                    <Td>{teacher._id}</Td>
                                    <Td>{teacher.name}</Td>
                                    <Td>{teacher.phone}</Td>
                                    <Td>{teacher.email}</Td>
                                    <Td>
                                      <CloseIcon
                                      id="checkicon"
                                        color={"red"}
                                        backgroundColor={"red.200"}
                                        p={1}
                                        borderRadius={2}
                                        boxSize={6}
                                      />
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
                </Box>
              </Flex>
            </Flex>
          </>
        ) : (
          <>
            {" "}
            <Flex direction={"column"} justify={"center"} align={"center"}>
              {/* <Image my={"3rem"} src={NoData} w={"25%"}></Image> */}
              <Text my={"2rem"} fontSize="1.5rem">
                You havent made any classes yet. Make a class and start teaching
                !
              </Text>
              <Link to="/teacher/classSection">
                <Button
                  m={"2rem"}
                  height={"3rem"}
                  fontSize={"1.2rem"}
                  colorScheme={"teal"}
                  
                >
                  Go To Class Section
                </Button>
              </Link>
            </Flex>
          </>
        )}
      </Box>
    </>
  );
};

export default TeacherProfile;