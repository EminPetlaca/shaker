import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateShake, getShakeById } from "../../models/Shake";

export default function ShakeUpdateForm() {
  const { id } = useParams();
  const [shake, setShake] = useState();
  const [isLoaded, setLoaded] = useState();
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

  const updateForm = async () => {
    const data = await updateShake(id, formData);
    if (data.status === 200) return navigate(`/shakes/${id}`);
    setInfo(data.message);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateForm();
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
      <h1>Update Shake</h1>
      <p>{id}</p>
      <form>
        <input 
          type="text" 
          name="type" 
          required 
          placeholder="Enter type" 
          onChange={handleChange} 
          defaultValue={shake.type}
        />
        <input 
          type="text" 
          name="ingredients" 
          required 
          placeholder="Enter ingredients (comma separated)" 
          onChange={handleChange} 
          defaultValue={shake.ingredients.join(", ")}
        />
        <button onClick={handleUpdate}>
          Update Shake
        </button>
      </form>
      <p>{info}</p>
    </>
  );
}
