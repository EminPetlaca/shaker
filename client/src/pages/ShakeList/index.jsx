import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllShakes } from "../../models/Shake";
import ShakeLink from "./ShakeLink";

export default function Home() {
  const [shakes, setShakes] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await getAllShakes();
      if (data.status === 200) {
        setShakes(data.payload);
        setLoaded(true);
      } else {
        setLoaded(null);
      }
    };
    load();
  }, []);

  if (isLoaded === null) {
    return <p>Shakes not found</p>;
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Shake List</h1>
      {shakes.map((shake) => (
        <ShakeLink key={shake._id} {...shake} />
      ))}

      <Link to="/add-shake">Add a new shake</Link>
    </>
  );
}
