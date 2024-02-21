import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "../styles/homeStyle";
import Login from "../components/Login";
import { useDispatch } from "react-redux";
import { toggleLoader } from "../redux/slice/loaderSlice";

const Home = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  // fetch users list
  const fetchUserList = async () => {
    try {
      dispatch(toggleLoader(true));
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response) {
        dispatch(toggleLoader(false));

        setUsers(response.data);
      }
    } catch (error) {
      dispatch(toggleLoader(false));
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return <Container>{users?.length > 0 && <Login info={users} />}</Container>;
};

export default Home;
