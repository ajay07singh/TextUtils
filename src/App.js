import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#383838";
      showAlert("Dark mode is enabled ", "success");
      // document.title = "TextUtils-DarkMode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled ", "success");
      // document.title = "TextUtils-LightMode"
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        changeMode={toggleMode}
      />

      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>

      {/* <About mode = {mode}/> */}
    </>
  );
}

export default App;
