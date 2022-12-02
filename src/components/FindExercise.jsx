import { TextField, Button, Stack, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
const ExerciseComponent = (props) => {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = (event) => {
        fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + value, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": "mHhSVAsfZe9ySo8lij6cHw==6YJ8Cx7ELggSzH11",
            },
        })
            .then((response) => response.json())
            .then((data) => setList(data));
    };
    return (
        <>
            <Stack direction="column" spacing={2}>
                <TextField
                    label="운동"
                    id="labelactivity"
                    name="exercise"
                    value={value}
                    onChange={handleChange}
                />
                <Button
                    id="buttonfindcal"
                    onClick={handleClick}
                    variant="outlined"
                >
                    운동 찾기
                </Button>
                <List
                    sx={{
                        width: "200%",
                        maxWidth: 360,
                        bgcolor: "#cccccc",
                    }}
                >
                    {list.length !== 0 ? (
                        list.map((value) => {
                            console.log(value);
                            return (
                                <>
                                    <ListItem>
                                        <Stack direction={"column"}>
                                            <ListItemText
                                                primary={"Name: " + value.name}
                                                secondary={
                                                    "Muscle: " + value.muscle
                                                }
                                            />
                                            <ListItemText
                                                secondary={value.instructions}
                                            />
                                        </Stack>
                                    </ListItem>
                                    <Divider />
                                </>
                            );
                        })
                    ) : (
                        <ListItem>
                            <Typography>검색 결과가 없습니다.</Typography>
                        </ListItem>
                    )}
                </List>
            </Stack>
        </>
    );
};
export default ExerciseComponent;
