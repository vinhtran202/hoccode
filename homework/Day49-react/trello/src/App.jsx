import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { BoardContext } from "./context/BoardContext";

export default function App() {
  const boardData = {
    active: 0,
    boards: [
      {
        name: "My Trello Board",
        bgcolor: "#069000",
        list: [
          {
            id: "1",
            title: "To do",
            item: [
              {
                id: "cdrFt",
                title: "Project Description 1",
              },
            ],
          },
          {
            id: "2",
            title: "In progress",
            item: [
              {
                id: "cdrFv",
                title: "Project Description 2",
              },
            ],
          },
          {
            id: "3",
            title: "Done",
            item: [
              {
                id: "cdrFb",
                title: "Project Description 3",
              },
            ],
          },
        ],
      },
    ],
  };

  const [allBoard, setAllBoard] = useState(boardData);
  return (
    <>
      <Header />
      <BoardContext.Provider value={{ allBoard, setAllBoard }}>
        <div className="content flex ">
          <Sidebar />
          <Main />
        </div>
      </BoardContext.Provider>
    </>
  );
}
