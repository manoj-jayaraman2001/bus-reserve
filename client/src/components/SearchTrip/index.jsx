import { useState } from "react";
// import { ArrowDropDown} from '@mui/icons-material';
import { CalendarMonthOutlined } from "@mui/icons-material";
import getOffBus from "../../assets/get-of-bus.png";
import getOnBus from "../../assets/get-on-bus.png";
import "./searchtrip.css";

const SearchTrip = () => {
  const [from, setFrom] = useState("Chennai,TamilNadu");
  const [to, setTo] = useState("Nellore,Andhrapradesh");

  return (
    <div className="search-parameters">
      <div className="search-input from">
        <div className="heading">
          <img src={getOnBus} className="imgIcon" />
          <p className="input-heading">From</p>
        </div>
        <input
          type="text"
          value={from}
          onChange={() => setFrom((e) => setFrom(e.target.value))}
        />
      </div>
      <div className="search-input to">
        <div className="heading">
          <img src={getOffBus} className="imgIcon" />
          <p className="input-heading">To</p>
        </div>
        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <div className="search-input date">
        <div className="heading">
          <CalendarMonthOutlined className="icon" />
          <p className="input-heading">Travel Date</p>
        </div>
      </div>
    </div>
  );
};

export default SearchTrip;
