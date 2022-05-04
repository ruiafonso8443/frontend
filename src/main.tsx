import React from "react";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function Main() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  );
}

export default Main;
