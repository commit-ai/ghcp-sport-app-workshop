"use client";

import { useEffect, useState } from "react";

export default function Optimization() {
  const [optimization, setOptimization] = useState(null);
  const [loading, setLoading] = useState(false);

  // use effect to fetch the data from optimization api
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3001/api/optimize");
        const data = await response.json();
        setOptimization(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Optimization</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>
            The page took{" "}
            <span className="text-bold text-xl bg-[#E5FF00]">
              {optimization}
            </span>{" "}
            seconds to load. <br /> Please optimize the code with GitHub Copilot
            to improve the response time.
          </p>
        </div>
      )}
    </div>
  );
}
