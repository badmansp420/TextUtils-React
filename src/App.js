// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// let a = ["Home", "About", "Contact", "Projects"];
export default function App() {

  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  // switching mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#0d1321";
      document.body.style.color = "#ffffff";
      showAlert("Dark Mode Enable Successfully", "success")
      window.localStorage.setItem("modde", "dark")
      window.localStorage.setItem("check", "checked")
      console.log(window.localStorage.getItem("check"));

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      showAlert("Light Mode Enable Successfully", "info")
      window.localStorage.setItem("modde", "light")
      window.localStorage.setItem("check", "")

      console.log(window.localStorage.getItem("check"));
    }


  }

  // Show Alert
  const showAlert = (massage, type) => {
    setalert({
      msg: massage,
      type: type,
    })

    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm title="Enter Your Text" mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About title="About Section" />}></Route>
        </Routes>
      </Router>

    </>
  );
}

// export default App;
