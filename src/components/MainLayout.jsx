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
import Fooddb from "./Fooddb.jsx";
import MapComponent from "./MapComponent.jsx";
import CalendarComponent from "./CalendarComponent.jsx";
import "../style/style.css";
import ExerciseComponent from "./ExerciseComponent.jsx";

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
                                alt={"로고"}
                            />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            헬스케어 웹사이트
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
                                <Tab label="캘린더" {...a11yProps(0)} />
                                <Tab
                                    label="루틴 추천 및 검색"
                                    {...a11yProps(1)}
                                />
                                <Tab label="칼로리 계산" {...a11yProps(2)} />
                                <Tab label="운동 친구 찾기" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                    </Stack>
                </AppBar>
            </Box>
            <TabPanel value={value} index={0}>
                <CalendarComponent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ExerciseComponent />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Fooddb />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <MapComponent />
            </TabPanel>
        </>
    );
};

export default MainLayout;
