import { useState } from "react";
import { WarningAmberRounded } from "@mui/icons-material";
import SearchTripForm from "../../components/SearchTrip";
import { StatsComponent } from "../../components/Static";
import { CustomerReviews } from "../../components/Static";
import dayjs from "dayjs";
import "./home.css";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(dayjs(new Date()));
  // warning meaasge in case of invalid form Data
  const [displayWarning, setDisplayWarning] = useState(false);

  function handleSearch() {
    if (from === "" || to === "") {
      setDisplayWarning(true);
    } else {
      //navigate
    }
  }
  if (displayWarning && from !== "" && to !== "") setDisplayWarning(false);
  return (
    <div className="home">
      <div className="hero">
        <SearchTripForm
          date={date}
          setDate={setDate}
          setFrom={setFrom}
          setTo={setTo}
        />
        <div className={`warning ${displayWarning ? "active" : ""}`}>
          <WarningAmberRounded />
          <span>Specify 'From' and 'To' </span>
        </div>
        <button className="btn extra-btn" onClick={handleSearch}>
          SEARCH BUSES
        </button>
      </div>
      <h2 className="heading">
        Welcome to India's Largest Bus Tickets Company
      </h2>
      <StatsComponent />
      <h2 className="heading">
        Here's what a few of our customers have to say about us
      </h2>
      <CustomerReviews />
    </div>
  );
};

export default Home;
