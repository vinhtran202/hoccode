import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { BoardContex } from "./context/BoardContex";

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
      <BoardContex.Provider value={{ allBoard, setAllBoard }}>
        <div className="content flex ">
          <Sidebar />
          <Main />
        </div>
      </BoardContex.Provider>
    </>
  );
}
