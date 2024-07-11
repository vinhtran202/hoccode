import React from "react";
import { MoreHorizontal, UserPlus, Edit2 } from "react-feather";
import CardAdd from "./CardAdd";

export default function Main() {
  return (
    <div className="flex flex-col bg-slate-900 w-full ">
      <div className="p-3 bg-black flex justify-between w-full bg-opacity-50">
        <h2 className="text-lg ">My Trello</h2>
        <div className="flex items-center justify-center">
          <button className="bg-gray-200 text-gray-500 px-2 py-1 mr-2 rounded flex justify-center items-center">
            <UserPlus size={16} className="mr-2" />
            Share
          </button>
          <button className="hover:bg-gray-500 px-2 py-1 h-8 rounded">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full flex-grow relative">
        <div className="absolute mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 flex overflow-y-hidden overflow-x-scroll">
          <div className="mr-3 w-60 h-fit rounded-md p-2 bg-black flex-shrink-0">
            <div className="list-body">
              <div className="flex justify-between p-1">
                <span>To do</span>
                <button className="hover:bg-slate-500 rounded-sm p-1">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="item flex justify-between items-center bg-zinc-700 p-1 cursor-pointer rounded-md border-2 border-zinc-900 hover:border-gray-500">
                <span>Project Description</span>
                <span className="flex justify-start items-start">
                  <button className="hover:bg-gray-600 rounded-sm p-1">
                    <Edit2 size={16} />
                  </button>
                </span>
              </div>
              <CardAdd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
