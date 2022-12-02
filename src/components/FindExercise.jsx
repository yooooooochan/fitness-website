import { Select, MenuItem, Button, Stack, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
const ExerciseComponent = (props) => {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    const muscles = [
        { kor: '복근', eng: 'abdominals' },
        { kor: '외전근', eng: 'abductors' },
        { kor: '내전근', eng: 'adductors' },
        { kor: '이두근', eng: 'biceps' },
        { kor: '삼두근', eng: 'triceps' },
        { kor: '사두근', eng: 'quadriceps' },
        { kor: '종아리', eng: 'calves' },
        { kor: '대흉근', eng: 'chest' },
        { kor: '전완근', eng: 'forearms' },
        { kor: '둔근', eng: 'glutes' },
        { kor: '햄스트링', eng: 'hamstrings' },
        { kor: '광배근', eng: 'lats' },
        { kor: '허리하부근육', eng: 'lower_back' },
        { kor: '허리중부근육', eng: 'middle_back' },
        { kor: '목', eng: 'neck' },
        { kor: '승모근', eng: 'traps' },
    ];
    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(muscles);
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
                <Select
                    label="근육"
                    id="labelactivity"
                    value={value}
                    onChange={handleChange}
                >
                    {muscles.map(n => <MenuItem value={n.eng}>{n.kor}</MenuItem>)}
                </Select>
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
