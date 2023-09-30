import { useState } from "react";
import PlaceAutoComplete from "../PlaceAutoComplete";
import { CalendarMonthOutlined } from "@mui/icons-material";
import getOffBus from "../../assets/get-of-bus.png";
import getOnBus from "../../assets/get-on-bus.png";
import MuiDayPicker from "../MuiDayPicker";
import dayjs from "dayjs";
import "./searchtrip.css";

const SearchTrip = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(dayjs(new Date()));

  console.log({ from, to, date });
  return (
    <div style={{display:'flex', flexDirection: 'column', gap: 25}}>
      <div className="search-parameters">
        <div className="search-input from">
          <div className="search-heading">
            <img src={getOnBus} className="imgIcon" />
            <p className="input-heading">From</p>
          </div>
          <PlaceAutoComplete setPlace={setFrom} />
        </div>
        <div className="search-input to">
          <div className="search-heading">
            <img src={getOffBus} className="imgIcon" />
            <p className="input-heading">To</p>
          </div>
          <PlaceAutoComplete setPlace={setTo} />
        </div>
        <div className="search-input date">
          <div className="search-heading">
            <CalendarMonthOutlined className="icon" />
            <p className="input-heading">Travel Date</p>
          </div>
          <MuiDayPicker date={date} setDate={setDate} />
        </div>
      </div>
      <button className="btn extra-btn">SEARCH BUSES</button>
    </div>
  );
};

export default SearchTrip;
