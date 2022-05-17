import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Image,
  Flex,
  Text,
  Button,
  Box,
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
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import NoData from "../Assets/Images/NoData.svg";
import { Link } from "react-router-dom";
import axios from "axios";
const TeacherClassSection = () => {
  const { user } = useSelector((state) => state?.user);
  const [classData, setClassData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: allTeachers,
    onOpen: onOpenAllTeachers,
    onClose: onCloseAllTeachers,
  } = useDisclosure();
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
  const token = localStorage.getItem("token");
  const getClassData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/teacher/getClasss`,
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClassData();
    console.log("USER", user);
  }, []);

  return (
    <>
      {user.MyClass ? (
        <>
          <Flex justify={"center"}>
            <Box>
              <Text mt={"5rem"}>Class Details</Text>
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
              <Button m={"1rem"} w={"200px"} onClick={onOpen}>
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
                          <Tr>
                            <Td>12010665</Td>
                            <Td>Vedant Gokhale</Td>
                            <Td>9552037743</Td>
                            <Td>Group1</Td>
                            <Td>
                              <CloseIcon
                                color={"red"}
                                backgroundColor={"red.200"}
                                p={1}
                                borderRadius={2}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>12010665</Td>
                            <Td>Adwait Gharpure</Td>
                            <Td>9552037743</Td>
                            <Td>Group1</Td>
                            <Td>
                              <CloseIcon
                                color={"red"}
                                backgroundColor={"red.200"}
                                p={1}
                                borderRadius={2}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>12010665</Td>
                            <Td>Harsh Yadav</Td>
                            <Td>9552037743</Td>
                            <Td>Group1</Td>
                            <Td>
                              <CloseIcon
                                color={"red"}
                                backgroundColor={"red.200"}
                                p={1}
                                borderRadius={2}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
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
              <Button onClick={onOpenAllTeachers} m={"1rem"} w={"200px"}>
                Show All Teachers
              </Button>
              <Modal
                size={"4xl"}
                isOpen={allTeachers}
                onClose={onCloseAllTeachers}
              >
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
                            <Th> Email</Th>
                            <Th> Remove</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>12010665</Td>
                            <Td>Vedant Gokhale</Td>
                            <Td>9552037743</Td>
                            <Td>Group1</Td>
                            <Td>
                              <CloseIcon
                                color={"red"}
                                backgroundColor={"red.200"}
                                p={1}
                                borderRadius={2}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>12010665</Td>
                            <Td>Adwait Gharpure</Td>
                            <Td>9552037743</Td>
                            <Td>Group1</Td>
                            <Td>
                              <CloseIcon
                                color={"red"}
                                backgroundColor={"red.200"}
                                p={1}
                                borderRadius={2}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>12010665</Td>
                            <Td>Harsh Yadav</Td>
                            <Td>9552037743</Td>
                            <Td>Group1</Td>
                            <Td>
                              <CloseIcon
                                color={"red"}
                                backgroundColor={"red.200"}
                                p={1}
                                borderRadius={2}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onCloseGroup}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button m={"1rem"} w={"200px"} onClick={onOpenGroup}>
                View All Groups
              </Button>
              <Modal size={"4xl"} isOpen={group} onClose={onCloseGroup}>
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
                            <Th>Leader</Th>
                            <Th> Member List</Th>
                            <Th> Remove</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>12010665</Td>
                            <Td>Group Name</Td>
                            <Td>Leader Name</Td>
                            <Td>
                              <Button
                                size={"sm"}
                                onClick={onOpenMembers}
                                colorScheme={"teal"}
                              >
                                Show Members
                              </Button>
                            </Td>
                            <Td>
                              <CloseIcon
                                color={"red"}
                                backgroundColor={"red.200"}
                                p={1}
                                borderRadius={2}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>12010665</Td>
                            <Td>Group Name</Td>
                            <Td>Leader Name</Td>
                            <Td>
                              <Button
                                size={"sm"}
                                onClick={onOpenMembers}
                                colorScheme={"teal"}
                              >
                                Show Members
                              </Button>
                            </Td>
                            <Td>
                              <CloseIcon
                                color={"red"}
                                backgroundColor={"red.200"}
                                p={1}
                                borderRadius={2}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>12010665</Td>
                            <Td>Group Name</Td>
                            <Td>Leader Name</Td>
                            <Td>
                              <Button
                                size={"sm"}
                                onClick={onOpenMembers}
                                colorScheme={"teal"}
                              >
                                Show Members
                              </Button>
                            </Td>
                            <Td>
                              <CloseIcon
                                color={"red"}
                                backgroundColor={"red.200"}
                                p={1}
                                borderRadius={2}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onCloseGroup}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Modal isOpen={member} onClose={onCloseMembers}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>dfhf</ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onCloseMembers}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button m={"1rem"} w={"200px"}>
                Add Teachers
              </Button>
            </Box>
          </Flex>
        </>
      ) : (
        <>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Image my={"3rem"} src={NoData} w={"25%"}></Image>
            <Text my={"2rem"} fontSize="1.5rem">
              You havent made any classes yet. Make a class and start teaching !
            </Text>
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

export default TeacherClassSection;
