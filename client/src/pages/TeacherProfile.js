import React from "react";
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
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tabs, TabList, TabPanels, Tab, TabPanel 
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const TeacherProfile = () => {
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

  return (
    <>
      <Flex>
        <Flex
          wrap={"wrap"}
          justify={"center"}
          mt="7rem"
          height={"250px"}
          w={"80%"}
        >
          <Box width={"300px"}>Image</Box>
          <Box>
            <Text>Name:</Text>
            <Text>Email: </Text>
            <Text>Phone: </Text>
          </Box>
        </Flex>
      </Flex>
      <Box width={"70%"} marginLeft="auto" marginRight={"auto"}>
        <Text textAlign={"center"}>Class Details</Text>
        <Box marginLeft={"5rem"}>
          <Text>Title:</Text>
          <Text>Description:</Text>
        </Box>
        <Flex>
          <Box>Image</Box>
          <Flex flexDirection={"column"} align="center" width={"80%"}>
            <Box>
              <Button onClick={onOpen} m={"1rem"} w={"200px"}>
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
              <Button m={"1rem"} onClick={onOpenSubject} w={"200px"}>
                View Subjects{" "}
              </Button>
              <Modal isOpen={subject} onClose={onCloseSubject}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Subject1</Tab>
    <Tab>Subject2</Tab>
    <Tab>Subject3</Tab>
    <Tab>Subject4</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseSubject}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            </Box>
            <Box>
              <Button onClick={onOpenGroup} m={"1rem"} w={"200px"}>
                View Groups
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
              <Modal isOpen={member} size={"3xl"} onClose={onCloseMembers}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
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
                    <Button colorScheme="blue" mr={3} onClick={onCloseMembers}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button m={"1rem"} onClick={onOpenAllTeachers} w={"200px"}>
                View Teachers{" "}
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
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default TeacherProfile;
