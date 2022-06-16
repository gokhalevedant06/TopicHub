import React, { useState,useEffect } from "react";
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
import axios from "axios";
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
  const token = localStorage.getItem("token");

  const [subjectData,setSubjectData] = useState()

  const getSubjectDetails = async()=>{
    try {
      const response = await axios({
        method: "GET",
        url: `/student/getSubjects`,
        headers: {
          Authorization: token,
        },
      });
      console.log(response?.data?.subjectData.subjects)
      setSubjectData(response?.data?.subjectData.subjects)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSubjectDetails()
    console.log("here",subjectData)
  }, []);


  return (
    <>
    <Flex justify={"center"}>

      <Box width={"80%"} mt={'5rem'} >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Subject 1</Tab>
            <Tab>Subject 2</Tab>
            <Tab>Subject 3</Tab>
            <Tab>Subject 4</Tab>
          </TabList>
          <TabPanels>

            {
              subjectData?.map((subject)=>{
                console.log(subject)
                return(
                  
                  <TabPanel>
              <Flex justify={"center"}>
                <Flex justify={"center"} width={"40%"}>
                  <Text>Image</Text>
                </Flex>
                <Flex flexDirection={"column"} width={"60%"}>
                  <Text>Title : {subject.title}</Text>
                  <Text>Descriptio : {subject.description}n</Text>
                  <Text>Teacher Name : {subject.subjectTeacher.name}</Text>
                  <Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Text>Previous/On Going Assessments</Text>
              <Box>
                <Accordion>

                  {
                    subject?.assesments?.map((assessment)=>{
                      return(
                        <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box flex="1" textAlign="left">
                             {assessment.title}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Box>
                            <Text>Title : {assessment.title}</Text>
                            <Text>Description : {assessment.description}</Text>
                          </Box>
    
                          <TableContainer>
                            <Table variant="simple">
                              <Thead>
                                <Tr>
                                  <Th>Group Name</Th>
                                  <Th>Topic</Th>
                                  <Th>Set/Reset</Th>
                                  <Th>Status</Th>
                                  <Th>Submission Link</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                <Tr>
                                  <Td>Group Name</Td>
                                  <Td>
                                   <Input></Input>
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

                                    </Flex>
                                  </Td>
                                  <Td>
                                    Accepted
                                  </Td>
                                  <Td>
                                    <Input></Input>
                                  </Td>
                                </Tr>
                    
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </AccordionPanel>
                      </AccordionItem>           
                      )
                    })
                  }
        
                </Accordion>
              </Box>
            </TabPanel>
                  
                )
              })
            }
            
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>


  

    </>
  );
};

export default StudentSubjectSection;
