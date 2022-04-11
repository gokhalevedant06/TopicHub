import { Box, Stack ,Grid,GridItem,Flex,Spacer,Heading,Text,Image,Button} from "@chakra-ui/react";
import React from "react";
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/userSlice'

const Studentdashboard = () => {
    return(

        <Flex>

            <Box w='20%' h='90vh' bg='gray.100' ml='250' mt='10' rounded={'3xl'} >
                <Image src="https://i.ibb.co/44ckxXG/na-feb-36.jpg"></Image> 
                <Box p={6} mt='50'>
                <Stack spacing={2} align={'center'} mb={5}>
                    <Heading fontSize={'4xl'} fontWeight={500} fontFamily={'body'}>
                        Welcome!
                        </Heading>
                        <Spacer />
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                        Mihir Deshpande
                        </Heading>
                        
                        <Text color={'gray.500'}>AI-A</Text>
                        <Text color={'gray.500'}>mihir.deshpande20vit.edu</Text>
                        </Stack>
                        <Button size='lg' colorScheme='orange' ml='50' rounded={'full'} >
                            My Account
                        </Button>
                </Box>
            </Box> 
            <Spacer />


            <Box w='20%' h='90vh' bg={'lightgoldenrodyellow'} mr={'100'} mt='10' rounded={'3xl'}>
                <Image src="https://i.ibb.co/b5fFJqy/gears-gdff9363bc-640-removebg-preview.png"></Image>
                <Box p={10} >
                <Stack spacing={6} align={'center'} mb={5}>
                    <Heading fontSize={'4xl'} fontWeight={500} fontFamily={'body'} align='center'>
                        Student Dashboard
                    </Heading>
                    <Stack spacing = {6} direction = "column" align={'initial'}>
                        <Button _hover={{transform: 'translateY(-2px)',boxShadow: 'lg',}} colorScheme='teal'>Join Class</Button>
                        <Button  _hover={{transform: 'translateY(-2px)',boxShadow: 'lg',}} colorScheme='teal'>Class and Subject Information</Button>
                    </Stack>

                </Stack>
                </Box>
                </Box>
            <Spacer />


            <Box w='20%' h='90vh' bg={'linkedin.100'} mt='10' mr={'100'} rounded={'3xl'} ml='-100'>
                <Image src="https://i.ibb.co/PFmYqS6/image-processing20201019-3245-17b1t08-removebg-preview.png"></Image>
                <Box p={10} >
                    <Stack spacing={6} align={'center'} mb={5}>
                        <Heading fontSize={'4xl'} fontWeight={500} fontFamily={'body'} align='center'>
                        Group Activites
                        </Heading>
                        <Stack spacing = {6} direction = "column" align={'initial'}>
                            <Button _hover={{transform: 'translateY(-2px)',boxShadow: 'lg',}} colorScheme='telegram'>View Student List</Button>
                            <Button  _hover={{transform: 'translateY(-2px)',boxShadow: 'lg',}} colorScheme='telegram'>Create a group</Button>
                            <Button  _hover={{transform: 'translateY(-2px)',boxShadow: 'lg',}} colorScheme='telegram'>Join a group</Button>
                        </Stack>

                    </Stack>
                </Box>

            </Box>
            </Flex>

      



    )

    }

export default Studentdashboard