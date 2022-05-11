import React, { ReactNode } from "react";
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Image,
    Center,
    Button,
    ButtonGroup,
    SimpleGrid,
    Grid,
    GridItem,
    Divider,
    extendTheme,
    ColorModeScript,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import ReactAudioPlayer from "react-audio-player";
import { BrowserView, MobileView } from "react-device-detect";
import theme from './theme';
import Toggle from "../../../components/buttons/toggle";
import { useTranslation } from "react-i18next";

interface Options {
    settingName: string
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

//const { t } = useTranslation();

const array1: Options[] = [ //endpoint Feedback/GET ALL
    {
        settingName: "Themes" //t("themes")
    },
    {
        settingName:  "Sounds" //t("sounds")
    },
    {
        settingName:  "Delete Account" //t("delete_account")
    },
    {
        settingName:  "Change Password" //t("change_password")
    },
    {
        settingName: "About the App" //t("about_app")
    },
    {
        settingName: "Contact Us" //t("contact_us")
    },
    {
        settingName: "Terms and Conditions" //t("terms_conditions")
    },
    {
        settingName: "Patch Notes" //t("patch_notes")
    }
];

export class Settings extends React.Component<{}, {}> {
    state: Options = {
        settingName: ""
    };


    private setSetting(
        event: string,
        eventName: string,
        eventType: string
    ) {
        this.setState({ settingName: event });
    }


    private getSettingContent(settingName: string): ReactNode {
        switch (settingName) {
            case "Themes" : //t("themes")
                return (
                    <div>
                        <Text fontSize="xx-large">
                            Themes
                        </Text>
                        <br></br>
                        <Text fontSize="large">
                            In this section you will be able to change between theme styles of the application - white and dark mode.
                        </Text>
                        <Toggle></Toggle>
                    </div>
                );

                break;
            case "Sounds": //t("sounds")
                return (
                    <div>
                        <Text fontSize="md">
                            My new sound update section
                            Edit content of HTML here
                        </Text>
                    </div>
                );
                break;
            case "Delete Account": //t("delete_account")
                return (
                    <div>
                        <Text fontSize="md">
                            My new delete acoount section
                            Edit content of HTML here
                        </Text>
                    </div>
                );
                break;
            case "Change Password": //t("change_password")
                return (
                    <div>
                        <Text fontSize="md">
                            My new change password section
                            Edit content of HTML here
                        </Text>
                    </div>
                );
                break;
            case "About the App": //t("about_app")
                return (
                    <div>
                        <Text fontSize="xx-large">
                            About Us
                        </Text>
                        <br></br>
                        <Text fontSize="large">
                            How it all started.
                        </Text>
                        <br></br>
                        <Text fontSize="md">
                            This is our about the App section. It's not much but you don't need information to know our app is dope!
                            Just use it please... thank you for your attention.
                        </Text>
                        <Image src={"https://s3-alpha-sig.figma.com/img/e61d/d2cb/0a63e30674435607b06b4d6b466384f5?Expires=1653264000&Signature=DO-5QTTdSrt52S62TeXnUDv5kGF7x-H~XS2i9F7U4guJhpn1vX8oK4P5pZatIZw9UbnpJxN~D5MbvX~cCsnaNlIP5lVq3oTujy~hOUNMhwcbFpLrhhUXd0ZxLO1a1Ru-hQrrdOuskQoi55G4NjJFPm6rO9TynhaQzLlGiM~wdNb8xYA34f6a5N1TvtEp6GR~Z5vELnqHpZvfcMVCEALJwy8PsxbzyzA5-myfIIBa53xL9fixwJg~u2u5pEEeElhiRS7FyvZMeWQyb7jb3A7nyH8bbWbdXROqHDV1FozpluMmrmWMGG-8mT1DRBRRrBmPxF46tOa9n6ouvj13SUNxLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"} alt="uploadImage" />
                    </div>
                );
                break;
            case "Contact Us": //t("contact_us")
                return (
                    <div>

                        <Text fontSize="md">
                            My new Contact us section
                            Edit content of HTML here
                        </Text>
                    </div>
                );
                break;
            case "Terms and Conditions": //t("terms_conditions")
                return (
                    <div>
                        <Text fontSize="md">
                            My new terms and conditions section
                            Edit content of HTML here
                        </Text>
                    </div>
                );
                break;
            case "Patch Notes": //t("patch_notes")
                return (
                    <div>
                        <Text fontSize="md">
                            My new patch notes section
                            Edit content of HTML here
                        </Text>
                    </div>
                );
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <>
                <MobileView>
                    {array1.map(({ settingName }) => (
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton
                                        bg="isepBrick.300"
                                        w="100%"
                                        p={4}
                                        color="isepGrey.500"
                                    >
                                        <Box flex="1" textAlign="left" textColor="#000000">
                                            {settingName}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {this.getSettingContent(settingName)}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </MobileView>

                <BrowserView>
                    <SimpleGrid columns={[1, 2]}>
                        <Box>
                            {array1.map(({ settingName }) => (
                                <Center>
                                    <ButtonGroup marginTop="1%" marginBottom="0.5%">
                                        <Button
                                            width="350px"
                                            height="67px"
                                            _hover={{ bg: "isepBrick.300" }}
                                            variant="outline"
                                            _focus={{
                                                boxShadow: "none",
                                            }}
                                            onClick={() =>
                                                this.setSetting(settingName, settingName, settingName)
                                            }
                                        >
                                            <Text>{settingName}</Text>
                                        </Button>
                                    </ButtonGroup>
                                </Center>
                            ))}
                        </Box>

                        <Box
                            marginBottom="1%"
                            textAlign={"left"}
                            borderRadius="3xl"
                            width="500px"
                        >
                            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                                <GridItem colSpan={1} h="320" w="10">
                                    <Divider orientation="vertical" />
                                </GridItem>
                                <GridItem colStart={2} colEnd={7} h="320">
                                    <Box>
                                        {this.getSettingContent(this.state.settingName)}
                                        <Box height={'100px'}></Box>
                                        <Text fontSize="xs" as="i" align={"left"}>
                                            {this.state.settingName}
                                        </Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </SimpleGrid>
                </BrowserView>
            </>
        );
    }
}
