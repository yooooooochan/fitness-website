import { TextField, Button } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
const ExerciseComponent = (props) => {
    const [infos, setInfos] = useState({
        activity: "",
        weight: 0,
        duration: 0,
    });
    const [activity, setActivity] = useState("");
    const [weight, setWeight] = useState("");
    const [duration, setDuration] = useState("");

    const handleActivityChange = (event) => {
        setActivity(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };

    const onClick = (e) => {
        fetch(
            "https://api.api-ninjas.com/v1/caloriesburned?activity=" +
                activity +
                "&weight=" +
                weight * 2.25 +
                "&duration=" +
                duration,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "mHhSVAsfZe9ySo8lij6cHw==6YJ8Cx7ELggSzH11",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    };
    return (
        <>
            <TextField
                label="운동 이름"
                id="labelactivity"
                name="activity"
                value={activity}
                onChange={handleActivityChange}
            />
            <TextField
                label="몸무게"
                id="labelweight"
                name="weight"
                value={weight}
                onChange={handleWeightChange}
            />
            <TextField
                label="지속 시간"
                id="labelduration"
                name="duration"
                value={duration}
                onChange={handleDurationChange}
            />
            <Button id="buttonfindcal" onClick={onClick} variant="outlined">
                칼로리 계산하기
            </Button>
        </>
    );
};
export default ExerciseComponent;
