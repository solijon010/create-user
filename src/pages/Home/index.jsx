import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://json-api.uz/api/project/create-user/allUsers");
      setUsers(res.data.data || []);
      console.log(res.data.data); 
    } catch (err) {
      setError("Userlarni olishda xatolik!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <Link to="/create-user" className="btn btn-primary">
          User qo‘shish
        </Link>
      </div>

      {loading && <p>Yuklanmoqda...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-3 mt-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-3 border rounded-lg shadow bg-base-200"
          >
            <p><b>Name:</b> {user.name}</p>
            <p><b>Age:</b> {user.age}</p>
            <p><b>Email:</b> {user.email}</p>
          </div>
        ))}
      </div>

      {!loading && users.length === 0 && <p>Hozircha user yo‘q</p>}
    </div>
  );
}
