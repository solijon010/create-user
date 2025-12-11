import { useState } from "react";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (callback) => {
    setLoading(true);
    setError(null);

    try {
      const response = await callback();
      return response;
    } catch (err) {
      setError(err.message || "Xatolik yuz berdi!");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};

export default useApi;
