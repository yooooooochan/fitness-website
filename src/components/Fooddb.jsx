import {
    Paper,
    List,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import foodname from "../assets/fooddb_name.json"
import fooddata from "../assets/fooddb_data.json"

const getFoodInfo = searchword => {
    console.log(searchword);
    const searchresult = fooddata['records'].filter(food => food.식품명 === searchword)
    if (searchresult.length == 0) throw new Error("음식을 찾지 못했습니다")
    const range = ['식품명', '식품중량', '에너지(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)']
    let output = []
    range.forEach(info => output[info] = searchresult[0][info])
    return output
}
const SearchBar = ({ search, onChange }) => {
    return (
        <div>
            <input className="input" type="text" value={search} onChange={onChange}/>
        </div>
    )
    SearchBar.propTypes = {
    search: PropTypes.any.isRequired,
    onChange:PropTypes.func.isRequired,
    }
}
const Fooddb = () => {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");
    const onChange = e => {
        setSearch(e.target.value);
    }
    const onSelected = e => {
        setSelected(e.target.value);
        console.log(getFoodInfo(e.target.value));
        alert(e.target.value + " 의 칼로리는 " + getFoodInfo(e.target.value)['에너지(kcal)'])
    }
    const range = ['식품명', '식품중량', '에너지(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)']
    const searchedFoods = foodname.filter(n => n.includes(search));
    const selectedFood = selected;
    return (
        <>
            <SearchBar value={search} onChange={onChange} />
            <Paper style={{maxHeight: '400px', maxWidth: '300px', overflow: 'auto'}}>
                <List>
                    {searchedFoods.map(n => <li><button value={n} onClick={onSelected}>{n}</button></li>)}
                </List>
            </Paper>

        </>
    );
}

export default Fooddb;