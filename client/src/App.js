import Landing from "./Components/Landing/Landing";
import Qa from "./Components/QA/Qa";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Resources from "./Components/Resources/Resources";
import Login from "./Components/UsersLoginout/Login/Login";
import Register from "./Components/UsersLoginout/Register/Register";
import Profile from "./Components/UserProfile/Profile";
import Question from "./Components/QA/Question";

function App() {
  const element = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/q-a", element: <Qa /> },
    { path: "/resources", element: <Resources /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/profile", element: <Profile /> },
    { path: "/question/:id", element: <Question /> },
  ]);
  return element;
}

export default App;
