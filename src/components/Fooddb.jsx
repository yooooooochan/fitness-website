import PropTypes from "prop-types";
import styled from "@emotion/styled"
import React, { useState } from "react";
import foodname from "../assets/fooddb_name.json"
import fooddata from "../assets/fooddb_data.json"

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
    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const searchedFood = foodname.filter(n => n.includes(search));
    const searchedFoodList = searchedFood.map(n => {
        return <li>{n}</li>;
    })
    return (
        <>
            <SearchBar value={search} onChange={onChange} />
            <box>{
                searchedFoodList
            }
            </box>

        </>
    );
}

export default Fooddb;