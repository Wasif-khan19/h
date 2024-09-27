/* eslint-disable react/prop-types */
import { USER_API_ENDPOINT } from "@/utils/api";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { setLoading, setUser } from "../redux/authSlice";
import { Button } from "../ui/button";

const UserDetails = ({ onSkip }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const response = await axios.post(`${USER_API_ENDPOINT}/createUser`, {
        name,
        country,
      });
      if (response.data.success) {
        dispatch(setUser(response.data.user));
        toast.message(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        dispatch(setLoading(false));
        setError("Something went wrong");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <div className="flex space-x-2">
            <Button
              type="submit"
              className="flex-1 bg-blue-500 text-white p-2 rounded"
            >
              Enter
            </Button>
            <Button
              type="button"
              onClick={onSkip}
              className="flex-1 bg-gray-300 text-gray-700 p-2 rounded"
            >
              Skip
            </Button>
          </div>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default UserDetails;
