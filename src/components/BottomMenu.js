import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SportsSoccerOutlinedIcon from "@material-ui/icons/SportsSoccerOutlined";
import SlowMotionVideoOutlinedIcon from "@material-ui/icons/SlowMotionVideoOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        color: "gray",
        "&$selected": {
            color: "red",
        },
    },

    stickToBottom: {
        width: "100%",
        position: "fixed",
        bottom: 0,
    },

    selected: {},
});

function BottomMenu() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => handleChange(event, newValue)}
            showLabels
            className={classes.stickToBottom}
        >
            <BottomNavigationAction
                label="Matches"
                icon={<SlowMotionVideoOutlinedIcon />}
                className={classes.root}
            />
            <BottomNavigationAction
                label="Team"
                icon={<SportsSoccerOutlinedIcon />}
                className={classes.root}
            />
            <BottomNavigationAction
                label="Calender"
                icon={<EventAvailableOutlinedIcon />}
                className={classes.root}
            />
            <BottomNavigationAction
                label="Account"
                icon={<AccountCircleOutlinedIcon />}
                className={classes.root}
            />
        </BottomNavigation>
    );
}

export default BottomMenu;
