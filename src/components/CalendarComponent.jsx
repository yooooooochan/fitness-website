import React, { useState } from "react";
import Calendar from "react-calendar";
import "../style/Calendar.css";
import moment from "moment";
import { TextField } from "@mui/material";

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Calendar
                onChange={setDate}
                value={date}
                formatDay={(locale, date) => moment(date).format("DD")}
                showNeighboringMonth={false}
                tileContent={({ date, view }) =>
                    view === "month" ? (
                        <div className="content">
                            <TextField
                                size="small"
                                multiline={true}
                                maxRows={3}
                                sx={{
                                    "& .MuiInputBase-root": {
                                        height: 100,
                                    },
                                }}
                            ></TextField>
                        </div>
                    ) : null
                }
            />
            <div className="text-gray-500 mt-4">
                {moment(date).format("YYYY년 MM월 DD일")}
            </div>
        </div>
    );
};

export default CalendarComponent;
