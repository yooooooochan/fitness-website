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
        exercise: "",
        output: "",
    });
    const { exercise } = infos;
    const onChange = (e) => {
        const { value, name } = e.target;
        setInfos({
            ...infos,
            [name]: value
        });
    }
    const onClick = (e) => {
        fetch('https://api.api-ninjas.com/v1/exercises?muscle=' + infos.exercise, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'X-Api-Key': 'mHhSVAsfZe9ySo8lij6cHw==6YJ8Cx7ELggSzH11'
        },
        })
        .then((response) => response.json())
        .then((data) => infos.output = data);
    }
    // const searchedCalory
    return (
        <>
            <TextField_EX label="운동" id="labelactivity" name="exercise" value={exercise} onChange={onChange} />
            <Button id="buttonfindcal" onClick={onClick} variant="outlined">운동찾기</Button>
            <TextField id="output" name="output"/>
        </>
    );
}
export default ExerciseComponent;