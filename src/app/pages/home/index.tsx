import React, { useState } from 'react';
import { Box, Flex, Heading, IconButton, Select } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { BsPinAngleFill } from 'react-icons/bs';
import useTranslation from "../../../i18n/use-translation";
import { useWindowSize } from '@react-hook/window-size'
const locations = [
    {
        key: 'a',
        name: 'building_a',
    },
    {
        key: 'b',
        name: 'building_b',
    },
    {
        key: 'c',
        name: 'building_c',
    },
    {
        key: 'd',
        name: 'building_d',
    },
]

function Home() {

    const { t } = useTranslation()
    const [width, height] = useWindowSize()
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const isMobile = width < 768

    const renderCircle = (size: string, marginTop?: string, marginLeft?: string) => (
        <Box w={size} h={size} rounded='10' bg='white' ml={marginLeft} mt={marginTop}></Box>
    )

    const handleSelectOrigin = (e: any) => {
        console.log(e.target.value)
        setOrigin(e.target.value)
    }

    const handleSelectDestination = (e: any) => {
        console.log(e.target.value)
        setDestination(e.target.value)
    }

    const handleAddBeaconClick = (e: any) => {
        console.log(e)
    }

    return (
        <>
            <Box
                padding='1rem'
                bg='isepBrick.500'
                rounded='14'
                margin={isMobile ? '1rem' : '2rem'}
                position={isMobile ? 'static' : 'fixed'}
                bottom='0'
            >
                <Heading size='md' color='white'>
                    {t("where_to_go")}
                </Heading>

                <Flex mt='1rem'>

                    <Flex direction='column' w='2rem'>
                        {renderCircle("1rem", ".4rem")}
                        {renderCircle(".3rem", ".4rem", ".3rem")}
                        {renderCircle(".3rem", ".4rem", ".3rem")}
                        {renderCircle(".3rem", ".4rem", ".3rem")}
                        {renderCircle(".3rem", ".4rem", ".3rem")}
                        {renderCircle("1rem", ".4rem")}
                    </Flex>

                    <Flex direction='column' w={{ base: '100%', md: '20rem' }}>
                        <Select variant='filled' isFullWidth _focus={{ backgroundColor: 'white' }} onChange={handleSelectOrigin}>
                            {
                                locations.map((e, i) => (
                                    <>
                                        {i === 0 && <option value={'self'}>{t("my_location")}</option>}
                                        <option key={`o-${e.key}`} value={e.key}>{`${t("building")} ${e.key.toUpperCase()}`}</option>
                                    </>
                                ))
                            }
                        </Select>
                        <Select variant='filled' isFullWidth _focus={{ backgroundColor: 'white' }} mt='1rem' onChange={handleSelectDestination} >
                            {
                                locations.map(e => (
                                    <>
                                        <option key={`d-${e.key}`} value={e.key}>{`${t("building")} ${e.key.toUpperCase()}`}</option>
                                    </>
                                ))
                            }
                        </Select>
                    </Flex>
                </Flex>
            </Box>

            <IconButton
                aria-label='Add Beacon'
                color='white'
                bg='isepBrick.500'
                _hover={{ backgroundColor: 'isepBrick.400' }}
                _active={{ backgroundColor: 'isepBrick.300' }}
                size='lg'
                rounded='100'
                position='fixed'
                bottom='0'
                right='0'
                margin='2rem'
                icon={<Icon as={BsPinAngleFill} />}
                onClick={handleAddBeaconClick}
            />
        </>
    )
}

export default Home