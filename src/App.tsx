import React from "react";
import { Page } from "./types/pages";

import { useStoreSelector } from "./store";
import { selectedPage } from "./store/navigation-reducer";
import CustomButton from "./components/buttons";

function App() {
  const page = useStoreSelector(selectedPage);

  if (page === Page.Login) {
    return <>Login Page</>;
  }

  if (page === Page.FeedBack) {
    //FeedBack
    return <>FeedBack Page</>;
  }

  if (page === Page.Settings) {
    //Setting
    return <>Setting</>;
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
