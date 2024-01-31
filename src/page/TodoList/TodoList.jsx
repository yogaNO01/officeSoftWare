import React, { useEffect, useState } from "react";
import "./index.scss";
import { SettingOutlined } from "@ant-design/icons";
import { Cascader, Input, Checkbox } from "antd";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [saveValue, setSaveValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [clickItem, setClickItem] = useState("");
  const [doneList, setDoneList] = useState([]);
  let todoPath = require("../../assets/todo.png");
  let donePath = require("../../assets/done.png");
  const onPressEnter = (e) => {
    setSaveValue(e.target.value);
  };
  const onChange = (e) => {
    setInputValue(e.target.value)
  }
  const onCheckboxChange = (e, item) => {
    setClickItem({
      ...item,
      checked: e.target.checked,
    });
  };
  useEffect(() => {
    if (inputValue && saveValue) {
      let item = {
        uuid: uuidv4(),
        value: inputValue,
        time: new Date().getHours() + "-" + new Date().getMinutes(),
      };
      setTodoList([...todoList, item]);
      setInputValue("");
      setSaveValue("");
    }
  }, [todoList, saveValue,inputValue]);

  useEffect(() => {
    if (clickItem) {
      console.log(clickItem, "clickItem");
      setTodoList((e) => e.filter((item) => item.uuid != clickItem.uuid));
      setDoneList([...doneList, clickItem]);
    }
  }, [clickItem]);
  console.log("doneList", doneList);
  return (
    <div className="container">
      <div className="List">
        <Input
          allowClear
          value={inputValue}
          style={{ height: "2vw" }}
          placeholder="Basic usage"
          onChange={onChange}
          onPressEnter={onPressEnter}
        />
        <div className="ToDo">
          <div className="title">
            <img src={todoPath} alt="" />
            <span>ToDo</span>
          </div>
          {todoList?.length
            ? todoList.map((item) => {
                return (
                  <div key={item.uuid} className="todoItem">
                    <Checkbox
                      key={item.uuid}
                      checked={false}
                      onChange={(e) => onCheckboxChange(e, item)}
                    />
                    <span className="value">{item.value}</span>
                    {/* <span>{item.time}</span> */}
                  </div>
                );
              })
            : ""}
        </div>
        <div className="ToDo">
          <div className="title">
            <img src={donePath} alt="" />
            <span>Done</span>
          </div>
          {doneList?.length
            ? doneList.map((item) => {
                return (
                  <div id={item.uuid} className="doneItem">
                    <span>{item.value}</span>
                    <span>{item.time}</span>
                    <div className="line" />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
