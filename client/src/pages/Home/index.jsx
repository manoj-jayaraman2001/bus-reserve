import busHero from "../../assets/bushero.jpg";
import SearchTrip from "../../components/SearchTrip";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="search-trip">
          <SearchTrip />
        </div>
      </div>
    </div>
  );
};

export default Home;
