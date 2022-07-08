import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";

const App = () => {
    return (
        <div>
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    SeeMe Video Chat
                </Typography>
            </AppBar>

            <VideoPlayer />

            <Options>
                <Notifications />
            </Options>
        </div>
    );
};

export default App;
