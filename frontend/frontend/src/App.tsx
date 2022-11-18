import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../src/pages/LoginPage/LoginPage";

function App() {
  const [myState, setMyState] = useState<string>("0");
  const [counter, setCounter] = useState<number>(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const getAllCharacters = async () => {
      return fetch("https://anapioficeandfire.com/api/characters/583", {
        method: "GET",
      });
    };

    getAllCharacters()
      .then(async (x) => {
        return await x.json();
      })
      .then((c) => console.log(c.aliases));
  }, [counter]);

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Button>click</Button>
                <button
                  ref={buttonRef}
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  0
                </button>
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
          </>
        }
      ></Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
