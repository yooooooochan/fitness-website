import {
    Stack,
    Box,
    Tab,
    Tabs,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import CaloryComponent from "./CaloryComponent.jsx";
import MapComponent from "./MapComponent.jsx";
import CalendarComponent from "./CalendarComponent.jsx";
import "../style/style.css";
import FindExercise from "./FindExercise.jsx";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
        sx: {
            color: "rgba(255, 255, 255, 0.668)",
            "&.Mui-selected": {
                color: "#fff",
            },
        },
    };
}

const MainLayout = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "#53a0ff" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    width: "50px",
                                    alignContent: "center",
                                    justifyContent: "center",
                                }}
                                src={logo}
                                alt={"??????"}
                            />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            ???????????? ????????????
                        </Typography>
                    </Toolbar>
                    <Stack direction={"column"}>
                        <Box sx={{ width: "100%", backgroundColor: "#2688ff" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                sx={{
                                    "& .MuiTabs-indicator": {
                                        backgroundColor: "#ffffff",
                                    },
                                }}
                            >
                                <Tab label="?????????" {...a11yProps(0)} />
                                <Tab
                                    label="?????? ?????? ??? ??????"
                                    {...a11yProps(1)}
                                />
                                <Tab label="????????? ??????" {...a11yProps(2)} />
                                <Tab label="?????? ?????? ??????" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                    </Stack>
                </AppBar>
            </Box>
            <TabPanel value={value} index={0}>
                <CalendarComponent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FindExercise />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CaloryComponent />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <MapComponent />
            </TabPanel>
        </>
    );
};

export default MainLayout;
