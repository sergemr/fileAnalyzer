import logo from "./logo.svg";
import "./App.css";
import Members from "./components/Members/Members";
import Home from "./pages/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Router>
          <Routes>
            <Route path="/members" element={<Members />} />
            <Route path="/" element={<Home replace to="/home" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
