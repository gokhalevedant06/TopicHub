import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  ModalOverlay,
  useDisclosure,
  Input,
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
  Image,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import axios from "../axios";
import { useSnackbar } from 'notistack';

import { PhoneIcon, CheckIcon, CloseIcon, RepeatIcon } from "@chakra-ui/icons";
import SubjectImage from '../Assets/Images/Subject.svg'
import { useNavigate } from 'react-router-dom'
import StudentGroupSection from "./StudentGroupSection";

const StudentSubjectSection = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [acceptRejectState,setChange] = useState(false);
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
  const [groupData, setGroupData] = useState();
  const [subjectData, setSubjectData] = useState();
  const [topic, setTopicData] = useState();
  const [groupAssessmentData, setGroupAssessmentData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [messages,setMessages] = useState([
    "Hello","Hello","Hello","Hello","Hello","Hello","Hello","Hello","Hello","Hello","Hello","Hello","Hello","Hello","Hello",
  ]);
  const btnRef = React.useRef()

  const getSubjectDetails = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/student/getSubjects`,
        headers: {
          Authorization: token,
        },
      });
      console.log(response?.data?.subjectData.subjects);
      setSubjectData(response?.data?.subjectData.subjects);
    } catch (error) {
      console.log(error);
    }
  };


  const joinClassFirst = ()=>{
    enqueueSnackbar("Please Join Class First", { variant: 'warning' })
    navigate('/student/classSection')
  }

  const getGroupDetails = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/student/groupDetails`,
        headers: {
          Authorization: token,
        },
      });
      setGroupData(response.data.groupData);
    } catch (error) {
      console.log(error);
    }
  };

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  const setTopic = async (assessmentID) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/student/setTopic`,
        headers: {
          Authorization: token,
        },
        data: {
          topic,
          groupID: groupData?._id,
          assessmentID,
        },
      });

      if(response.data.ok){
        enqueueSnackbar(response.data.message, { variant: 'success' });
      setChange(!acceptRejectState)
      }else{
      enqueueSnackbar(response.data.message, { variant: 'error' });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getAssessmentOfCurrentGroup = async (assesmentID) => {
    try {
      const response = await axios({
        method: "GET",
        url: `/student/getGroupAssessment/${groupData._id}/${assesmentID}`,
        headers: {
          Authorization: token,
        },
      });
      console.log("FINAL", response);
      setGroupAssessmentData(response.data.group);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubjectDetails();
    getGroupDetails();
  }, [acceptRejectState]);

  // console.log("sdgf", subjectData);
  const navigate = useNavigate();


  return (
    <>

    {
      groupData?<>{ subjectData?<><Flex justify={"center"}>
      <Box width={"80%"} mt={"5rem"}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Subject 1</Tab>
            <Tab>Subject 2</Tab>
            <Tab>Subject 3</Tab>
            <Tab>Subject 4</Tab>
          </TabList>
          <TabPanels>
            {subjectData?.map((subject) => {
              // console.log(subject);
              return (
                <TabPanel>
                  <Flex justify={"center"}>
                    <Flex justify={"center"} width={"40%"}>
                      <Image src={SubjectImage} width={"80%"}></Image>
                    </Flex>
                    <Flex flexDirection={"column"} width={"60%"}>
                      <Text>Title : {subject.title}</Text>
                      <Text>Description : {subject.description}n</Text>
                      <Text>
                        Teacher Name : {subject.subjectTeacher.name}
                      </Text>
                      <Flex>
                      <Button
                          colorScheme="blue"
                          mt={3}
                          height={8}
                          onClick={onOpen}
                          ref={btnRef}
                        >
                          Chat Section
                        </Button>

                        <Drawer
                        isOpen={isOpen}
                        placement='top'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        size={"full"}
                      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chat Section</DrawerHeader>

          <DrawerBody>

            <Box>
                {
                  messages?.map((message)=>{
                    return(
                      <>
                      <Box m={4} p={2} backgroundColor={"blackAlpha.300"} minWidth={"fit-content"} minH={"30px"} borderRadius={"md"} align={"right"} >
                      <Text fontSize={"12px"} >Vedant Gokhale</Text>
                      <Text  fontWeight={"bold"}  fontSize={"xl"}>{message}</Text>
                      <Text fontSize={"12px"} >{formatDate(Date.now())}</Text>
                      </Box>
                      </>
                    )
                  })
                }
            </Box>

          </DrawerBody>

          <DrawerFooter>
          <Input placeholder='Type here...' />

          </DrawerFooter>
        </DrawerContent>
      </Drawer>

                      </Flex>
                    </Flex>
                  </Flex>
                  <Text>Previous/On Going Assessments</Text>
                  <Box>
                    <Accordion>
                      {subject?.assesments?.map((assessment) => {
                        return (
                          <AccordionItem>
                            <h2>
                              <AccordionButton
                                onClick={() =>
                                  getAssessmentOfCurrentGroup(assessment._id)
                                }
                              >
                                <Box flex="1" textAlign="left">
                                  {assessment.title}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Box>
                                <Text>Title : {assessment.title}</Text>
                                <Text>
                                  Description : {assessment.description}
                                </Text>
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
                                      <Td>{groupData?.name}</Td>
                                      <Td>
                                        <Input
                                          placeholder={
                                            groupAssessmentData?.topic?.name
                                          }
                                          onChange={(e) =>
                                            setTopicData(e.target.value)
                                          }
                                        ></Input>
                                      </Td>
                                      <Td>
                                        <Flex align={"center"}>
                                          <CheckIcon
                                            id="checkicon"
                                            onClick={() =>
                                              setTopic(assessment._id)
                                            }
                                            mr={"1rem"}
                                            backgroundColor={"green.200"}
                                            p={1}
                                            borderRadius={2}
                                            color={"green"}
                                            boxSize={6}
                                          />
                                          <RepeatIcon
                                            mr={"1rem"}
                                            backgroundColor={"gray"}
                                            p={1}
                                            borderRadius={2}
                                            color={"white"}
                                            boxSize={6}
                                          />
                                        </Flex>
                                      </Td>
                                      <Td>
                                        {groupAssessmentData?.topic
                                          ?.isApproved ? (
                                          <>
                                            <Text
                                              fontWeight={"bold"}
                                              color={"green"}
                                            >
                                              Accepted
                                            </Text>{" "}
                                          </>
                                        ) : groupAssessmentData?.topic
                                            ?.isRejected ? (
                                          <>
                                            <Text
                                              fontWeight={"bold"}
                                              color={"red"}
                                            >
                                              Rejected
                                            </Text>{" "}
                                          </>
                                        ) : (
                                          <>Pending</>
                                        )}
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
                        );
                      })}
                    </Accordion>
                  </Box>
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      </Box>
    </Flex></>:<>Join Class First</>}</>:<><StudentGroupSection/></>
     
  }
      
    </>
  );
};

export default StudentSubjectSection;
