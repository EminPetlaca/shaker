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
    return <p className="text-center mt-10 text-red-500">Shake not found</p>;
  }

  if (!isLoaded) {
    return <p className="text-center mt-10 text-gray-500">Loading shake...</p>;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-400 to-pink-200 flex items-center justify-center px-4 py-10">
      <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-md w-full text-white">
        <h1 className="text-3xl font-bold text-center mb-6 drop-shadow">Shake Detail</h1>

        <p className="mb-2"><span className="font-semibold">ID:</span> {id}</p>
        <p className="mb-2"><span className="font-semibold">Type:</span> {shake.type}</p>
        <p className="mb-2"><span className="font-semibold">Customer Name:</span> {shake.customerName}</p>
        <p className="mb-4"><span className="font-semibold">Ingredients:</span> {shake.ingredients.join(", ")}</p>

        <form onSubmit={handleDelete} className="space-y-4">
          <input
            type="text"
            placeholder="Enter shake type to confirm delete"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white/50 text-black placeholder-gray-600"
          />
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition"
          >
            Delete Shake
          </button>
        </form>

        {info && <p className="text-sm mt-4 text-yellow-200 text-center">{info}</p>}

        <div className="flex justify-between mt-6 text-sm">
          <Link to={`/update-shakes/${id}`} className="underline hover:text-white">
            Update Shake
          </Link>
          <Link to="/" className="underline hover:text-white">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
