import React, { useEffect, useState } from "react";
import { getAllForms } from "../../models/Form";

export default function SupportPage() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadForms = async () => {
      const result = await getAllForms();
      if (result.status === 200) {
        setForms(result.payload);
      }
      setLoading(false);
    };

    loadForms();
  }, []);

  return (
    <div className="min-h-screen bg-[#ec5f74] text-white px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 drop-shadow">Support – Příchozí formuláře</h1>

      {loading ? (
        <p className="text-center text-lg">Načítám...</p>
      ) : forms.length === 0 ? (
        <p className="text-center text-lg">Žádné formuláře nenalezeny.</p>
      ) : (
        <div className="grid gap-6 max-w-3xl mx-auto">
          {forms.map((form) => (
            <div key={form._id} className="bg-white/30 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-1">{form.name}</h2>
              <p className="text-sm text-white/80">Email: {form.email}</p>
              <p className="mt-2 text-white">{form.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
