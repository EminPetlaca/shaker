import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteShake, getShakeById } from "../../models/Shake";
import { useState, useEffect } from "react";

export default function ShakeView() {
  const { id } = useParams();
  const [shake, setShake] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getShakeById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setShake(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (shake.type === formData) {
      const data = await deleteShake(id);
      if (data.status === 200) {
        alert("Shake deleted successfully!");
        navigate(`/`);
      } else {
        setInfo(data.message);
      }
    } else {
      setInfo("Incorrect input");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Shake not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Shake is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Shake view</h1>
      <p>{id}</p>
      <p>Shake type: {shake.type}</p>
      <p>Ingredients: {shake.ingredients.join(", ")}</p>
      <form>
        <input type="text" placeholder={shake.type} onChange={handleChange} />
        <button onClick={handleDelete}>Delete Shake</button>
      </form>
      <p>{info}</p>
      <Link to={`/update-shakes/${id}`}>
        <p>Update Shake</p>
      </Link>

      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
