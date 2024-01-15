import "./App.css";
import Navbar from "./Layout/navbar/Navbar";
import Home from "./page/home/Home";
import TaskTree from "./page/tasktree/TaskTree";
import SignIn from "./page/signin/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GreenQuest from "./page/greenquest/GreenQuest";
import axios from 'axios'

function App() {
  return (

    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasktree" element={<TaskTree />} />
        <Route path="/greenquest" element={<GreenQuest />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
