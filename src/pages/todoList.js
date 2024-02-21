import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageTitle } from "../styles/homeStyle";
import {
  Container,
  FilterSection,
  FilterWrapper,
  ItemContainer,
  Notfication,
  Productivity,
  Remove,
  Session,
  Status,
  TimerButton,
  TimerSection,
  Title,
  TodoContainer,
  WorkSession,
} from "../styles/todoStyle";
import { Button, Popconfirm, Select, message } from "antd";
import { StatusOp, filterOption } from "../constant/option";
import { toggleLoader } from "../redux/slice/loaderSlice";
import Timer from "../components/Timer";
import { MdCancel, MdDeleteForever } from "react-icons/md";

const TodoList = () => {
  const [todo, setTodos] = useState([]);
  const [filterTodo, setFilterTodo] = useState([]);
  const { userInfo } = useSelector((state) => state.userReducer);
  const [timer, setTimer] = useState(15); // Initial work session duration
  const [workSessions, setWorkSessions] = useState(0);
  const [isNotification, setNotfication] = useState(false);

  const dispatch = useDispatch();

  //
  const fetchTodosList = async () => {
    try {
      dispatch(toggleLoader(true));
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?userId=${userInfo?.id}`
      );

      if (response) {
        dispatch(toggleLoader(false));
        setTodos(response.data);
        setFilterTodo(response.data);
      }
    } catch (error) {
      dispatch(toggleLoader(false));
    }
  };

  const handleChange = (value) => {
    let temp =
      value === "all"
        ? todo
        : todo.filter((item) => item.completed === (value === "completed"));

    setFilterTodo(temp);
  };

  useEffect(() => {
    if (userInfo?.id) fetchTodosList();
  }, [userInfo]);

  useEffect(() => {
    if (workSessions) {
      setNotfication(true);
      setTimeout(() => {
        setNotfication(false);
      }, 3000);
    }
  }, [workSessions]);

  const handleStatus = (value, todoData) => {
    setFilterTodo((prev) =>
      prev?.map((item) => {
        return item?.id == todoData?.id
          ? { ...item, completed: value === "completed" ? true : false }
          : { ...item };
      })
    );
  };

  const confirm = (info) => {
    setFilterTodo((prev) => prev?.filter((item) => info.id !== item.id));
    setTodos((prev) => prev?.filter((item) => info.id !== item.id));
  };

  const cancel = (e) => {
    return;
  };

  return (
    <Container>
      <PageTitle>Todo List</PageTitle>

      {isNotification && (
        <Notfication>
          Hi there ! it's time for a quick{" "}
          {workSessions % 2 == 0 ? 10 + " " : 5 + " "}
          second break
        </Notfication>
      )}

      <FilterSection>
        <FilterWrapper>
          <Select
            options={filterOption}
            placeholder={"Select Status"}
            onChange={handleChange}
          />
        </FilterWrapper>
        <div>Work Session : {workSessions}</div>
      </FilterSection>

      <TodoContainer>
        {filterTodo?.map((item) => {
          return (
            <ItemContainer key={item?.id}>
              <Remove>
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={() => confirm(item)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <MdCancel size={20} cursor={"pointer"} />
                </Popconfirm>
              </Remove>
              <Title>
                <b>Title :</b> {item.title}
              </Title>
              <Status color={item.completed}>
                <b>Status :</b>
                <Select
                  className="custome"
                  options={StatusOp}
                  defaultValue={item.completed ? "Completed" : "Not Completed"}
                  onChange={handleStatus}
                />
              </Status>
              <Timer
                duration={15}
                setWorkSessions={setWorkSessions}
                workSessions={workSessions}
              />
            </ItemContainer>
          );
        })}
      </TodoContainer>
    </Container>
  );
};

export default TodoList;
