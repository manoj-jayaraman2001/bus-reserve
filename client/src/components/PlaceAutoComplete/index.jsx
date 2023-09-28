import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useState, useMemo } from "react";

export default function PlaceAutoComplete({setPlace}) {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(true);

  const styles = {
    padding: "5px 0",
  };
  async function fetchPlaces() {
    try {
      const places = await fetch("http://localhost:3000/places/get-all-places");
      const placesArray = await places.json();
      setData(placesArray);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchPlaces();
  }, []);

  const placeOptions = useMemo(() => {
    return data;
  }, [data]);

  return (
    <Autocomplete
      sx={styles}
      id="place-autocomplete"
      size="small"
      options={placeOptions}
      loading={isloading}
      onInputChange={(e, value) => {setPlace(value)}}
      renderInput={(params) => (
        <TextField sx={{ width: "100%" }} {...params} variant="standard" />
      )}
    />
  );
}
