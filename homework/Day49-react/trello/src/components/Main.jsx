import React, { useState, useContext } from "react";
import { MoreHorizontal, UserPlus, Edit2, Trash2 } from "react-feather";
import CardAdd from "./CardAdd";
import { BoardContext } from "../context/BoardContext";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import AddList from "./AddList";
import Utils from "../utils/Utils";

const Main = () => {
  const { allBoard, setAllBoard } = useContext(BoardContext);
  const bdata = allBoard.boards[allBoard.active];
  const [editCard, setEditCard] = useState({
    listId: null,
    cardId: null,
    newTitle: "",
  });

  function onDragEnd(res) {
    if (!res.destination) {
      console.log("No Destination");
      return;
    }

    const newList = [...bdata.list];
    const s_id = parseInt(res.source.droppableId);
    const d_id = parseInt(res.destination.droppableId);

    if (
      s_id < 1 ||
      s_id > newList.length ||
      d_id < 1 ||
      d_id > newList.length
    ) {
      console.error("Invalid source or destination index");
      return;
    }

    const sourceList = newList[s_id - 1];
    const destinationList = newList[d_id - 1];

    if (!sourceList || !destinationList) {
      console.error("Invalid list access");
      return;
    }

    if (!sourceList.items || res.source.index >= sourceList.items.length) {
      console.error("Source index out of bounds");
      return;
    }

    const [removed] = sourceList.items.splice(res.source.index, 1);

    if (!destinationList.items) {
      destinationList.items = [];
    }

    const destinationIndex = Math.min(
      res.destination.index,
      destinationList.items.length
    );
    destinationList.items.splice(destinationIndex, 0, removed);

    let board_ = { ...allBoard };
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
  }

  const cardData = (e, ind) => {
    let newList = [...bdata.list];
    if (!newList[ind]) {
      console.error(`Invalid list index: ${ind}`);
      return;
    }
    if (!newList[ind].items) {
      newList[ind].items = [];
    }
    newList[ind].items.push({ id: Utils.makeid(5), title: e });

    let board_ = { ...allBoard };
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
  };

  const listData = (e) => {
    let newList = Array.isArray(bdata.list) ? [...bdata.list] : [];
    newList.push({ id: (newList.length + 1).toString(), title: e, items: [] });

    let board_ = { ...allBoard };
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
  };

  const handleEditClick = (listId, cardId, currentTitle) => {
    setEditCard({ listId, cardId, newTitle: currentTitle });
  };

  const handleDeleteClick = (listId, cardId) => {
    let newList = [...bdata.list];
    const listIndex = newList.findIndex((list) => list.id === listId);
    if (listIndex === -1) return;

    newList[listIndex].items = newList[listIndex].items.filter(
      (item) => item.id !== cardId
    );

    let board_ = { ...allBoard };
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
  };

  const handleTitleChange = (e) => {
    setEditCard({ ...editCard, newTitle: e.target.value });
  };

  const handleTitleSave = () => {
    let newList = [...bdata.list];
    const listIndex = newList.findIndex((list) => list.id === editCard.listId);
    if (listIndex === -1) return;

    const cardIndex = newList[listIndex].items.findIndex(
      (item) => item.id === editCard.cardId
    );
    if (cardIndex === -1) return;

    newList[listIndex].items[cardIndex].title = editCard.newTitle;

    let board_ = { ...allBoard };
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
    setEditCard({ listId: null, cardId: null, newTitle: "" });
  };

  return (
    <div
      className="flex flex-col w-full"
      style={{ backgroundColor: bdata.bgcolor }}
    >
      <div className="p-3 bg-black flex justify-between w-full bg-opacity-50">
        <h2 className="text-lg">{bdata.name}</h2>
        <div className="flex items-center justify-center">
          <button className="bg-gray-200 h-8 text-gray-800 px-2 py-1 mr-2 rounded flex justify-center items-center">
            <UserPlus size={16} className="mr-2"></UserPlus>
            Share
          </button>
          <button className="hover:bg-gray-500 px-2 py-1 h-8 rounded">
            <MoreHorizontal size={16}></MoreHorizontal>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full flex-grow relative">
        <div className="absolute mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 flex overflow-x-scroll overflow-y-hidden">
          <DragDropContext onDragEnd={onDragEnd}>
            {bdata.list &&
              bdata.list.map((x, ind) => {
                return (
                  <div
                    key={ind}
                    className="mr-3 w-60 h-fit rounded-md p-2 bg-black flex-shrink-0"
                  >
                    <div className="list-body">
                      <div className="flex justify-between p-1">
                        <span>{x.title}</span>
                        <button className="hover:bg-gray-500 p-1 rounded-sm">
                          <MoreHorizontal size={16}></MoreHorizontal>
                        </button>
                      </div>
                      <Droppable droppableId={x.id}>
                        {(provided, snapshot) => (
                          <div
                            className="py-1"
                            ref={provided.innerRef}
                            style={{
                              backgroundColor: snapshot.isDraggingOver
                                ? "#222"
                                : "transparent",
                            }}
                            {...provided.droppableProps}
                          >
                            {x.items &&
                              x.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        {editCard.cardId === item.id &&
                                        editCard.listId === x.id ? (
                                          <div className="item flex justify-between items-center bg-zinc-700 p-1 cursor-pointer rounded-md border-2 border-zinc-900 hover:border-gray-500">
                                            <input
                                              type="text"
                                              value={editCard.newTitle}
                                              onChange={handleTitleChange}
                                              className="p-1 w-full rounded-md"
                                            />
                                            <button
                                              className="bg-green-600 p-1 rounded-sm"
                                              onClick={handleTitleSave}
                                            >
                                              Save
                                            </button>
                                          </div>
                                        ) : (
                                          <div className="item flex justify-between items-center bg-zinc-700 p-1 cursor-pointer rounded-md border-2 border-zinc-900 hover:border-gray-500">
                                            <span>{item.title}</span>
                                            <span className="flex justify-start items-start">
                                              <button
                                                className="hover:bg-gray-600 p-1 rounded-sm"
                                                onClick={() =>
                                                  handleEditClick(
                                                    x.id,
                                                    item.id,
                                                    item.title
                                                  )
                                                }
                                              >
                                                <Edit2 size={16}></Edit2>
                                              </button>
                                              <button
                                                className="hover:bg-gray-600 p-1 rounded-sm"
                                                onClick={() =>
                                                  handleDeleteClick(
                                                    x.id,
                                                    item.id
                                                  )
                                                }
                                              >
                                                <Trash2 size={16}></Trash2>
                                              </button>
                                            </span>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </Draggable>
                                );
                              })}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                      <CardAdd getcard={(e) => cardData(e, ind)}></CardAdd>
                    </div>
                  </div>
                );
              })}
          </DragDropContext>
          <AddList getlist={(e) => listData(e)}></AddList>
        </div>
      </div>
    </div>
  );
};

export default Main;
