import React from "react";
import NarBar from "./navbar/NavBar.js";
import MainPage from "./main_page/MainPage.js";
import LogIn from "./login/LogIn.js";
import UserSettings from "./user_settings/UserSettings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
    // the active selected ingredients should be maintained here
    //const [activeList, setActiveList] = useState([]);

    // user selected tags
    //const [tags, setTags] = useState([]);
    // user blacklist
    //const [blackList, setBlackList] = useState(["Breads", "Cookies", "Vegan"]);

    return (
        <Router>
            <NarBar />
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/users" exact>
                    <LogIn />
                </Route>
                <Route path="/settings">
                    <UserSettings />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
