import React, { useContext, useState } from "react";
import { ChevronRight, ChevronLeft, Plus, X } from "react-feather";
import { Popover } from "react-tiny-popover";
import { BoardContext } from "../context/BoardContext";

export default function Sidebar() {
  const blankBoard = {
    name: "My Trello Board",
    bgcolor: "#f60000",
    items: [],
  };
  const [boardData, setBoardData] = useState(blankBoard);
  const [collapsed, setCollapsed] = useState(false);
  const [show, setShow] = useState(false);
  const { allBoard, setAllBoard } = useContext(BoardContext);
  const setActiveBoard = (index) => {
    let newBoard = { ...allBoard };
    newBoard.active = index;
    setAllBoard(newBoard);
  };
  const addBoard = () => {
    let newB = { ...allBoard };
    newB.boards.push(boardData);
    setAllBoard(newB);
    setBoardData(blankBoard);
    setShow(!show);
  };
  return (
    <div
      className={`bg-[#121417] h-[calc(100vh-3rem)] border-r-[#9fadbc29] transition-all linear duration-500 ${
        collapsed ? `w-[42px]` : `w-[280px]`
      }`}
    >
      {collapsed && (
        <div className="p-2">
          <button
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            className="hover:bg-slate-600 rounded-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {!collapsed && (
        <div>
          <div className="workspace p-3 flex justify-between border-b border-b-[#9fadbc29]">
            <h4>Remote Dev's WorkSpace</h4>
            <button
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              className="hover:bg-slate-600 rounded-sm p-1"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
          <div className="boardlist">
            <div className="flex justify-between px-3 py-2">
              <h6>Your Board</h6>

              <Popover
                isOpen={show}
                align="start"
                positions={["right", "top", "bottom", "left"]}
                content={
                  <div className="ml-2 p-2 w-60 flex flex-col justify-center items-center bg-slate-500 text-white rounded">
                    <button
                      onClick={() => setShow(!show)}
                      className="absolute right-2 top-2 hover:bg-gray-500 p-1 rounded"
                    >
                      <X size={16} />
                    </button>
                    <h4 className="py-3">Create Board</h4>
                    <img src="https://placehold.co/200x200/png" alt="" />
                    <div className="mt-3 flex flex-col items-start w-full">
                      <label htmlFor="title">
                        Board Title <span>*</span>
                      </label>
                      <input
                        value={boardData.name}
                        onChange={(e) => {
                          setBoardData({ ...boardData, name: e.target.value });
                        }}
                        type="text"
                        className="mb-2 h-8 w-full px-2 bg-gray-700"
                      />
                      <label htmlFor="Color">Board Color</label>
                      <input
                        onChange={(e) => {
                          setBoardData({
                            ...boardData,
                            bgcolor: e.target.value,
                          });
                        }}
                        value={boardData.bgcolor}
                        type="color"
                        className="mb-2 h-8 w-full px-2 bg-gray-700"
                      />
                      <button
                        onClick={() => addBoard()}
                        className="bg-slate-700 h-8 mt-2 rounded p-1 text-white w-full hover:bg-slate-400"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                }
              >
                <button
                  onClick={() => setShow(!show)}
                  className="hover:bg-slate-600 rounded-sm p-1"
                >
                  <Plus size={16} />
                </button>
              </Popover>
            </div>
          </div>
          <ul>
            {allBoard.boards &&
              allBoard.boards.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      onClick={() => setActiveBoard(index)}
                      className="px-3 py-2 w-full text-sm flex justify-start align-baseline hover:bg-gray-500"
                    >
                      <span
                        className="w-6 h-max rounded-sm mr-2"
                        style={{ backgroundColor: item.bgcolor }}
                      >
                        &nbsp;
                      </span>
                      <span>{item.name}</span>
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}
