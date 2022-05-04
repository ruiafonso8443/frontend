import React from "react";
import { Page } from "./types/pages";

import useTranslation from "./i18n/use-translation";

import { useStoreSelector, useStoreDispatch } from "./store";
import { selectedPage, goToLoginPage } from "./store/navigation-reducer";

function App() {
  const { t } = useTranslation();
  const page = useStoreSelector(selectedPage);
  const dispatch = useStoreDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(goToLoginPage());
    }, 1000);
  });

  if (page === Page.Login) {
    // Login Screen
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello There this is the Login page😂😂😂</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  if (page === Page.FeedBack) {
    //FeedBack
    return <></>;
  }

  if (page === Page.Settings) {
    //FeedBack
    return <></>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{t("about_us")}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
