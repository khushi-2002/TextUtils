import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [redMode, setRedMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils now";
      // }, 1500);

      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils now";
      // }, 1500);

      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleRedmode = () => {
    if (redMode === "light") {
      setRedMode("red");
      document.body.style.backgroundColor = "red";
      showAlert("Red mode has been enabled", "success");
    } else {
      setRedMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title={"KhushiTextUtils"}
        aboutText={"About Us"}
        mode={mode}
        redMode={redMode}
        toggleRedmode={toggleRedmode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      {/* <Routes> */}
      {/* <Route
            exact
            path="/"
            element={ */}
      <TextForm
        heading="Enter the text here to analyze below"
        mode={mode}
        showAlert={showAlert}
      />
      {/* }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
