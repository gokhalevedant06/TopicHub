import React from 'react'
import { Flex, Box, Text, Link, Image,extendTheme } from '@chakra-ui/react'
const Landing = () => {
  console.log("LANDING")
  const PageBackground = {
    background:
      'url(https://c4.wallpaperflare.com/wallpaper/11/624/62/simple-desk-clocks-books-wallpaper-preview.jpg) center/cover no-repeat',
    // bgGradient: 'linear(red.100 0%, orange.100 25%, yellow.100 50%)',


    alignItems: 'center',
    justifyContent: 'center'
  }
  const ButtonStyle = {
    as: 'button',
    p: '20px',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 'full',
    bgGradient: 'linear(to-r, blue.500, blue.500)'
  }
  return (
    <Flex w='100%'
      h='100vh'
      sx={PageBackground}
      direction='column'
      mb={50} >

      <Box alignItems='center' justifyContent='center' pl='300px' w='80%' h='300px' borderRadius="xl" bgColor='rgba(0,0,0, 0.4)' >

        <Text
          bgGradient='linear(to-l, blue.200,blue.200)'
          bgClip='text'
          fontSize='7xl'
          alignItems='center'
          textAlign='center'
          mr={270}
          fontWeight='extrabold'>
          Topic Hub
        </Text>

        <Flex alignItems='center' ml='0px' direction='row'>

          <Box
            sx={ButtonStyle}
            mt={10}
            _hover={{
              bgGradient: 'linear(to-r, red.300, red.300)',
            }} >
            <Link href="http://localhost:3000/teacher/Login" >Teachers Login</Link>
          </Box>

          <Box
            sx={ButtonStyle}
            mt={10}
            ml={150}
            _hover={{
              bgGradient: 'linear(to-r, red.300, red.300)',
            }} >
            <Link textDecoration='none' href="http://localhost:3000/teacher/Login" >Students Login</Link>
          </Box>

        </Flex>
      </Box>
    </Flex>
  )
}

export default Landing