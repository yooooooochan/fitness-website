import {
    TextField,
    Button,
    Paper,
    List,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import foodname from "../assets/fooddb_name.json"
import fooddata from "../assets/fooddb_data.json"
const ExerciseComponent = (props) => {
    const { exlist, setExlist } = props;
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
            .then((data) => {
                setExlist(data);
            });
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
                운동 검색
            </Button>
        </>
    );
    ExerciseComponent.propTypes = {
        exlist: PropTypes.any.isRequired,
        setExlist: PropTypes.func.isRequired,
    };
};

const getFoodInfo = searchword => {
    const searchresult = fooddata['records'].filter(food => food.식품명 === searchword)
    if (searchresult.length == 0) throw new Error("음식을 찾지 못했습니다")
    const range = ['식품명', '식품중량', '에너지(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)']
    let output = []
    range.forEach(info => output[info] = searchresult[0][info])
    return output
}
const SearchBar = ({ search, onChange }) => {
    return (
        <TextField id="foodsearchbar" label="음식이름" variant="standard" value={search} onChange={onChange}/>
    )
    SearchBar.propTypes = {
    search: PropTypes.any.isRequired,
    onChange:PropTypes.func.isRequired,
    }
}

const CaloryComponent = () => {
    const [totalcal, setTotalcal] = useState(0);
    const [all, setAll] = useState([])
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");
    const [exlist, setExlist] = useState([]);
    const onChange = e => {
        setSearch(e.target.value);
    }
    const onSelected_food = e => {
        setSelected(e.target.value);
        let cal = parseInt(getFoodInfo(e.target.value)['에너지(kcal)']);
        pushtoAll(e.target.value, cal);
    }
    const onSelected_ex = e => {
        let cal;
        exlist.forEach(n => {
            if (n.name == e.target.value) {
                cal = -parseInt(n.total_calories);
            }
        })
        pushtoAll(e.target.value, cal);
    }
    const pushtoAll = (name, calory) => {
        all.push({
            name: name,
            calory: calory,
        })
        let sum = 0;
        all.forEach(n => {
            sum += parseInt(n["calory"]);
        })
        setTotalcal(sum);
    };
    const range = ['식품명', '식품중량', '에너지(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)']
    const searchedFoodsName = foodname.filter(n => n.includes(search));
    const selectedFood = selected;
    return (
        <>
            <SearchBar value={search} onChange={onChange} />
            <Paper style={{maxHeight: '400px', maxWidth: '300px', overflow: 'auto'}}>
                <List>
                    {searchedFoodsName.map(n => <li><Button value={n} onClick={onSelected_food}>{n}</Button></li>)}
                </List>
            </Paper>
            <ExerciseComponent exlist={exlist} setExlist={setExlist} />
            <Paper style={{maxHeight: '800px', maxWidth: '300px', overflow: 'auto'}}>
                <List>
                    {exlist.map(n =>
                        <li>
                            <Button value={n.name} onClick={onSelected_ex} >
                                {n.name + "[" + n.total_calories + " Kcal]"}
                            </Button>
                        </li>)
                    }
                </List>
            </Paper>
            <Paper>
                오늘 총 칼로리: {totalcal}
            </Paper>
            <Paper>
                <List>
                    { all.map(n => <li>{n.name + ", 칼로리: " + n.calory}</li>) }
                </List>
            </Paper>
        </>
    );
}

export default CaloryComponent;