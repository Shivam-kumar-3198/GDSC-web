import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://gdsc-student-backend-task-1.onrender.com/api/v1/users/getdata");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Using API's To Fetch Details</h1>
      {data.map((item, index) => (
        <div key={index} className="bg-cyan-100 shadow-md rounded-lg p-4 mb-4 w-full max-w-md">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-gray-700">{item.phoneNo}</p>
          <p className="text-gray-700">{item.password}</p>
          <p className="text-gray-700">{item.services}</p>
          <p className="text-gray-700">{item.createdAt}</p>
          <p className="text-gray-700">{item.UpdatedAt}</p>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default App;
