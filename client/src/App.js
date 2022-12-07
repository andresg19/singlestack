import Landing from "./Components/Landing/Landing";
import Qa from "./Components/QA/Qa";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Login from "./Components/UsersLoginout/Login/Login";
import Register from "./Components/UsersLoginout/Register/Register";
import Profile from "./Components/UserProfile/Profile";
import Question from "./Components/QA/Question";
import AskQuestion from "./Components/QA/AskQuestion";
import QuestionsUsers from "./Components/UserProfile/QuestionsUsers";
import PostsResourcesUser from "./Components/UserProfile/PostsResourcesUser";
import DefaultSectionUser from "./Components/UserProfile/DefaultSectionUser";
import Foro from "./Components/Foro/Foro";


function App() {
  const element = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/q-a", element: <Qa /> },
    { path: "/ask-question", element: <AskQuestion /> },
    { path: "/foro", element: <Foro /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/profile", element: <Profile /> },
    { path: "/question/:id", element: <Question /> },
    { path: "/questionsusers", element: <QuestionsUsers /> },
    { path: "/postsresourcesuser", element: <PostsResourcesUser />},
    { path: "/defaultsectionuser", element: <DefaultSectionUser /> },
  ]);
  return element;
}

export default App;
