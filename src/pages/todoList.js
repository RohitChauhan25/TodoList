import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageTitle } from "../styles/homeStyle";
import {
  Container,
  FilterSection,
  FilterWrapper,
  ItemContainer,
  Productivity,
  Session,
  Status,
  TimerButton,
  TimerSection,
  Title,
  TodoContainer,
  WorkSession,
} from "../styles/todoStyle";
import { Select } from "antd";
import { filterOption } from "../constant/option";
import { toggleLoader } from "../redux/slice/loaderSlice";

const TodoList = () => {
  const [todo, setTodos] = useState([]);
  const [filterTodo, setFilterTodo] = useState([]);
  const { userInfo } = useSelector((state) => state.userReducer);
  const [timer, setTimer] = useState(15); // Initial work session duration
  const [workSessions, setWorkSessions] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [isRuning, setIsRunning] = useState(true);
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
    let intervalId;

    if (isRuning) {
      if (timer === 0) {
        clearInterval(intervalId);

        if (isBreak) {
          // Break is over, start the next work session
          setTimer(15);
          setIsBreak(false);
        } else {
          // Start the break
          if ((workSessions + 1) % 2 === 0) {
            // Suggest a longer break after every two work sessions
            setTimer(10);
          } else {
            // Take a regular break
            setTimer(5);
          }
          setIsBreak(true);
          setWorkSessions((prevSessions) => prevSessions + 1);
        }
      } else {
        intervalId = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      }
    }

    return () => clearInterval(intervalId);
  }, [timer, isBreak, isRuning, workSessions]);

  return (
    <Container>
      <PageTitle>Todo List</PageTitle>

      <Productivity>
        <div>
          {isBreak
            ? `Hi there! it time for a quick ${timer} second break`
            : `Time left: ${timer}`}
        </div>
      </Productivity>
      <WorkSession>work sessions : {workSessions}</WorkSession>

      <FilterSection>
        <FilterWrapper>
          <Select
            options={filterOption}
            placeholder={"Select Status"}
            onChange={handleChange}
          />
        </FilterWrapper>
        <TimerSection>
          <Session>work sessions : {workSessions}</Session>
          <TimerButton onClick={() => setIsRunning(!isRuning)}>
            {isRuning ? "Pause Timer" : "Start Timer"}
          </TimerButton>
          <TimerButton
            onClick={() => {
              setIsBreak(false);
              setTimer(15);
            }}
          >
            Reset
          </TimerButton>
        </TimerSection>
      </FilterSection>

      <TodoContainer>
        {filterTodo?.map((item) => {
          return (
            <ItemContainer key={item?.id}>
              <Title>
                <b>Title :</b> {item.title}
              </Title>
              <Status color={item.completed}>
                <b>Status :</b>
                <span> {item.completed ? "Completed" : "Not Completed"}</span>
              </Status>
            </ItemContainer>
          );
        })}
      </TodoContainer>
    </Container>
  );
};

export default TodoList;
