import React from "react";
import { Page } from "./types/pages";
import { Text, Box } from '@chakra-ui/react'
import useTranslation from "./i18n/use-translation";

import { useStoreSelector, useStoreDispatch } from "./store";
import { selectedPage, goToLoginPage } from "./store/navigation-reducer";
import { AdminFeedback } from "./app/pages/admin/feedback";
import { AppBar, Toolbar } from "@material-ui/core";

import CustomButton from "./components/buttons";
import AdminBeacons from "./app/pages/admin/beacons";
import { Settings } from "./app/pages/settings";

function App() {
  const { t } = useTranslation();
  const page = useStoreSelector(selectedPage);
  const dispatch = useStoreDispatch();

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(goToLoginPage());
  //   }, 1000);
  // });

  if (page === Page.Login) {
    return <>Login Page</>;
  }

  if (page === Page.FeedBack) {
    //FeedBack
    return(
      <div className="App">
        <header className="App-header">
          <Box height={'110px'}></Box>
          <Text fontSize='3xl' margin='7'>{t("settings")}</Text>
          <AdminFeedback></AdminFeedback>
        </header>
       </div>
       );
  }

  if (page === Page.Settings) {
    return (
      <div className="App">
        <header className="App-header">
          <Box height={'110px'}></Box>
          <Text fontSize='3xl' margin='7'>{t("settings")}</Text>
          <Settings></Settings>
        </header>
       </div>
       );
  }

  return (
    <CustomButton
      backgroundColor="isepBrick.300"
      borderColor="isepGreen.500"
      buttonColor="isepGrey.600"
      hoverColor="isepBrick.400"
      text="Hello There"
      handleButtonClick={() => [alert("You Clicked with Button😂😂😂😂😂😂")]}
    />
  );
}

export default App;
