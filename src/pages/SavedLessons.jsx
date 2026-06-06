import { useEffect, useState } from "react";
import axios from "axios";

function SavedLessons() {

  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchLessons = async () => {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/ai/saved-lessons"
        );

        setLessons(response.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

    fetchLessons();

  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-8">

      <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-8">
        ⭐ Saved Lessons
      </h1>

      {loading ? (

        <p>Loading...</p>

      ) : lessons.length === 0 ? (

        <div
          className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
          p-10
          text-center
          "
        >
          <h2 className="text-2xl font-bold">
            No Saved Lessons
          </h2>

          <p className="text-gray-400 mt-3">
            Save lessons from the Result page.
          </p>
        </div>

      ) : (

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          "
        >

          {lessons.map((lesson) => (

            <div
              key={lesson._id}
              className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-3xl
              p-6
              "
            >

              <h2
                className="
                text-xl
                font-bold
                text-cyan-400
                mb-4
                "
              >
                {lesson.image}
              </h2>

              <p
                className="
                text-gray-300
                whitespace-pre-wrap
                line-clamp-6
                "
              >
                {lesson.analysis}
              </p>

              <p
                className="
                text-gray-500
                mt-4
                text-sm
                "
              >
                {new Date(
                  lesson.createdAt
                ).toLocaleString()}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default SavedLessons;