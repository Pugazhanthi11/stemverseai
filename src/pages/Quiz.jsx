import { useState } from "react";

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const generateQuiz = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/ai/generate-quiz",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic: "Ceiling Fan",
          }),
        }
      );

      const data = await response.json();

      let quizData;

      try {
        quizData = JSON.parse(
          data.quiz.replace(/```json|```/g, "")
        );
      } catch {
        alert("Quiz format invalid.");
        setLoading(false);
        return;
      }

      setQuiz(quizData);

    } catch (error) {
      console.log(error);
      alert("Failed to generate quiz");
    }

    setLoading(false);
  };

  const selectAnswer = (questionIndex, option) => {
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  };

  const submitQuiz = () => {
    let total = 0;

    quiz.forEach((q, index) => {
      if (answers[index] === q.answer) {
        total++;
      }
    });

    setScore(total);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-10">

      {/* Heading */}
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          STEM Quiz
        </h1>

        <p className="text-gray-400 mt-3">
          Test your understanding of STEM concepts.
        </p>

        {/* Generate Button */}
        <button
          onClick={generateQuiz}
          disabled={loading}
          className="
          mt-8
          bg-cyan-500
          hover:bg-cyan-600
          px-6
          py-3
          rounded-xl
          font-semibold
          transition
        "
        >
          {loading ? "Generating..." : "Generate Quiz"}
        </button>

        {/* Quiz Questions */}
        <div className="mt-10 space-y-8">

          {quiz.map((q, index) => (
            <div
              key={index}
              className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              p-6
            "
            >

              <h2 className="text-lg md:text-xl font-semibold">
                {index + 1}. {q.question}
              </h2>

              <div className="grid gap-3 mt-5">

                {q.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() =>
                      selectAnswer(index, option)
                    }
                    className={`
                      text-left
                      p-4
                      rounded-xl
                      border
                      transition

                      ${
                        answers[index] === option
                          ? "bg-cyan-500 border-cyan-500"
                          : "bg-zinc-800 border-zinc-700 hover:border-cyan-400"
                      }
                    `}
                  >
                    {option}
                  </button>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Submit Button */}
        {quiz.length > 0 && (
          <button
            onClick={submitQuiz}
            className="
            mt-10
            bg-green-500
            hover:bg-green-600
            px-6
            py-3
            rounded-xl
            font-semibold
          "
          >
            Submit Quiz
          </button>
        )}

        {/* Score */}
        {score !== null && (
          <div
            className="
            mt-10
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            p-6
          "
          >
            <h2 className="text-3xl font-bold text-cyan-400">
              Your Score
            </h2>

            <p className="text-2xl mt-4">
              {score} / {quiz.length}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Quiz;