import React, { useState } from "react";
import "./index.scss";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as SingOut } from "../../assets/svg/signOut.svg";

import useTranslation from "../../i18n/use-translation";
import i18n from "../../i18n";
import { useStoreDispatch, useStoreSelector } from "../../store";
import {
  selectedPage,
  goToHomePage,
  goToFeedBackPage,
  goSettingsPage,
  goToLoginPage,
} from "../../store/navigation-reducer";
import Page from "../../types/pages";

import { MouseEvent } from "react";

function Navigation() {
  const { t } = useTranslation();
  const [langCod, setLangCode] = useState<"PT" | "EN">("PT");

  const page = useStoreSelector(selectedPage);
  const dispatch = useStoreDispatch();

  React.useEffect(() => {
    if (langCod === "PT") {
      i18n.changeLanguage("pt-PT");
    } else {
      i18n.changeLanguage("en-GB");
    }
  }, [langCod]);

  const handleNavigationClick = (e: MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;

    if (id === "homepage") dispatch(goToHomePage());
    if (id === "feedback") dispatch(goToFeedBackPage());
    if (id === "settings") dispatch(goSettingsPage());
  };

  const handleLogoutClick = () => {
    // TODO the Bloody Logout when user is ready

    dispatch(goToLoginPage());
  };

  return (
    <div className="container">
      {page !== Page.Login && (
        <div className="page_nav">
          <Logo className="app_logo" />
          <span
            id="homepage"
            onClick={handleNavigationClick}
            className="first_child"
            style={{
              fontWeight: page === 1 ? "700" : "400",
            }}
          >
            {t("homepage")}
          </span>
          <span
            id="feedback"
            onClick={handleNavigationClick}
            style={{
              fontWeight: page === 2 ? "700" : "400",
            }}
          >
            {t("feedback")}
          </span>
          <span
            id="settings"
            onClick={handleNavigationClick}
            style={{
              fontWeight: page === 3 ? "700" : "400",
            }}
          >
            {t("settings")}
          </span>
        </div>
      )}

      <div className="lang_options">
        {page === Page.Login && (
          <span className="about_us_copy">{t("about_us")}</span>
        )}

        <div className="lang_options_wrapper">
          <span
            onClick={() => {
              setLangCode("PT");
            }}
            style={{
              fontWeight: langCod === "PT" ? "700" : "300",
            }}
          >
            PT
          </span>
          <span
            onClick={() => {
              setLangCode("EN");
            }}
            style={{
              fontWeight: langCod === "EN" ? "700" : "300",
            }}
          >
            EN
          </span>
        </div>

        {page !== Page.Login && (
          <SingOut className="logout_icon" onClick={handleLogoutClick} />
        )}
      </div>
    </div>
  );
}

export default Navigation;
