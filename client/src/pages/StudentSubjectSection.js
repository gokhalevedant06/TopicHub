import React, { useState } from "react";
import {
  Flex,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { PhoneIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
const StudentSubjectSection = () => {
  const {
    isOpen: mark,
    onOpen: onOpenMark,
    onClose: onCloseMark,
  } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay bg="rgba(92,103, 119, 0.8)" backdropFilter="blur(10px)" />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <>
    <Flex justify={"center"}>

      <Box width={"80%"} mt={'5rem'} >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>One</Tab>
            <Tab>One</Tab>
            <Tab>One</Tab>
            <Tab>One</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex justify={"center"}>
                <Flex justify={"center"} width={"40%"}>
                  <Text>Image</Text>
                </Flex>
                <Flex flexDirection={"column"} width={"60%"}>
                  <Text>Title</Text>
                  <Text>Description</Text>
                  <Text>Teacher Name</Text>
                  <Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Text>Previous/On Going Assessments</Text>
              <Box>
                <Accordion>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Assessment 1 Title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box>
                        <Text>Title</Text>
                        <Text>Description</Text>
                      </Box>

                      <TableContainer>
                        <Table variant="simple">
                          <Thead>
                            <Tr>
                              <Th>Group Number</Th>
                              <Th>Topic Name</Th>
                              <Th>Status</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>1</Td>
                              <Td>
                                Sign Language Detection using Deep Learning
                              </Td>
                              <Td>
                                <Flex align={"center"}>
                                  <CheckIcon
                                    mr={"1rem"}
                                    backgroundColor={"green.200"}
                                    p={1}
                                    borderRadius={2}
                                    color={"green"}
                                    boxSize={6}
                                  />
                                  <CloseIcon
                                    color={"red"}
                                    backgroundColor={"red.200"}
                                    p={1}
                                    borderRadius={2}
                                    boxSize={6}
                                  />
                                </Flex>
                              </Td>
                              <Td>
                                <Button onClick={onOpenMark}>
                                  Allot Marks
                                </Button>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td>1</Td>
                              <Td>
                                Sign Language Detection using Deep Learning
                              </Td>
                              <Td>
                                <Flex align={"center"}>
                                  <CheckIcon
                                    mr={"1rem"}
                                    backgroundColor={"green.200"}
                                    p={1}
                                    borderRadius={2}
                                    color={"green"}
                                    boxSize={6}
                                  />
                                  <CloseIcon
                                    color={"red"}
                                    backgroundColor={"red.200"}
                                    p={1}
                                    borderRadius={2}
                                    boxSize={6}
                                  />
                                </Flex>
                              </Td>
                              <Td>
                                <Button onClick={onOpenMark}>
                                  Allot Marks
                                </Button>
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Assessment 1 Title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box>
                        <Text>Title</Text>
                        <Text>Description</Text>
                      </Box>

                      <TableContainer>
                        <Table variant="simple">
                          <Thead>
                            <Tr>
                              <Th>Group Number</Th>
                              <Th>Topic Name</Th>
                              <Th>Status</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>1</Td>
                              <Td>
                                Sign Language Detection using Deep Learning
                              </Td>
                              <Td>
                                <Flex align={"center"}>
                                  <CheckIcon
                                    mr={"1rem"}
                                    backgroundColor={"green.200"}
                                    p={1}
                                    borderRadius={2}
                                    color={"green"}
                                    boxSize={6}
                                  />
                                  <CloseIcon
                                    color={"red"}
                                    backgroundColor={"red.200"}
                                    p={1}
                                    borderRadius={2}
                                    boxSize={6}
                                  />
                                </Flex>
                              </Td>
                              <Td>
                                <Button onClick={onOpenMark}>
                                  Allot Marks
                                </Button>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td>1</Td>
                              <Td>
                                Sign Language Detection using Deep Learning
                              </Td>
                              <Td>
                                <Flex align={"center"}>
                                  <CheckIcon
                                    mr={"1rem"}
                                    backgroundColor={"green.200"}
                                    p={1}
                                    borderRadius={2}
                                    color={"green"}
                                    boxSize={6}
                                  />
                                  <CloseIcon
                                    color={"red"}
                                    backgroundColor={"red.200"}
                                    p={1}
                                    borderRadius={2}
                                    boxSize={6}
                                  />
                                </Flex>
                              </Td>
                              <Td>
                                <Button onClick={onOpenMark}>
                                  Allot Marks
                                </Button>
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </AccordionItem>

                  <Modal isOpen={mark} size={"2xl"} onClose={onCloseMark}>
                    {overlay}
                    <ModalContent>
                      <ModalHeader>Modal Title</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <TableContainer>
                          <Table size="sm">
                            <Thead>
                              <Tr>
                                <Th>Name</Th>
                                <Th>Obtained Marks</Th>
                                <Th>Total Marks</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td>Vedant Gokhale</Td>
                                <Td>
                                  <Input />
                                </Td>
                                <Td>100</Td>
                              </Tr>
                              <Tr>
                                <Td>Vedant Gokhale</Td>
                                <Td>
                                  <Input />
                                </Td>
                                <Td>100</Td>
                              </Tr>
                              <Tr>
                                <Td>Vedant Gokhale</Td>
                                <Td>
                                  <Input />
                                </Td>
                                <Td>100</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </ModalBody>

                      <ModalFooter>
                        <Button>Save</Button>
                        <Button colorScheme="blue" mr={3} onClick={onCloseMark}>
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Accordion>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>


  

    </>
  );
};

export default StudentSubjectSection;
