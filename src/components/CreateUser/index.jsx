import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreate = async () => {
    if (!name || !age || !email) {
      setError("Barcha maydonlarni to‘ldiring!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await axios.post("https://json-api.uz/api/project/create-user/allUsers", {
        name,
        age: Number(age),
        email
      });
      navigate("/"); 
    } catch (err) {
      setError(err.response?.data?.message || "Server xatolik berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Yangi User yaratish</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input input-bordered w-full mb-2"
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="input input-bordered w-full mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered w-full mb-4"
      />

      <div className="flex gap-2">
        <button className="btn btn-primary" onClick={handleCreate} disabled={loading}>
          {loading ? "Yaratilmoqda..." : "Yaratish"}
        </button>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Orqaga
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
