import React, { useState } from "react";
import "./index.scss";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";

function LoginPage() {
  const [langCod, setLangCode] = useState<"PT" | "EN">("PT");

  return (
    <div className="container">
      <div className="nav-bar">
        <span>ABOUT US</span>

        <div className="lang-switch">
          <span
            onClick={() => {
              setLangCode("PT");
            }}
            style={{
              color: langCod === "PT" ? "#A2543D" : "a2543d",
              fontWeight: langCod === "PT" ? "700" : "400",
            }}
          >
            PT
          </span>
          <span
            onClick={() => {
              setLangCode("EN");
            }}
            style={{
              color: langCod === "EN" ? "#A2543D" : "a2543d",
              fontWeight: langCod === "EN" ? "700" : "400",
            }}
          >
            EN
          </span>
        </div>
      </div>
      <div className="logo-container">
        <div className="wrapper">
          <Logo />
          <span>Here goes a small app description or slogan.</span>
        </div>
      </div>
      <div className="form-wrapper"></div>
    </div>
  );
}

export default LoginPage;
