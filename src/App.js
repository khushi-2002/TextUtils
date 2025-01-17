import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  // const [redMode, setRedMode] = useState("light");
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

  const removeclasses = () => {
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  };
  const togglemode = (cls) => {
    console.log(cls);
    removeclasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // document.title = "TextUtils - Dark Mode";

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
      // document.title = "TextUtils - Light Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils now";
      // }, 1500);

      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title={"KhushiTextUtils"}
          aboutText={"About Us"}
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text here to analyze below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
