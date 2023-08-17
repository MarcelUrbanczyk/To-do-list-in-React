import TasksListPage from "./features/Tasks/TasksListPage";
import TaskPage from "./features/Tasks/TaskPage";
import Author from "./features/Author";
import { Route, Link, HashRouter, Switch, Redirect } from "react-router-dom";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/tasks"> Tasks </Link>
        </li>
        <li>
          <Link to="/author">Author</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/tasks/:id">
        <TaskPage />
      </Route>
      <Route path="/tasks">
        <TasksListPage />
      </Route>
      <Route path="/author">
        <Author />
      </Route>
      <Route path="/">
        <Redirect to="/tasks" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
