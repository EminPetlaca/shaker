import React, { useEffect, useState } from "react";
import { getAllForms, deleteForm } from "../../models/Form";
import { Mail, Text, User, X } from 'lucide-react';
import { toast } from "react-hot-toast";

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

  const handleDelete = async (id) => {
    const result = await deleteForm(id);
    if (result.status === 200) {
      setForms(forms.filter((form) => form._id !== id));
      toast.success("Formulář byl smazán");
    } else {
      toast.error("Nepodařilo se smazat formulář");
    }
  };

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
            <div key={form._id} className="bg-white/30 p-4 rounded-lg shadow relative">
              <button
                type="button"
                onClick={() => handleDelete(form._id)}
                className="absolute top-2 right-2 text-white/80 hover:text-white transition cursor-pointer"
              >
                <X size={20} />
              </button>
              <p className="flex items-center gap-2 text-lg font-semibold mb-1">
                <User size={18} /> <span className=" text-[#7B3F00]  rounded font-bold">{form.name}</span>
              </p>
              <p className="flex items-center gap-2 text-sm text-white/80">
                <Mail size={16} /> {form.email}
              </p>
              <p className="flex items-center gap-2 mt-2 text-white">
                <Text size={16} /> {form.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
