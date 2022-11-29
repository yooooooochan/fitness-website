import {
    TextField,
    Button,
    Paper,
    List,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
const FindCaloryButton = (props) => {

}
const TextField_EX = (props) => {
    const { text, onChange, id, label, name, ...others } = props;
    return (
        <>
            <TextField label={label} id={id} value={text} name={name} onChange={onChange}>
            </TextField>
        </>
    );

    TextField_EX.propTypes = {
        search: PropTypes.any.isRequired,
        onChange: PropTypes.func.isRequired,
        id: PropTypes.any.isRequired,
        name: PropTypes.any.isRequired,
        label: PropTypes.any.isRequired
    }
}
const ExerciseComponent = (props) => {
    // const [activity, setActivity] = useState("");
    const [infos, setInfos] = useState({
        activity: "",
        weight: 0,
        duration: 0,
    });
    const { activity, weight, duration } = infos;
    const onChange = (e) => {
        const { value, name } = e.target;
        setInfos({
            ...infos,
            [name]: value
        });
    }
    const onClick = (e) => {
        fetch('https://api.api-ninjas.com/v1/caloriesburned?activity=' + infos.activity+ '&weight=' + infos.weight * 2.25 + '&duration=' + infos.duration, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'X-Api-Key': 'mHhSVAsfZe9ySo8lij6cHw==6YJ8Cx7ELggSzH11'
        },
        })
        .then((response) => response.json())
        .then((data) => alert(data[0]['total_calories']));
    }
    // const searchedCalory
    return (
        <>
            <TextField_EX label="운동이름" id="labelactivity" name="activity" value={activity} onChange={onChange} />
            <TextField_EX label="몸무게" id="labelweight" name="weight" value={weight} onChange={onChange}/>
            <TextField_EX label="지속시간" id="labelduration" name="duration" value={duration} onChange={onChange}/>
            <Button id="buttonfindcal" onClick={onClick} variant="outlined">칼로리계산하기</Button>
            
        </>
    );
}
export default ExerciseComponent;