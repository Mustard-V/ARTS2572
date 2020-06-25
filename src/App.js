import React from "react";
import NarBar from "./navbar/NavBar.js";
import MainPage from "./main_page/MainPage.js";
import LogIn from "./login/LogIn.js";
import UserSettings from "./user_settings/UserSettings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recipe from "./recipe/Recipe";
function App() {
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
                <Route path={`/recipe/:id`} component={Recipe}>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
