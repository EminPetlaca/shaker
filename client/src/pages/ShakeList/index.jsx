import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllShakes, deleteShake } from "../../models/Shake";

export default function Home() {
  const [shakes, setShakes] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const loadShakes = async () => {
    const data = await getAllShakes();
    if (data.status === 200) {
      setShakes(data.payload);
      setLoaded(true);
    } else {
      setLoaded(null);
    }
  };

  useEffect(() => {
    loadShakes();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this shake?");
    if (!confirm) return;

    const result = await deleteShake(id);
    if (result.status === 200) {
      setShakes((prev) => prev.filter((shake) => shake._id !== id));
    } else {
      alert("Failed to delete shake.");
    }
  };

  if (isLoaded === null) {
    return <p className="text-center text-red-500 mt-10">Shakes not found</p>;
  }

  if (!isLoaded) {
    return <p className="text-center text-gray-500 mt-10">Loading shakes...</p>;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-400 to-pink-200 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-white mb-10 drop-shadow">Shake List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {shakes.map((shake) => (
          <div
            key={shake._id}
            className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg text-white relative hover:scale-105 transition-transform"
          >
            <Link to={`/shake/${shake._id}`}>
              <h2 className="text-2xl font-bold mb-2">{shake.type}</h2>
              <p className="text-sm mb-1"><span className="font-semibold">Customer:</span> {shake.customerName}</p>
              <p className="text-sm"><span className="font-semibold">Ingredients:</span> {shake.ingredients.join(", ")}</p>
            </Link>

            <button
              onClick={() => handleDelete(shake._id)}
              className="absolute top-2 right-2 text-xs text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded shadow"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/add-shake"
          className="inline-block bg-white text-pink-600 font-semibold py-2 px-4 rounded hover:bg-pink-100 transition"
        >
          Add a new shake
        </Link>
      </div>
    </div>
  );
}
