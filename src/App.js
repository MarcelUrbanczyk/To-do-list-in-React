import TasksListPage from "./features/Tasks/TasksListPage";
import TaskPage from "./features/Tasks/TaskPage";
import Author from "./features/Author";
import Navigation from "./features/Navigation";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

const App = () => (
  <HashRouter>
    <Navigation />
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
