import React,{useState,useEffect} from 'react'
import { Flex,Text,Box,Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure,Button,Input } from '@chakra-ui/react'
    import socket from "../socket";
    import axios from '../axios'
    import { useSelector } from 'react-redux';
const Discussion = () => {
    const [groups,setGroups] = useState([]);
    const { user } = useSelector((state) => state?.user)
    const { isOpen, onOpen, onClose } = useDisclosure();
  const [messages, setMessages] = useState(['Group 1','Group 1','Group 1','Group 1','Group 1','Group 1',]);
  const [message, setMessage] = useState("");
  const btnRef = React.useRef();
  const token = localStorage.getItem("token");
  const [active,setActive] = useState(null)

  useEffect(async() => {
    const response = await axios({
        method: "GET",
        url: `/teacher/getGroups/${user.MyClass._id}`,
        headers: {
          Authorization: token,
        },
      });
      setGroups(response.data.data);
  }, [])
  

  return (
    <Flex justify={"center"} flexDirection={"column"}>
        <Text textAlign={"center"} mt={'3rem'} fontSize={"2.1rem"} fontWeight={'bold'} >Discussion Section</Text>
            <Flex m={4} flexDirection={"row"} >

        <Flex width={"200px"} flexDirection={"column"}  backgroundColor={"blackAlpha.200"} rounded={"10px"} p={2} mx={2} >
            {
                groups.map((group)=>{
                    return(
                        <Text cursor={"pointer"} onClick={()=>{
                            setActive(group._id)
                            onOpen();
                        }} p={2} m={2} zIndex={1} >{group.name}</Text>
                    )
                })
            }
        </Flex>
        <Flex>
        <Drawer
                                    isOpen={isOpen}
                                    placement="top"
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
                                          {messages?.map((message) => {
                                            console.log(message)
                                            return (
                                              <>
                                                <Box
                                                  m={4}
                                                  p={2}
                                                  backgroundColor={
                                                    
                                                    message.sender===user._id?"blackAlpha.300":"blackAlpha.200"
                                                  }
                                                  minWidth={"fit-content"}
                                                  minH={"30px"}
                                                  borderRadius={"md"}
                                                  align={message.sender===user._id?"right":"left"}
                                                >
                                                  <Text fontSize={"12px"}>
                                                    {message?.name}
                                                  </Text>
                                                  <Text
                                                    fontWeight={"bold"}
                                                    fontSize={"xl"}
                                                  >
                                                    {message}
                                                  </Text>
                                                  <Text fontSize={"12px"}>
                                                    {new Date(message?.time).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
                                                  </Text>
                                                </Box>
                                              </>
                                            );
                                          })}
                                        </Box>
                                      </DrawerBody>

                                      <DrawerFooter>
                                        <Flex w={"full"}>
                                          <Input
                                            onChange={(e) => {
                                              setMessage(e.target.value);
                                            }}
                                            placeholder={"Start Typing ..."}
                                            value={message}
                                          />
                                          <Button
                                            onClick={(e) => {
                                            //   if (socket.connected) {
                                            //     socket.emit("message", {
                                            //       value: message,
                                            //       teacherID:
                                            //       currentSubTeacher,
                                            //       groupID: groupData._id,
                                            //       userID: user._id,
                                            //       userName: user.name,
                                            //     });
                                            //   } else {
                                            //     console.log("NOT CONNECTED");
                                            //   }
                                              setMessage("");
                                            }}
                                            mx={2}
                                            ml={4}
                                          >
                                            Send
                                          </Button>
                                        </Flex>
                                      </DrawerFooter>
                                    </DrawerContent>
                                  </Drawer>
        </Flex>
            </Flex>
    </Flex>
  )
}

export default Discussion