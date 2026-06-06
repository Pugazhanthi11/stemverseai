import { useEffect, useState } from "react";
import axios from "axios";

function History() {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchHistory = async () => {

      try {

        const response = await axios.get(
          "https://stemverseai1.onrender.com/api/ai/history"
        );

        setHistory(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    fetchHistory();

  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-8">

      <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-8">
        Scan History
      </h1>

      {loading ? (

        <p>Loading...</p>

      ) : history.length === 0 ? (

        <p>No scans found.</p>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {history.map((scan) => (

            <div
              key={scan._id}
              className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-3xl
                p-6
              "
            >

              <h2 className="text-lg font-bold text-cyan-400">
                {scan.image}
              </h2>

              <p
                className="
                  text-gray-300
                  mt-4
                  line-clamp-6
                  whitespace-pre-wrap
                "
              >
                {scan.analysis}
              </p>

              <p className="text-gray-500 mt-4 text-sm">
                {new Date(
                  scan.createdAt
                ).toLocaleString()}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default History;
