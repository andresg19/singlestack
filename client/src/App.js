import Landing from "./Components/Landing/Landing";
import Qa from "./Components/QA/Qa"
import {BrowserRouter as Router, useRoutes} from 'react-router-dom';
import Resources from "./Components/Resources/Resources";
import Login from "./Components/UsersLoginout/Login/Login";
import Register from "./Components/UsersLoginout/Register/Register";
import Profile from "./Components/UserProfile/Profile";




function App() {
    const element = useRoutes([
      {path: "/",  element: <Landing /> },
      {path: "/q-a", element: <Qa />},
      {path: "/resources", element: <Resources />},
      {path: "/login", element: <Login />},
      {path: "/register", element: <Register />},
      {path: "/profile", element: <Profile />},
    ])
    return element
}

export default App;
