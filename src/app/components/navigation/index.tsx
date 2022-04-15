import React from 'react';
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


function Navigation() {
    const navigate = useNavigate();


    return (
        <Box>
            <Button colorScheme='blue' onClick={() => { navigate('') }}>Home</Button>
            <Button colorScheme='blue' onClick={() => { navigate('login') }}>Login</Button>
            <Button colorScheme='blue' onClick={() => { navigate('feedback') }}>Feedback</Button>
            <Button colorScheme='blue' onClick={() => { navigate('settings') }}>Settings</Button>
            <Button colorScheme='blue' onClick={() => { navigate('admin') }}>Admin</Button>
        </Box>
    )
}

export default Navigation
