import {
    Box,
    Container,
    Stack,
    Text,
    Image
} from '@chakra-ui/react'

import logo from "../logo.svg"



const Footer = () => {
    return (
        <Box
            bg='gray'
            color='white'
            position={"auto"}
            bottom={0}
            width="100%"
        >
            <Container
                as={Stack}
                // maxW={'6xl'}
                // py={4}
                // spacing={4}
                justify={'center'}
                align={'center'}

            >

                <Stack direction={'row'} spacing={6}>
                    <Image
                        paddingTop={3}
                        boxSize='65px'
                        src={logo}
                        alt='Logo'
                    />
                    <Stack direction={'row'} paddingTop={6}>

                        <Box as="a" href={'/'}>
                            Home
                        </Box>
                        <Box as="a" href={'/about'}>
                            About
                        </Box>
                        <Box as="a" href={'/contact'}>
                            Contact
                        </Box>
                    </Stack>
                </Stack>
                <Text paddingBottom={2}> © 2023 Kagaj. All rights reserved</Text>
            </Container>
        </Box >
    )
}

export default Footer;