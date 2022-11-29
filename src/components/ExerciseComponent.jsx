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
        weight: "",
        duration: ""
    });
    const { activity, weight, duration } = infos;
    const onChange = (e) => {
        const { value, name } = e.target;
        setInfos({
            [name]: value,
        });
    }
    const onClick = (e) => {
        alert(infos.activity);
        alert(infos.weight);
        alert(infos.duration);
        console.log(infos);
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