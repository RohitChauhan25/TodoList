import Home from "../pages/home";
import TodoList from "../pages/todoList";

export const HomeRoute = {
  component: Home,
  path: "/",
  exact: true,
  restricted: false,
};

export const TodoRoute = {
  component: TodoList,
  path: "/todo",
  exact: true,
  restricted: true,
};

const ROUTES = [HomeRoute, TodoRoute];

export default ROUTES;
