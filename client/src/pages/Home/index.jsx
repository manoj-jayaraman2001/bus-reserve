import busHero from "../../assets/bushero.jpg";
import SearchTrip from "../../components/SearchTrip";
import { StatsComponent } from "../../components/Static";
import { CustomerReviews } from "../../components/Static";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <SearchTrip />
      </div>
      <h2 className="heading">
        Welcome to India's Largest Bus Tickets Company
      </h2>
      <StatsComponent />
      <h2 className="heading">
        Here's what a few of our customers have to say about us
      </h2>
      <CustomerReviews/>
    </div>
  );
};

export default Home;
