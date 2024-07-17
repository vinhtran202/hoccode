import React, { useState, useContext, useEffect } from "react";
import { MoreHorizontal, UserPlus, Edit2, Trash2 } from "react-feather";
import CardAdd from "./CardAdd";
import { BoardContext } from "../context/BoardContext";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import AddList from "./AddList";
import Utils from "../utils/Utils";

const Main = () => {
  const { allBoard, setAllBoard } = useContext(BoardContext);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("boardState"));
    if (savedState) {
      setAllBoard(savedState);
    }
  }, [setAllBoard]);

  useEffect(() => {
    localStorage.setItem("boardState", JSON.stringify(allBoard));
  }, [allBoard]);

  const bdata = allBoard.boards[allBoard.active];

  const onDragEnd = (result) => {
    const { source, destination, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (type === "COLUMN") {
      const newList = Array.from(bdata.list);
      const [removed] = newList.splice(source.index, 1);
      newList.splice(destination.index, 0, removed);

      const newBoard = {
        ...allBoard,
        boards: allBoard.boards.map((board, index) =>
          index === allBoard.active ? { ...board, list: newList } : board
        ),
      };

      setAllBoard(newBoard);
      return;
    }

    const sourceList = bdata.list.find(
      (list) => list.id === source.droppableId
    );
    const destinationList = bdata.list.find(
      (list) => list.id === destination.droppableId
    );

    const sourceItems = Array.from(sourceList.items);
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      const newList = bdata.list.map((list) =>
        list.id === source.droppableId ? { ...list, items: sourceItems } : list
      );

      const newBoard = {
        ...allBoard,
        boards: allBoard.boards.map((board, index) =>
          index === allBoard.active ? { ...board, list: newList } : board
        ),
      };

      setAllBoard(newBoard);
    } else {
      const destinationItems = Array.from(destinationList.items);
      destinationItems.splice(destination.index, 0, removed);

      const newList = bdata.list.map((list) => {
        if (list.id === source.droppableId) {
          return { ...list, items: sourceItems };
        } else if (list.id === destination.droppableId) {
          return { ...list, items: destinationItems };
        } else {
          return list;
        }
      });

      const newBoard = {
        ...allBoard,
        boards: allBoard.boards.map((board, index) =>
          index === allBoard.active ? { ...board, list: newList } : board
        ),
      };

      setAllBoard(newBoard);
    }
  };

  const cardData = (e, ind) => {
    const newList = [...bdata.list];
    if (!newList[ind]) {
      console.error(`Invalid list index: ${ind}`);
      return;
    }
    if (!newList[ind].items) {
      newList[ind].items = [];
    }
    newList[ind].items.push({ id: Utils.makeid(5), title: e });

    const newBoard = {
      ...allBoard,
      boards: allBoard.boards.map((board, index) =>
        index === allBoard.active ? { ...board, list: newList } : board
      ),
    };

    setAllBoard(newBoard);
  };

  const listData = (e) => {
    const newList = Array.isArray(bdata.list) ? [...bdata.list] : [];
    newList.push({ id: (newList.length + 1).toString(), title: e, items: [] });

    const newBoard = {
      ...allBoard,
      boards: allBoard.boards.map((board, index) =>
        index === allBoard.active ? { ...board, list: newList } : board
      ),
    };

    setAllBoard(newBoard);
  };

  const handleEditClick = (listId, cardId, currentTitle) => {
    // Implement edit functionality here
  };

  const handleDeleteClick = (listId, cardId) => {
    // Implement delete functionality here
  };

  const handleTitleChange = (e) => {
    // Implement title change handling here
  };

  const handleTitleSave = () => {
    // Implement title save handling here
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
            <Droppable
              droppableId="all-columns"
              direction="horizontal"
              type="COLUMN"
            >
              {(provided) => (
                <div
                  className="flex"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {bdata.list &&
                    bdata.list.map((x, ind) => (
                      <Draggable key={x.id} draggableId={x.id} index={ind}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
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
                                      x.items.map((item, index) => (
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
                                              <div className="item flex justify-between items-center bg-zinc-700 p-1 cursor-pointer rounded-md border-2 border-zinc-900 hover:border-gray-500">
                                                <span>{item.title}</span>
                                                <div className="flex items-center">
                                                  <button
                                                    onClick={() =>
                                                      handleEditClick(
                                                        x.id,
                                                        item.id,
                                                        item.title
                                                      )
                                                    }
                                                    className="hover:bg-gray-500 p-1 rounded-sm mr-2"
                                                  >
                                                    <Edit2 size={16} />
                                                  </button>
                                                  <button
                                                    onClick={() =>
                                                      handleDeleteClick(
                                                        x.id,
                                                        item.id
                                                      )
                                                    }
                                                    className="hover:bg-gray-500 p-1 rounded-sm"
                                                  >
                                                    <Trash2 size={16} />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          )}
                                        </Draggable>
                                      ))}
                                    {provided.placeholder}
                                    <CardAdd
                                      cardData={(e) => cardData(e, ind)}
                                      ind={ind}
                                    />
                                  </div>
                                )}
                              </Droppable>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <AddList listData={listData} />
        </div>
      </div>
    </div>
  );
};

export default Main;
